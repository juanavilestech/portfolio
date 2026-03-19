const githubService = require("../services/githubService");
const projectsData = require("../../content/projects.json");

const getProjects = async (req, res) => {
  try {
    // We could potentially merge real GitHub data with our custom descriptions
    const githubRepos = await githubService.getRepositories("juanavilestech");

    const enrichedProjects = projectsData.map((p) => {
      const repo = githubRepos.find(
        (r) =>
          r.name.toLowerCase() === p.name.toLowerCase() ||
          r.html_url === p.github,
      );
      return {
        ...p,
        stars: repo ? repo.stargazers_count : 0,
        forks: repo ? repo.forks_count : 0,
        updatedAt: repo ? repo.updated_at : null,
        language: repo ? repo.language : null,
      };
    });

    res.json(enrichedProjects);
  } catch (error) {
    // If GitHub API fails, return static data at least
    res.json(projectsData);
  }
};

const getProjectById = (req, res) => {
  const project = projectsData.find((p) => p.id === req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
};

const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const contact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY no encontrada. El mensaje no se enviará.");
    console.log("Datos del formulario:", { name, email, message });
    return res.json({
      success: true,
      message: "Modo de desarrollo: Mensaje recibido en consola.",
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["juanavilestech@gmail.com"],
      subject: `📬 Nuevo mensaje de ${name} - Portfolio`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0ea5e9;">Nuevo contacto desde tu Portfolio</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 10px; border: 1px solid #e2e8f0; margin-top: 10px;">
            <p style="margin: 0;"><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap; color: #475569;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8;">
            Este mensaje fue enviado directamente desde tu sitio web desplegado en Vercel.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return res.status(400).json({ error });
    }

    res.json({ success: true, message: "¡Email enviado exitosamente!" });
  } catch (err) {
    console.error("Fallo general en el envío:", err);
    res
      .status(500)
      .json({ success: false, message: "Error interno al enviar el correo." });
  }
};

module.exports = { getProjects, getProjectById, contact };
