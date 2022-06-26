module.exports = {
	name: 'benmyers.dev', // optional, falls back to object key
	description: 'Ben’s personal site',
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use 'run' if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use 'site' if sites are all on the same origin and share assets.
		freshChrome: 'site'
	},
	urls: [
		'https://benmyers.dev',
		'https://benmyers.dev/about/',
		'https://benmyers.dev/appearances/',
		// Popular Posts
		'https://benmyers.dev/blog/on-the-dl/',
		'https://benmyers.dev/blog/eleventy-data-cascade/',
		'https://benmyers.dev/blog/css-can-influence-screenreaders/',
	]
};