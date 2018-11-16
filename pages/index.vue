<template>
<div>
    <div class="c-page__featured-section">
        <figure class="c-page__featured-image-container">
            <img
                class="c-page__featured-image"
                :src="pageData.featuredImage.fields.file.url"
                :alt="pageData.featuredImage.fields.description"
                :title="pageData.featuredImage.fields.title">
        </figure>
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
       <div v-html="bodyContent"></div>
    </section>
</div>
</template>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
    computed: {
        pageData() {
            return this.$store.state.page.pageData.home.fields
        },
        bodyContent() {
            const options = {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => `<img src="${node.data.target.fields.file.url}">`
                }
            }
            return documentToHtmlString(this.pageData.body, options)
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('home')) {
            await store.dispatch('page/getPageData', {id: '4ix0SohEOIU0EOAKuQSusY', page: 'home'})
        }
    }
}
</script>