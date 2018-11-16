<template>
<div>
    <feature-image 
        :image="pageData.featureImage"/>
    <div class="c-blog-posts"> 
        <copy-block 
            :title="pageData.title"
            :content="bodyContent"/>
        <section class="c-blog-posts__section">
            <post-preview
                v-for="(post, index) in posts"
                :key="index"
                :post="post" />
        </section>
    </div>
</div>
</template>

<script>
import featureImage from '@/components/c-hero-image'
import postPreview from '@/components/c-post-preview'
import copyBlock from '@/components/c-copy-block'
import helpers from '@/services/helpers'

export default {
    components: {
        copyBlock,
        featureImage,
        postPreview
    },
    computed: {
        pageData() {
            return this.$store.state.page.pageData.news.fields
        },
        bodyContent() {
            return helpers.contentDisplay(this.pageData.body)
        },
        posts() {
            return this.$store.state.posts.posts
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('news')) {
            await store.dispatch('page/getPageData', {id: '2nwmrQwdJOq46sYAQOEWug', page: 'news'})
        }

        if(!store.state.posts.posts.length > 0) {
            await store.dispatch('posts/getPosts')
        }
    }
}
</script>