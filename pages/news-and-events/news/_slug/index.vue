<template>
<div>
    <figure class="c-page__featured-image-container">
        <img
            class="c-page__featured-image"
            :src="post.featuredImage.fields.file.url"
            :alt="post.featuredImage.fields.description"
            :title="post.featuredImage.fields.title">
    </figure>
    <section class="c-page__section s-page c-container">
        <h1>{{ post.title }}</h1>
        <div v-html="bodyContent"></div>
        <nuxt-link
            to="/news-and-events"
            class="c-blog-posts__button">
            Back
        </nuxt-link>
    </section>
</div>
</template>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
    computed: {
        post() {
            return this.$store.state.post.currentPost.fields
        },
        bodyContent() {
            const options = {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => `<img src="${node.data.target.fields.file.url}">`
                }
            }
            return documentToHtmlString(this.post.body, options)
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('post/getPostBySlug', params.slug)
    }
}
</script>