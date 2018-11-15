<template>
<div>
    <img
        class="c-page__featured-image"
        :src="pageData.featureImage.fields.file.url"
        :alt="pageData.featureImage.fields.description"
        :title="pageData.featureImage.fields.title">
    <section class="c-page__section s-page c-container">
        <h1>{{ pageData.title }}</h1>
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
            return this.$store.state.page.pageData.contact.fields
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
        if (!store.state.page.pageData.hasOwnProperty('contact')) {
            await store.dispatch('page/getPageData', {id: '2Znj4QVQz68Ioi0oSAOesM', page: 'contact'})
        }
    }
}
</script>