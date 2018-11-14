<template>
<div>
    <div class="c-page__featured-section">
        <img
            class="c-page__featured-image"
            :src="pageData.featuredImage.fields.file.url"
            :alt="pageData.featuredImage.fields.description"
            :title="pageData.featuredImage.fields.title">
        <div class="c-page__introduction">
            <img
                class="c-page__brand-logo"
                :src="pageData.brandLogo.fields.file.url"
                :alt="pageData.brandLogo.fields.description"
                :title="pageData.brandLogo.fields.title">
            <h1 class="c-page__heading">{{ pageData.introductionMessage }}</h1>
        </div>
    </div>
    <section class="c-page__section s-page c-container">
        <p 
            v-for="(paragraph, index) in pageData.body.content"
            :key="index"
            class="c-page__section">
            {{ paragraph.content[0].value }}
        </p>
    </section>
</div>
</template>

<script>
import contentful from '@/services/contentful/api'

export default {
    computed: {
        pageData() {
            return this.$store.state.page.pageData.fields
        }
    },
    async fetch({ store }) {
        await store.dispatch('page/getPageData', '4ix0SohEOIU0EOAKuQSusY')
    }
}
</script>