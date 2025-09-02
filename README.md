# React Task Client

Cliente en **React (Vite)** que consume la **Node API Tasks** (CRUD de tareas).
- Lista tareas, crea y elimina.
- Configurable vía variable `VITE_API_BASE`.

## 🚀 Scripts
```bash
npm install
npm run dev       # desarrollo
npm run build     # build producción
npm run preview   # previsualizar build
```

**.env.example**
```env
VITE_API_BASE=http://localhost:3000
```

## 📦 Deploy
- Desplegar en **Vercel** o **Netlify** (build: `npm run build`, directorio: `dist`).
- Configurar `VITE_API_BASE` en variables de entorno del servicio de deploy.

## 📝 Licencia
MIT
