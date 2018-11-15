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

    plugins: [
        '@/plugins/contentful'
    ],

    generate: {
        dir: 'public'
    },

    env: {
        CONTENTFUL_SPACE_ID: 'k97mn349xsyq',
        CONTENTFUL_CDA_ACCESS_TOKEN: 'c48450de5a51c8682545309331bef42ccd04f6a2d41ee939747c9bf12c0b0bd8'
    },

    loading: false
}