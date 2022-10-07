<template>
  <div size="1" ref="root"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Bad',
  setup() {
    const foo = "adsf";
    console.log(foo);
    const bar = "adsf";
  }
});
</script>
