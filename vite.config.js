import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', // Change this from '/Marketing-Website/' to '/'
    plugins: [react()],
});
