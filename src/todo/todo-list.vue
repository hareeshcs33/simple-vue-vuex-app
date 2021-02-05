<template>
  <div class="container mx-auto">
    <input
      type="text"
      class="form-control"
      v-model="newTodo"
      placeholder="what need to be done......"
      @keyup.enter="addTodo"
    />
    <div class="todo-list">
      <transition-group
        name="fade"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <todo-item
          v-for="(todo, index) in todos"
          :key="todo.id"
          :todo="todo"
          :index="index"
          @removedTodo="removeTodo"
          @finishedEdit="finishedEdit"
          :checkAll="!anyRemaining"
          class="todo-item card my-2 p-2"
        >
        </todo-item>
      </transition-group>
    </div>
    <div class="card p-2">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <input
            type="checkbox"
            class="block mr-1"
            :checked="!anyRemaining"
            @change="checkAllTodos"
          />check all
        </div>
        <div>{{ remaining }} items left</div>
      </div>
    </div>
    <div class="card p-2">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <button
            class="btn btn-outline-dark btn-sm px-3"
            :class="{ 'btn-success': filter == 'all' }"
            @click="filter = 'all'"
          >
            All
          </button>
          <button
            class="btn btn-outline-dark btn-sm px-3 mx-1"
            :class="{ 'btn-success': filter == 'active' }"
            @click="filter = 'active'"
          >
            Active
          </button>
          <button
            class="btn btn-outline-dark btn-sm px-3"
            :class="{ 'btn-success': filter == 'completed' }"
            @click="filter = 'completed'"
          >
            Completed
          </button>
        </div>
        <div>
          <transition name="fade">
            <button
              class="btn btn-sm btn-danger"
              v-if="showClearCompletedButton"
              @click="clearCompleted"
            >
              clear completed
            </button>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TodoItem from "./todo-item.vue";
export default {
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      filter: "all",
      todos: [
        {
          id: 1,
          title: "Finished vue screencast",
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "Take over world",
          completed: false,
          editing: false
        }
      ]
    };
  },
  components: {
    TodoItem
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false
      });
      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    checkAllTodos() {
      this.todos.forEach(todo => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
    todosFiltered() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.filter == "completed") {
        return this.todos.filter(todo => todo.completed);
      }
      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0;
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.card {
  transition: 0.3s;
}
</style>
