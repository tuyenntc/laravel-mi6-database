import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js', 'resources/js/people-of-interest/people-of-interest.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
