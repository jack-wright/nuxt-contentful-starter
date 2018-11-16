<template>
	<figure class="c-page__featured-image-container">
		<img
			class="c-page__featured-image"
			:src="image.fields.file.url"
			:alt="image.fields.description"
			:title="image.fields.title">
	</figure>
</template>

<script>
export default {
	props: [
		'image'
	]
}
</script>
