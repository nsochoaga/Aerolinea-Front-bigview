# Aerolínea Frontend ✈️

Este es el frontend de una aplicación web para la reserva de vuelos. Fue desarrollado con:

- Vite + React + TypeScript
- TailwindCSS
- React Router
- Autenticación con JWT

## 🚀 Instalación

Clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

## 📁 Estructura del proyecto

bash
Copiar
Editar
src/
├── api/ # Configuración de Axios
├── assets/ # Recursos estáticos
├── components/ # Componentes reutilizables
├── context/ # Contexto global (AuthContext)
├── hooks/ # Custom hooks
├── pages/ # Páginas del sitio
├── App.tsx # Componente principal con rutas
├── main.tsx # Punto de entrada
└── index.css # Estilos globales

## 🔒 Autenticación

La autenticación se maneja con tokens JWT almacenados en localStorage.

Al iniciar sesión exitosamente, se guarda el token.

Si el usuario está autenticado, puede acceder a las reservas.

La navegación es condicional dependiendo del estado de autenticación.

## ✅ Funcionalidades

Registro e inicio de sesión

Ver vuelos disponibles

Reservar vuelo si estás logueado

Ver reservas propias

Logout y redirecciones condicionales
