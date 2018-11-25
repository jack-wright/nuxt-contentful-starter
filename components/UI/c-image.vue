<template>
	<figure 
		:class="['c-page__image-container', {'c-page__image-container--feature': feature}]">
		<img
			class="c-page__image js-lazy-loading"
			:data-src="image.fields.file.url"
			:data-alt="image.fields.description"
			:data-title="image.fields.title">
	</figure>
</template>

<script>
import LazyLoading from '@/services/lazy-loading'

export default {
	props: [
		'image',
		'feature'
	],

	mounted() {
		new LazyLoading()
	}
}
</script>