<script setup>
//export default {
//name: "default"
//}
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
    <AppHeader />
    <main>
        <slot />
    </main>
    <AppFooter />
</template>

<style scoped>

</style>