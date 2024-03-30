import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  server:{
    proxy:{
      // "/register":"http://localhost:3000/",
      // "/regdashboard":"http://localhost:3000/",
      // "/logindashboard":"http://localhost:3000/"
      "/register":"https://schoolnode-2uw8.onrender.com/",
      "/regdashboard":"https://schoolnode-2uw8.onrender.com/",
      "/logindashboard":"https://schoolnode-2uw8.onrender.com/"
    },
  },
  plugins: [react()],
  base:"/school/"

})
