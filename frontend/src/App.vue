<template>
  <div id="app" class="container">
    <h1>TODO-list</h1>
    <todo-list>
    </todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
body {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 70px;
}

h1 {
  text-align: center;
}
</style>
