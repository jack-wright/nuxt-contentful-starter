<template>
<div>
    <ui-image 
        v-if="pageData.featureImage"
        imageClass="c-page__image"
        :image="pageData.featureImage" 
        :feature="true" /> 
    <div class="c-page__section l-container">
        <copy-block
            class="c-page__section--archive"
            :title="pageData.title"
            :content="pageData.body"/>
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
import postPreview from '@/components/c-post-preview'
import copyBlock from '@/components/c-copy-block'
import UiImage from '@/components/UI/c-image'

export default {
    components: {
        copyBlock,
        UiImage,
        postPreview
    },
    computed: {
        pageData() {
            return this.$store.state.page.pageData.news.fields
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