import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			origin: 'https://www.otonose.com',
			entries: ['/', '/en', '/ja', '/ko']
		},
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$paraglide: 'src/paraglide/*'
		}
	}
};

export default config;
