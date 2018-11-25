<template>
<div>
    <div class="c-page__featured-section">
        <ui-image
            v-if="pageData.featuredImage"
            :image="pageData.featuredImage"
            :feature="true" />
        <div class="c-page__introduction">
            <img
                v-if="pageData.brandLogo"
                class="c-page__brand-logo"
                :src="pageData.brandLogo.fields.file.url"
                :alt="pageData.brandLogo.fields.description"
                :title="pageData.brandLogo.fields.title">
            <h1 v-if="pageData.introductionMessage"
                class="c-page__heading">
                {{ pageData.introductionMessage }}
            </h1>
        </div>
    </div>
    <div class="c-page__section l-container">
        <copy-block
            :content="pageData.body"/>
        <featured-item
            sectionTitle="Featured Posts"
            :posts="pageData.featuredPosts" />
    </div>
</div>
</template>

<script>
import copyBlock from '@/components/c-copy-block'
import UiImage from '@/components/UI/c-image'
import FeaturedItem from '@/components/c-featured-items'

export default {
    components: {
        copyBlock,
        UiImage,
        FeaturedItem
    },
    computed: {
        pageData() {
            return this.$store.state.page.pageData.home.fields
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('home')) {
            await store.dispatch('page/getPageData', {id: '4ix0SohEOIU0EOAKuQSusY', page: 'home'})
        }
    }
}
</script>