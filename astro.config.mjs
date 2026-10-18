import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://muhammadafiqyunanto27.github.io',
	// GitHub Pages (project site) butuh base /manajemen-bisnis;
	// di Vercel & lokal site di-root, jadi base '/'.
	base: process.env.GITHUB_ACTIONS ? '/manajemen-bisnis' : '/',
	integrations: [react()],
});
