<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <p>Some default layout content shared across all pages</p>
    <slot />
    <Footer />
  </div>
</template>
