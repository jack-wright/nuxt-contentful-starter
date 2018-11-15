<template>
<div>    
    <section class="c-page__section s-page c-container">
        <h1>{{ pageData.title }}</h1>
        <div v-html="bodyContent"></div>
    </section>
</div>
</template>

<script>
import contentful from '@/services/contentful/api'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
    computed: {
        pageData() {
            return this.$store.state.page.pageData.privacyPolicy.fields
        },
        bodyContent() {
            return documentToHtmlString(this.pageData.body)
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('privacyPolicy')) {
            await store.dispatch('page/getPageData', {id: '4RCKO6zFDiqAiK8oAuqA00', page: 'privacyPolicy'})
        }
    }
}
</script>