<template>
  <div class="d-flex align-items-center">
    <button
      class="btn btn-outline-dark btn-sm px-3"
      :class="{ 'btn-success': filter == 'all' }"
      @click="changeFilter('all')"
    >
      All
    </button>
    <button
      class="btn btn-outline-dark btn-sm px-3 mx-1"
      :class="{ 'btn-success': filter == 'active' }"
      @click="changeFilter('active')"
    >
      Active
    </button>
    <button
      class="btn btn-outline-dark btn-sm px-3"
      :class="{ 'btn-success': filter == 'completed' }"
      @click="changeFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: "all"
    };
  },
  methods: {
    changeFilter(filter) {
      this.filter = filter;
      eventBus.$emit("filterChanged", filter);
    }
  }
};
</script>
