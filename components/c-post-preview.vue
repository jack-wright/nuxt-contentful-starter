<template>
	<div class="c-blog-posts__preview">
		<ui-image
			:image="post.fields.featuredImage" />
		<nuxt-link :to="`/news/${post.fields.slug}`">
			<h3>{{ post.fields.title }}</h3>
		</nuxt-link>
	</div>
</template>

<script>
import UiImage from '@/components/UI/c-image'

export default {
	components: {
		UiImage
	},

	props: [
		'post'
	]
}
</script>