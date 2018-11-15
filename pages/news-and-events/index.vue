<template>
<section class="c-blog-posts">
    <div
		v-for="(post, index) in posts"
		:key="index">
		<nuxt-link :to="`/news-and-events/news/${post.fields.title}`"><h2>{{ post.fields.title }}</h2></nuxt-link>
	</div>
</section>
</template>

<script>


export default {
    computed: {
        posts() {
            return this.$store.state.posts.posts
        }
    },
    async fetch({ store }) {
        if(!store.state.posts.posts.length > 0) {
            await store.dispatch('posts/getPosts')
        }
    }
}
</script>