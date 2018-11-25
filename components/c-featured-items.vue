<template>
	<section class="c-featured">
		<h1 class="c-featured__heading">
			{{ sectionTitle }}
		</h1>
		<div class="l-featured__container">
			<article
				v-for="(post, index) in posts"
				:key="index">
				<ui-image
					:image="post.fields.featuredImage" />
				<nuxt-link :to="`/news/${post.fields.slug}`">
					<h3>{{ post.fields.title }}</h3>
				</nuxt-link>
			</article>
		</div>
	</section>
</template>

<script>
import UiImage from '@/components/UI/c-image'

export default {
	components: {
		UiImage
	},

	props: [
		'posts',
		'sectionTitle'
	]
}
</script>
