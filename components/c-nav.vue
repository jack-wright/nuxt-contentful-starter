<template>
	<nav class="c-nav">
		<div class="c-nav__brand">
			<nuxt-link 
				to="/" 
				title="The home page of the site"
				class="c-nav__link"
				exact>
				<img 
					src="@/assets/brand.png"
					class="c-nav__logo"
					alt="generic brand logo"
					title="brand logo">
			</nuxt-link>
		</div>
		<ul class="c-nav__links">
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
					to="/news"
					title="The latest news and events for the site"
					class="c-nav__link">
					News
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
			<li class="c-nav__links-legal">
				<ul>
					<li class="c-nav__item">
						<nuxt-link 
							to="/privacy-policy"
							title="Privacy policy document for this site"
							class="c-nav__link">
							Privacy policy
						</nuxt-link>
					</li>
					<li class="c-nav__item">
						<nuxt-link
							to="/terms-and-conditions"
							title="Terms and conditions for using this site"
							class="c-nav__link">
							Terms &amp; conditions
						</nuxt-link>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>