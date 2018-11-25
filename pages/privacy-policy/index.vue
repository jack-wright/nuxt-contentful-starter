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
            :content="pageData.body" />
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
            return this.$store.state.page.pageData.privacyPolicy.fields
        }
    },
    async fetch({ store }) {
        if (!store.state.page.pageData.hasOwnProperty('privacyPolicy')) {
            await store.dispatch('page/getPageData', {id: '5ZhxgB8GvSi44e2iGO2ioW', page: 'privacyPolicy'})
        }
    }
}
</script>