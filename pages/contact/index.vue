<template>
<div>
    <img
        class="c-page__featured-image"
        :src="pageData.featureImage.fields.file.url"
        :alt="pageData.featureImage.fields.description"
        :title="pageData.featureImage.fields.title">
    <section class="c-page__section s-page">
        <h1>{{pageData.title}}</h1>
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
export default {
    computed: {
        pageData() {
            return this.$store.state.page.pageData.fields
        }
    },
    async fetch({ store }) {
        await store.dispatch('page/getPageData', '2Znj4QVQz68Ioi0oSAOesM')
    }
}
</script>