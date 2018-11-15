<template>
    <div>
        <navigation/>
        <main>
            <nuxt/>
        </main>
    </div>
</template>

<script>
import navigation from '@/components/c-header.vue';
export default {
    components: {
        navigation
    }
}
</script>