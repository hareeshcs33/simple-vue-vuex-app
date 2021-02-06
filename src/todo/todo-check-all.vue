<template>
  <div class="d-flex align-items-center font-weight-bold">
    <input
      type="checkbox"
      class="block mr-1"
      :checked="!anyRemaining"
      @change="allChecked"
    />check all
  </div>
</template>
<script>
export default {
  props: {
    anyRemaining: Boolean,
    required: true
  },
  methods: {
    allChecked() {
      eventBus.$emit("checkAllChanged", this.anyRemaining);
    }
  }
};
</script>
