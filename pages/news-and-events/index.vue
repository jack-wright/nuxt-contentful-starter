<template>
<div>
    <img
        class="c-page__featured-image"
        :src="pageData.featuredImage.fields.file.url"
        :alt="pageData.featuredImage.fields.description"
        :title="pageData.featuredImage.fields.title">
    <div class="c-blog-posts"> 
        <section class="c-blog-posts__info">
            <h1>{{ pageData.title }}</h1>
            <p>{{ pageData.introduction }}</p>
        </section>
        <section class="c-blog-posts__section">
            <div class="c-blog-posts__preview"
                v-for="(post, index) in posts"
                :key="index">
                <img 
                    :src="post.fields.featuredImage.fields.file.url" 
                    :alt="pageData.featuredImage.fields.description"
                    :title="pageData.featuredImage.fields.title">
                <nuxt-link :to="`/news-and-events/news/${post.fields.slug}`">
                    <h3>{{ post.fields.title }}</h3>
                </nuxt-link>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        pageData() {
            return this.$store.state.page.pageData.newsAndEvents.fields
        },

        posts() {
            return this.$store.state.posts.posts
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('newsAndEvents')) {
            await store.dispatch('page/getPageData', {id: '2K3veFuPi8AYI4s4uWICO', page: 'newsAndEvents'})
        }

        if(!store.state.posts.posts.length > 0) {
            await store.dispatch('posts/getPosts')
        }
    }
}
</script>