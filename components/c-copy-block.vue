<template>
	<section class="c-page__section s-page">
		<h1 v-if="title">
			{{ title }}
		</h1>
		<div v-html="content"></div>
	</section>
</template>

<script>
export default {
	props: [
		'title',
		'content'
	]
}
</script>