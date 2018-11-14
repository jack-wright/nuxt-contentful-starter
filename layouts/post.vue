<template>
    <div>
        <navigation/>
        <main class="c-container">
            <nuxt/>
        </main>
    </div>
</template>

<script>
import navigation from '@/components/c-nav.vue';
export default {
    components: {
        navigation
    }
}
</script>