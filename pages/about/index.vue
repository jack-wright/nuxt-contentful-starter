<template>
<div>
    <img
        class="c-page__featured-image"
        :src="data.featureImage.fields.file.url"
        :alt="data.featureImage.fields.description"
        :title="data.featureImage.fields.title">
    <section class="c-page__section s-page">
        <h1>{{data.title}}</h1>
        <p 
            v-for="(paragraph, index) in data.body.content"
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
    asyncData() {
        return contentful.get('65ETPH2ShqwaoAqGaWe8sO')
        .then(result => {
            console.log(result);
            return { data: result.fields}
            //return { title: result.data.title }
        })
    }
}
</script>