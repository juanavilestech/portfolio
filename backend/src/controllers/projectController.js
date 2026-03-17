const githubService = require("../services/githubService");
const projectsData = require("../../../content/projects.json");

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

const contact = (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form submission:", { name, email, message });
  res.json({ success: true, message: "Message received!" });
};

module.exports = { getProjects, getProjectById, contact };
