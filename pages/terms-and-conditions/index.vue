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
            return this.$store.state.page.pageData.termsAndConditions.fields
        },
        bodyContent() {
            return helpers.contentDisplay(this.pageData.body)
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('termsAndConditions')) {
            await store.dispatch('page/getPageData', {id: '2jPimAoKFeComMC4OGyM6e', page: 'termsAndConditions'})
        }
    }
}
</script>