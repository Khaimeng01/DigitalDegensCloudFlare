import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './', // Change '/' to './' for Cloudflare Pages
    plugins: [react()],
});
