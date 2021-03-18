<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <div v-for="(todo, index) in todosFiltered"  :key="todo.id" class="todo-item">
      <div class="todo-item-left">
        <input type="checkbox" v-model="todo.done">
        <div v-if="!todo.editing" class="todo-item-label" :class="{ completed: todo.done }" @dblclick="editTodo(todo)">
          {{ todo.title }}
        </div>
        <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
      </div>

      <div class="remove-item" @click="removeTodo(index)">
        &times;
      </div>
    </div>

    <div class="extra-container">
      <div>
        <label>
          <input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos">
          Check All
        </label>
      </div>

      <div>
        {{ remaining }} items left
      </div>
    </div>

    <div class="extra-container">
     <div>
       <button :class="{ active: filter == 'all' }" @click="filter = 'all'">All</button>
       <button :class="{ active: filter == 'active' }" @click="filter = 'active'">Active</button>
       <button :class="{ active: filter == 'done' }" @click="filter = 'done'">Completed</button>
     </div>

     <div>
       <button v-if="showClearDoneButton" @click="clearDone()">
         Clear Done
       </button>
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

  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    },

    anyRemaining() {
      return this.remaining != 0;
    },

    todosFiltered() {
      if(this.filter == 'all') {
        return this.todos;
      } else if(this.filter == 'active') {
        return this.todos.filter(todo => !todo.done);
      } else if(this.filter == 'done') {
        return this.todos.filter(todo => todo.done);
      }

      return this.todos;
    },

    showClearDoneButton() {
      return this.todos.filter(todo => todo.done).length > 0;
    }
  },

  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  },

  methods: {
    addTodo() {
      //Title is empty
      if(this.newTodo.trim() == '') {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        done: false,
        editing: false
      });

      this.newTodo = '';
      this.idForTodo++;
    },

    editTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },

    doneEdit(todo) {
      if(todo.title.trim() == '') {
        todo.title = this.beforeEditCache;
      }

      todo.editing = false;
    },

    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.editing = false;
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    checkAllTodos() {
      this.todos.forEach((todo) => todo.done = event.target.checked);
    },

    clearDone() {
      this.todos = this.todos.filter(todo => !todo.done);
    }
  },
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

  &:hover {
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

  &:focus {
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
