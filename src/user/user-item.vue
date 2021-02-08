<template>
  <div class="col-xs-12 col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div>{{ data.title }}</div>
        <div class="font-weight-bold" @click="deleteCard(index)">&times;</div>
      </div>
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
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteCard(index) {
      console.log("delete card", index);
      this.$emit("deleteItem", index);
    }
  }
};
</script>
