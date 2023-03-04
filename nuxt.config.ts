// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	typescript: {
		strict: true
	},
	build: {
	},
	tailwindcss: {
		cssPath: '~/assets/css/main.css',
		configPath: 'tailwind.config',
		exposeConfig: false,
		injectPosition: 0,
		viewer: true,
	}
})
