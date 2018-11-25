<template>
    <header class="c-header">
        <div class="c-nav__brand">
            <img 
                src="/logo.png"
                class="c-nav__logo"
                alt="generic brand logo"
                title="brand logo"
                @click="toHomePage">
		</div>
        <navigation-menu 
            :header="true" />
        <div class="c-hamburger"
            @click="openMenu">
            <div class="c-hamburger__bar" />
        </div>
    </header>
</template>

<script>
import helpers from '@/services/helpers'
import navigationMenu from '@/components/c-nav.vue'

export default {
    components: {
        navigationMenu
    },

    methods: {
        openMenu() {
            helpers.toggleOpenMenu()
        },

        toHomePage() {
            this.$router.push('/')
        }
    },

    watch: {
        '$route': () => {
            helpers.closeMenu()
        } 
    }
}
</script>