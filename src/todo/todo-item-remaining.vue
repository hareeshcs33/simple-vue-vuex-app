<template>
  <div>{{ remaining }} items left</div>
</template>
<script>
export default {
  props: {
    remaining: Number,
    required: true
  }
};
</script>
