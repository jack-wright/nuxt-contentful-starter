<template>
	<section class="s-page">
		<h1 v-if="title">
			{{ title }}
		</h1>
		<div :class="['l-page', {'l-page--contact': form}]">
			<div v-html="bodyContent"></div>
			<form-block
				v-if="form"
				:type="form" />
		</div>
		<nuxt-link
			v-if="backLink"
			:to="backLink"
			class="u-button">
        	Back
    	</nuxt-link>
	</section>
</template>

<script>
import helpers from '@/services/helpers'
import FormBlock from '@/components/c-form'

export default {
	components: {
		FormBlock
	},

	props: [
		'title',
		'content',
		'backLink',
		'form'
	],

	computed: {
		bodyContent() {
			return helpers.contentDisplay(this.content)
		}
	},

	mounted() {
		this.wrapAndTitleIframes()
	},

	methods: {
		/**
		 * Add a class to the parent wrapper for the embedded iframes
		 * and title the iframe for accessibility purposes
		 */
		wrapAndTitleIframes() {
			let iframe = this.$el.querySelector('iframe')
			if (iframe) {
				this.wrapIframe(iframe)
				this.titleIframe(iframe)
			}
		},

		/**
		 * Wrap the iframe in a video aspect ratio class that will
		 * keep the video width responsive, but still keep the aspect ratio
		 */
		wrapIframe(iframe) {
			iframe.parentNode.classList.add('u-video-aspect-ratio')
		},

		/**
		 * Give the iframe a title attribute so that screen readers 
		 * can describe what it is
		 */
		titleIframe(iframe) {
			iframe.setAttribute('title', 'This is an iframe')
		}
	}
}
</script>