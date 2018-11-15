<template>
    <div>
        <header-section/>
        <main>
            <nuxt/>
        </main>
        <footer-section/>
    </div>
</template>

<script>
import headerSection from '@/components/c-header.vue'
import footerSection from '@/components/c-footer.vue'

export default {
    components: {
        headerSection,
        footerSection
    }
}
</script>