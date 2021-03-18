<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="done">
      <div v-if="!editing" class="todo-item-label" :class="{ completed: done }" @dblclick="editTodo">
        {{ title }}
      </div>
      <input v-else class="todo-item-edit" type="text" v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus>
    </div>

    <div class="remove-item" @click="removeTodo(index)">
      &times;
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-item',

  props: {
    todo: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
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
  }
}
</script>
