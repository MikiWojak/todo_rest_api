<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <div v-for="(todo, index) in todos"  :key="todo.id" class="todo-item">
      <div>
        {{ todo.title }}
      </div>

      <div class="remove-item" @click="removeTodo(index)">
        &times;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-list',

  data() {
    return {
      newTodo: '',
      idForTodo: 3,

      todos: [
        {
          'id': 1,
          'title': 'Finish Vue Screencast',
          'done': false,
        },
        {
          'id': 2,
          'title': 'Take over world',
          'done': false,
        }
      ]
    }
  },

  methods: {
    addTodo() {
      //Title is empty
      if(this.newTodo.trim().length == 0) {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        done: false
      });

      this.newTodo = '';
      this.idForTodo++;
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>

<style>
  .todo-input {
    width: 98%;
    padding: 1% 1%;
    font-size: 18px;
    margin-bottom: 16px;
  }

  &:focus {
    outline: 0;
  }

  .todo-item {
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    justify-content: space-between;
  }

  .remove-item {
    cursor: pointer;
    margin-left: 14px;

  }

  .remove-item:hover {
    color: black;
  }
</style>
