
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script:[
      {src: '/assets/js/jquery-2.2.4.min.js'},
      {src: '/assets/js/plugins.js'},
      {src: '/assets/js/functions.js'},
      {src: 'https://js.stripe.com/v3/'},
      {src: 'https://checkout.stripe.com/checkout.js'}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: '/assets/css/bootstrap.min.css', rel: 'stylesheet', type:'text/css'},
      { href: '/assets/css/style.css', rel: 'stylesheet', type:'text/css'},
      { href: '/assets/css/external.css', rel: 'stylesheet', type:'text/css'},
      { href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700ii%7CMerriweather:300,300i,400,400i,700,700i,900,900i', rel: 'stylesheet', type:'text/css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    // Simple usage
    'nuxt-stripe-module',

    // With options
    ['nuxt-stripe-module', {
      /* module options */
      version: 'v3', // Default
      publishableKey: 'pk_test_ZCI214Ne4jFD5Dj3FyVO6s8200Cqp9AJGO'
    }],
 ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   router: {
		  base: '/'
	  },
    extend (config, ctx) {
    }
  }
}
