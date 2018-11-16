<template>
<div>
    <feature-image
        :image="post.featuredImage" />
    <copy-block
        :title="post.title"
        :content="bodyContent" />
    <nuxt-link
        to="/news"
        class="c-blog-posts__button">
        Back
    </nuxt-link>
</div>
</template>

<script>
import featureImage from '@/components/c-hero-image'
import copyBlock from '@/components/c-copy-block'
import helpers from '@/services/helpers'

export default {
    components: {
        copyBlock,
        featureImage
    },
    computed: {
        post() {
            return this.$store.state.post.currentPost.fields
        },
        bodyContent() {
            return helpers.contentDisplay(this.post.body)
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('post/getPostBySlug', params.slug)
    }
}
</script>