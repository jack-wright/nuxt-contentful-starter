<template>
<div>
    <ui-image 
        v-if="pageData.featureImage"
        imageClass="c-page__image"
        :image="pageData.featureImage"
        :feature="true" />
    <div class="c-page__section l-container">
        <copy-block
            :title="pageData.title"
            :content="pageData.body"
            :form="pageData.form" />
    </div>
</div>
</template>

<script>
import copyBlock from '@/components/c-copy-block'
import UiImage from '@/components/UI/c-image'

export default {
    components: {
        copyBlock,
        UiImage
    },
    computed: {
        pageData() {
            return this.$store.state.page.pageData.contact.fields
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('contact')) {
            await store.dispatch('page/getPageData', {id: '2Znj4QVQz68Ioi0oSAOesM', page: 'contact'})
        }
    }
}
</script>