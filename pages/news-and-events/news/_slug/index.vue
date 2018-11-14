<template>
<div>
    <img
        class="c-page__featured-image"
        :src="post.featuredImage.fields.file.url"
        :alt="post.featuredImage.fields.description"
        :title="post.featuredImage.fields.title">
    <section class="c-page__section s-page">
        <h1>{{post.title}}</h1>
        <div 
            v-for="(paragraph, index) in post.body.content"
            :key="index"
            v-if="paragraph.content[0] && paragraph.content[0].value"
            class="c-page__section">
            <p>{{ paragraph.content[0].value }}</p>
        </div>
    </section>
</div>
</template>

<script>
export default {
    computed: {
        post() {
            return this.$store.state.post.currentPost.fields
        }
    },
    async fetch({ store, params }) {
        await store.dispatch('post/getPostByTitle', params.slug)
    }
}
</script>