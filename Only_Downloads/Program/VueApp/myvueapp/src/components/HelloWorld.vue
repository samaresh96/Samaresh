<script setup>
defineProps({
  obj: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>{{ obj }}</h1>
  </div>
</template>
