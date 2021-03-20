<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="done" @change="doneEdit">
      <div v-if="!editing" class="todo-item-label" :class="{ completed: done }" @dblclick="editTodo">
        {{ title }}
      </div>
      <input v-else class="todo-item-edit" type="text" v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus>
    </div>

    <div>
      <button @click="pluralize">Plural</button>

      <span class="remove-item" @click="removeTodo(todo.id)">
        &times;
      </span>
    </div>
  </div>
</template>

<script>
import { eventBus } from  '../main';

export default {
  name: 'todo-item',

  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      'id': this.todo.id,
      'title': this.todo.title,
      'done': this.todo.done,
      'editing': this.todo.editing,
      'beforeEditCache': ''
    }
  },

  created() {
    eventBus.$on('pluralize', this.handlePluralize);
  },

  beforeDestroy() {
    eventBus.$off('pluralize', this.handlePluralize);
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
    removeTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },

    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },

    doneEdit() {
      if(this.title.trim() == '') {
        this.title = this.beforeEditCache;
      }
      this.editing = false;
      this.$store.dispatch('updateTodo', {
        'id': this.id,
        'title': this.title,
        'done': this.done,
        'editing': this.editing
      });
    },

    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },

    pluralize() {
      eventBus.$emit('pluralize');
    },

    handlePluralize() {
      this.title += 's';
      const index = this.$store.state.todos.findIndex((item) => item.id == this.id);
      this.$store.state.todos.splice(index, 1, {
        'id': this.id,
        'title': this.title,
        'done': this.done,
        'editing': this.editing
      });
    }
  }
}
</script>
