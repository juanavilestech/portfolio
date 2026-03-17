# Professional Developer Portfolio

This project is a modern, high-performance developer portfolio built with React, Node.js, and Express. It automatically extracts and enriches project data from GitHub to showcase a real-time technical profile.

## Features

- **Modern UI/UX**: Built with React and Tailwind CSS.
- **Dynamic Projects**: Fetches real repositories from GitHub and enriches them with custom metadata.
- **Micro-animations**: Smooth transitions using Framer Motion.
- **Dark Mode**: Responsive design with a native dark/light theme toggle.
- **Docker Ready**: Pre-configured for containerized deployment.
- **SEO Optimized**: Semantic HTML and optimized structure.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express, Axios.
- **Infrastructure**: Docker, Docker Compose.

## Getting Started

### Local Development

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   # In frontend folder
   npm install
   # In backend folder
   npm install
   ```
3. **Run the services**:
   ```bash
   # Backend
   cd backend && npm run dev
   # Frontend
   cd frontend && npm run dev
   ```

### Docker

Run the entire stack with a single command:

```bash
docker-compose up --build
```

## Project Structure

- `/frontend`: React application.
- `/backend`: Express API service.
- `/content`: Static content and project database.
- `/infra`: Deployment configurations.
