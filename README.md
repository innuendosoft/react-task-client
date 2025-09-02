# React Task Client

Cliente en **React (Vite)** que consume la **Node API Tasks** (CRUD de tareas).
- Lista tareas, crea y elimina.
- Configurable vía variable `VITE_API_BASE` (por defecto `http://localhost:3000`).

## 🚀 Scripts
```bash
npm install
npm run dev       # desarrollo
npm run build     # build producción
npm run preview   # previsualizar build
```

## 🔧 Configuración
1. Copiá `.env.example` a `.env` y ajustá la URL de la API si es necesario.
2. Levantá tu backend (https://github.com/tuusuario/node-api-tasks).

**.env.example**
```env
VITE_API_BASE=http://localhost:3000
```

## 📦 Deploy
- Subí este repo a GitHub y desplegá en **Vercel** o **Netlify** (build: `npm run build`, directorio: `dist`).
- Recordá configurar `VITE_API_BASE` en variables de entorno del servicio de deploy.

## 🖼️ Capturas
![home](./public/screenshot-home.png)

## 📝 Licencia
MIT