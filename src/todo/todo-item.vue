<template>
  <div class="todo-item">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <input
          type="checkbox"
          class="block mr-1"
          v-model="completed"
          @change="doneEdit"
        />
        <div v-if="!editing" class="todo-item-label" @dblclick="editTodo">
          {{ title }}
        </div>
        <input
          v-else
          class="form-control todo-item-edit"
          type="text"
          v-model="title"
          @blur="doneEdit"
          @keyup.enter="doneEdit"
          @keyup.esc="cancelEdit"
          v-focus
        />
      </div>
      <div @click="removeTodo(index)">&times; delete</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: ""
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  watch: {
    checkAll() {
      if (this.checkAll) {
        this.completed = true;
      } else {
        this.completed = this.todo.completed;
      }
    }
  },
  methods: {
    removeTodo(index) {
      // this.$emit("removedTodo", index);
      eventBus.$emit("removedTodo", index);
    },
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    doneEdit() {
      if (this.title.trim() == "") {
        this.title = this.beforeEditCache;
      }
      this.editing = false;
      eventBus.$emit("finishedEdit", {
        id: this.id,
        title: this.title,
        completed: this.completed,
        editing: this.editing
      });
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    }
  }
};
</script>
