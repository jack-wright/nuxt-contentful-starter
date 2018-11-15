<template>
	<nav class="c-nav">
		<ul class="c-nav__links">
			<li class="c-nav__item--brand">
				<nuxt-link 
					to="/" 
					title="The home page of the site"
					class="c-nav__link"
					exact>
					<div class="c-nav__logo"></div>
				</nuxt-link>
			</li>
			<!-- Todmorden has a home link as well as the logo that goes back to home-->
			<li class="c-nav__item">
				<nuxt-link 
					to="/" 
					title="The home page of the site"
					class="c-nav__link"
					exact>
					Home
				</nuxt-link>
			</li>
			<li class="c-nav__item">
				<nuxt-link 
					to="/news-and-events"
					title="The latest news and events for the site"
					class="c-nav__link">
					News &amp; Events
				</nuxt-link>
			</li>
			<li class="c-nav__item">
				<nuxt-link
					to="/contact"
					title="Contact the site for any enquiries"
					class="c-nav__link">
					Contact
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>