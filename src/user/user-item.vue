<template>
  <div class="col-xs-12 col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header">{{ data.title }}</div>
      <div class="card-body">{{ data.body }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
