<template>
  <div class="container">
    <div class="row">
      <div v-if="!dataLoaded">Loading...</div>
      <user-item
        v-for="(data, index) in filteredUserData"
        :data="data"
        :key="data.id"
        :index="index"
        @deleteItem="deleteItem"
        v-else
      ></user-item>
    </div>
    <div class="d-flex align-items-center justify-content-end">
      <button class="btn btn-outline-primary px-5 mr-3" @click="prevList">
        Prev
      </button>
      <button class="btn btn-outline-primary px-5" @click="nextList">
        Next
      </button>
    </div>
  </div>
</template>
<script>
import UserItem from "./user-item.vue";
export default {
  data() {
    return {
      userData: null,
      userDataItems: 0,
      dataLoaded: true
    };
  },
  methods: {
    prevList() {
      console.log("prev list");
    },
    nextList() {
      console.log("next list");
      console.log(this.userData);
    },
    deleteItem(index) {
      this.userData.splice(index, 1);
    }
  },
  computed: {
    filteredUserData() {
      return this.userData;
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(response => (this.userData = response.data))
      .catch(err => console.log(err));
  },
  components: {
    UserItem
  }
};
</script>
