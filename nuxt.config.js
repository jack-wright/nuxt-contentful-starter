const title = "Spice and Rice | Premium Indian restaraunt",
  description = 'Spice and rice is a family run restaraunt, serving up dozens of favourite dishes, mixing a unique blend of spices to bring the ultimate taste sensation'
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