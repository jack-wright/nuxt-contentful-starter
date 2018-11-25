<template>
    <footer class="c-footer">
        <div class="c-nav__brand">
			<nuxt-link 
				to="/" 
				title="The home page of the site"
				class="c-nav__link"
				exact>
				<img 
					src="/logo.png"
					class="c-nav__logo"
					alt="generic brand logo"
					title="brand logo">
			</nuxt-link>
		</div>
        <navigation-menu 
            :legal="true"/>
    </footer>
</template>

<script>
import navigationMenu from '@/components/c-nav.vue';
export default {
    components: {
        navigationMenu
    }
}
</script>