<template>
  <div class="d-flex align-items-center">
    <button
      class="btn btn-sm btn-danger"
      v-if="showClearCompletedButton"
      @click="clearCompleted"
    >
      clear completed
    </button>
  </div>
</template>
<script>
export default {
  props: {
    showClearCompletedButton: Boolean,
    required: true
  },
  methods: {
    clearCompleted() {
      eventBus.$emit("clearCompletedTodos");
    }
  }
};
</script>
