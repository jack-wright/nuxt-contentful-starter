<template>
<div>    
    <section class="c-page__section s-page">
        <h1>{{ pageData.title }}</h1>
        <div v-html="bodyContent"></div>
    </section>
</div>
</template>

<script>
import helpers from '@/services/helpers'

export default {
    computed: {
        pageData() {
            return this.$store.state.page.pageData.privacyPolicy.fields
        },
        bodyContent() {
            return helpers.contentDisplay(this.pageData.body)
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('privacyPolicy')) {
            await store.dispatch('page/getPageData', {id: '5ZhxgB8GvSi44e2iGO2ioW', page: 'privacyPolicy'})
        }
    }
}
</script>