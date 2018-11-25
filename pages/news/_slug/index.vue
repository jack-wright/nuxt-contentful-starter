<template>
<div>
    <ui-image
        v-if="post.featuredImage"
        imageClass="c-page__image"
        :image="post.featuredImage"
        :feature="true" />
    <div class="c-page__section l-container">
        <copy-block
            :title="post.title"
            :content="post.body"
            :backLink="'/news'" />
    </div>
</div>
</template>

<script>
import copyBlock from '@/components/c-copy-block'
import UiImage from '@/components/UI/c-image'

export default {
    components: {
        copyBlock,
        UiImage
    },
    computed: {
        post() {
            return this.$store.state.post.currentPost.fields
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('post/getPostBySlug', params.slug)
    }
}
</script>