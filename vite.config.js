import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		minify: 'terser',
		// oldest version with >=0.5% usage in JP
		target: ['chrome109', 'safari15.8', 'firefox121']
	}
});
