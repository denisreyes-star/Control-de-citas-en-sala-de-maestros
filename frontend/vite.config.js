JS
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // 0.0.0.0
        port: 5173,
        strictPort: true, // falla en vez de cambiar de puerto en silencio
        watch: {
            usePolling: true, // ← clave para HMR en Windows/WSL 2
            interval: 100,
        },
    },
})