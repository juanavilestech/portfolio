# Portfolio Profesional de Desarrollador

Este proyecto es un portfolio moderno y de alto rendimiento construido con React, Node.js y Express. Extrae y enriquece automáticamente datos de proyectos desde GitHub para mostrar un perfil técnico actualizado en tiempo real.

## Características

- **UI/UX Moderna**: Construido con React y Tailwind CSS.
- **Proyectos Dinámicos**: Obtiene repositorios reales de GitHub y los enriquece con metadatos personalizados.
- **Micro-animaciones**: Transiciones fluidas usando Framer Motion.
- **Modo Oscuro**: Diseño responsivo con un botón nativo de cambio de tema claro/oscuro.
- **Listo para Docker**: Pre-configurado para despliegue en contenedores.
- **Optimizado para SEO**: HTML semántico y estructura optimizada.

## Stack Tecnológico

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express, Axios.
- **Infraestructura**: Docker, Docker Compose.

## Empezando

### Desarrollo Local

1. **Clonar el repositorio**
2. **Instalar dependencias**:
   ```bash
   # En la carpeta frontend
   npm install
   # En la carpeta backend
   npm install
   ```
3. **Ejecutar los servicios**:
   ```bash
   # Backend
   cd backend && npm run dev
   # Frontend
   cd frontend && npm run dev
   ```

### Docker

Ejecuta todo el stack con un solo comando:

```bash
docker-compose up --build
```

## Estructura del Proyecto

- `/frontend`: Aplicación en React.
- `/backend`: Servicio de API express.
- `/content`: Contenido estático y base de datos de proyectos.
- `/infra`: Configuraciones de despliegue.
