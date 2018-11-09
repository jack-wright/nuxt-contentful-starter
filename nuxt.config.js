const title = "Site Name | A basic Nuxt starter",
  description = 'A basic Nuxt starter template'
export default {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: title,
        meta: [
            {'charset': 'UTF-8'},
            {'name': 'viewport', 'content': 'width=device-width', 'initial-scale': '1.0'},
            {'http-equiv': 'X-UA-Compatible', 'content': 'ie=edge'},
            {'name': 'description', 'content': description}
        ]
    },

    css: [
        '@/src/scss/style.scss'
    ],

    router: {
        linkActiveClass: 'c-nav__link--active'
    },

    plugins: [],

    generate: {
        dir: 'public'
    }
}