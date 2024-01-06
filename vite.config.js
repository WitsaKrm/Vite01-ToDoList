import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'Vite01-ToDoList',
  server: {
    port: 5173,
  },
})
