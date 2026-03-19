# AGENTS.md

## Project
Portfolio profesional de desarrollador enfocado en:
- Web Development
- Automation
- AI Integrations

Stack principal:
- Frontend: React / Vite
- Backend: Node.js / Express (Vercel Functions)
- Content: JSON based
- Deploy: Vercel

Objetivo:
Crear un portfolio moderno, rápido y optimizado para SEO que muestre proyectos, habilidades y casos reales.

---

# Agents

## 1. Frontend Agent
Responsabilidad:
Desarrollar toda la interfaz de usuario.

Tareas:
- Layout principal
- Componentes reutilizables
- Responsive design
- Animaciones
- Optimización UX/UI

Carpetas:
- /frontend

Tecnologías:
React / Vite
Tailwind
Framer Motion
Las habilidades usar skills de ui

---

## 2. Backend Agent
Responsabilidad:
Construir API y lógica del sistema.

Tareas:
- API REST
- Endpoint de contacto (Resend)
- Gestión de metadatos de proyectos (GitHub API)
- Integraciones externas

Carpetas:
- /api

Tecnologías:
Node.js
Express (Serverless)

---

## 3. Content & SEO Agent
Responsabilidad:
Crear contenido y optimizar posicionamiento.

Tareas:
- Descripción de proyectos
- SEO técnico
- Metadata

Carpetas:
- /content

---

## 4. DevOps Agent
Responsabilidad:
Gestionar el despliegue y performance.

Tareas:
- Configuración Vercel
- Monitoreo básico

---

## 5. Code Quality Agent
Responsabilidad:
Mantener calidad del código.

Tareas:
- Refactorización
- Code review
- Linting

Herramientas:
ESLint
Prettier

---

## Workflow

1. Backend Agent crea APIs en /api
2. Frontend Agent consume APIs desde /frontend
3. Content Agent agrega contenido en /content
4. DevOps Agent gestiona Vercel
5. Code Quality Agent revisa calidad
