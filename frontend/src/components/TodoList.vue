<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <todo-item v-for="todo in todosFiltered" :key="todo.id" :todo="todo" :checkAll="!anyRemaining">

    </todo-item>

    <div class="extra-container">
      <todo-check-all :anyRemaining="anyRemaining"></todo-check-all>

      <todo-items-remaining></todo-items-remaining>
    </div>

    <div class="extra-container">
      <todo-filtered></todo-filtered>

     <div>
       <todo-clear-done :showClearDoneButton="showClearDoneButton"></todo-clear-done>
     </div>
   </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import TodoCheckAll from './TodoCheckAll';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoFiltered from './TodoFiltered';
import TodoClearDone from './TodoClearDone';
import { eventBus } from  '../main';

export default {
  name: 'todo-list',

  components: {
    TodoItem,
    TodoCheckAll,
    TodoItemsRemaining,
    TodoFiltered,
    TodoClearDone
  },

  data() {
    return {
      newTodo: '',
      idForTodo: 3,
      beforeEditCache: '',
      filter: 'all',

      todos: [
        {
          'id': 1,
          'title': 'Finish Vue Screencast',
          'done': false,
          'editing': false
        },
        {
          'id': 2,
          'title': 'Take over world',
          'done': false,
          'editing': false
        }
      ]
    }
  },

  created() {
    // eventBus.$on('removedTodo', (index) => this.removeTodo(index));
    eventBus.$on('finishedEdit', (data) => this.finishedEdit(data));
    eventBus.$on('checkAllChanged', (checked) => this.checkAllTodos(checked));
    eventBus.$on('filterChanged', (filter) => this.$store.state.filter = filter);
    eventBus.$on('clearDoneTodos', () => this.clearDone());
  },

  beforeDestroy() {
    // eventBus.$off('removedTodo', (index) => this.removeTodo(index));
    eventBus.$off('finishedEdit', (data) => this.finishedEdit(data));
    eventBus.$off('checkAllChanged', (checked) => this.checkAllTodos(checked));
    eventBus.$off('filterChanged', (filter) => this.$store.state.filter = filter);
    eventBus.$off('clearDoneTodos', () => this.clearDone());
  },

  computed: {
    remaining() {
      return this.$store.getters.remaining;
    },

    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },

    todosFiltered() {
      return this.$store.getters.todosFiltered;
    },

    showClearDoneButton() {
      return this.$store.getters.showClearDoneButton;
    }
  },

  methods: {
    addTodo() {
      //Title is empty
      if(this.newTodo.trim() == '') {
        return;
      }

      this.$store.state.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        done: false,
        editing: false
      });

      this.newTodo = '';
      this.idForTodo++;
    },

    // removeTodo(id) {
    //   const index = this.$store.state.todos.findIndex((item) => item.id == id);
    //   this.$store.state.todos.splice(index, 1);
    // },

    checkAllTodos() {
      this.$store.state.todos.forEach((todo) => todo.done = event.target.checked);
    },

    clearDone() {
      this.$store.state.todos = this.$store.state.todos.filter(todo => !todo.done);
    },

    finishedEdit(data) {
      const index = this.$store.state.todos.findIndex((item) => item.id == data.id);
      this.$store.state.todos.splice(index, 1, data);
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

  .todo-input:focus {
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

  .todo-item-left {
    display: flex;
    align-items: center;
  }

  .todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }

  .todo-item-edit {
    font-size: 24px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .todo-item-edit:focus {
      outline: none;
  }

  .completed {
    text-decoration: line-through;
    color: grey;
  }

  .extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
  }

  button {
    font-size: 14px;
    background-color: white;
    appearance: none;
  }

  button:hover {
    background: lightgreen;
  }

  button:focus {
    outline: none;
  }

  .active {
    background: lightgreen;
  }
</style>
