<template>
<div>
    <div class="c-page__featured-section">
        <feature-image
            :image="pageData.featuredImage" />
        <div class="c-page__introduction">
            <img
                class="c-page__brand-logo"
                :src="pageData.brandLogo.fields.file.url"
                :alt="pageData.brandLogo.fields.description"
                :title="pageData.brandLogo.fields.title">
            <h1 class="c-page__heading">{{ pageData.introductionMessage }}</h1>
        </div>
    </div>
    <copy-block
        :content="bodyContent"/>
</div>
</template>

<script>
import copyBlock from '@/components/c-copy-block'
import featureImage from '@/components/c-hero-image'
import helpers from '@/services/helpers'

export default {
    components: {
        copyBlock,
        featureImage
    },
    computed: {
        pageData() {
            return this.$store.state.page.pageData.home.fields
        },
        bodyContent() {
            return helpers.contentDisplay(this.pageData.body)
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('home')) {
            await store.dispatch('page/getPageData', {id: '4ix0SohEOIU0EOAKuQSusY', page: 'home'})
        }
    }
}
</script>