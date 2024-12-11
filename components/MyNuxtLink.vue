<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li>
    <NuxtLink
      class="text-gray-500 text-base lg:text-base font-regular hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left"
      :to="to">
      <slot></slot>
    </NuxtLink>
  </li>
</template>
