## Diferencias entre Create React App (CRA) y Vite

### 1. Arranque y velocidad de desarrollo
- **Vite**: Utiliza ESBuild para el desarrollo, lo que permite un arranque y recarga en caliente (HMR) casi instantáneos, incluso en proyectos grandes.
- **CRA**: Utiliza Webpack, que puede ser más lento en el arranque y recarga, especialmente en proyectos grandes.

### 2. Estructura de archivos
- **Vite**: No requiere archivos de configuración grandes por defecto. La carpeta `public` sirve archivos estáticos directamente desde la raíz del proyecto.
- **CRA**: Incluye más archivos de configuración y scripts ocultos. La carpeta `public` también sirve archivos estáticos, pero el manejo de rutas puede diferir.

### 3. Configuración y personalización
- **Vite**: La configuración es simple y flexible usando `vite.config.js`. Permite modificar la configuración sin "eject" ni hacks.
- **CRA**: La configuración está oculta. Para personalizar, se debe hacer "eject", lo que complica el mantenimiento.

### 4. Soporte de módulos y sintaxis moderna
- **Vite**: Soporta ES Modules nativamente y JSX en archivos `.jsx` y `.tsx` sin configuración adicional.
- **CRA**: También soporta ES Modules y JSX, pero depende de Babel y Webpack.

### 5. Instalación de dependencias
- **Vite**: Instala menos dependencias y es más liviano.
- **CRA**: Instala más dependencias por defecto.

### 6. Scripts de desarrollo
- **Vite**: Usa `npm run dev`, `npm run build` y `npm run preview`.
- **CRA**: Usa `npm start`, `npm run build` y `npm test`.

### 7. Migración de recursos estáticos
- **Vite**: Los recursos estáticos deben ir en la carpeta `public` y se acceden con rutas absolutas (`/img.png`).
- **CRA**: Los recursos estáticos también van en `public`, pero a veces se accede usando `process.env.PUBLIC_URL`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
