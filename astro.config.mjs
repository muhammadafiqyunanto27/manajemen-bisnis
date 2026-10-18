import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages project site: https://muhammadafiqyunanto27.github.io/manajemen-bisnis/
	site: 'https://muhammadafiqyunanto27.github.io',
	base: '/manajemen-bisnis',
	integrations: [react()],
});
