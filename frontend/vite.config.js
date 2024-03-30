import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  server:{
    proxy:{
      // "/register":"http://localhost:3000/",
      // "/regdashboard":"http://localhost:3000/",
      // "/logindashboard":"http://localhost:3000/"
      "/register":"https://school-management1.vercel.app",
      "/regdashboard":"https://school-management1.vercel.app",
      "/logindashboard":"https://school-management1.vercel.app"
    },
  },
  plugins: [react()],
  base:"/school/"

})
