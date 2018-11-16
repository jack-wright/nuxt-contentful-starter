<template>
	<div class="c-blog-posts__preview">
		<img 
			:src="post.fields.featuredImage.fields.file.url" 
			:alt="post.fields.featuredImage.fields.description"
			:title="post.fields.featuredImage.fields.title">
		<nuxt-link :to="`/news/${post.fields.slug}`">
			<h3>{{ post.fields.title }}</h3>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: [
		'post'
	]
}
</script>