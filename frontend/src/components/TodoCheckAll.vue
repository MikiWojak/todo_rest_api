<template>
    <div>
        <label>
            <input type="checkbox" :checked="!anyRemaining" @change="allChecked">
            Check All
        </label>
    </div>
</template>

<script>
// import { eventBus } from  '../main';

export default {
    name: 'todo-check-all',

    computed: {
        anyRemaining() {
            return this.$store.getters.anyRemaining;
        }
    },

    methods: {
        allChecked() {
            this.$store.state.todos.forEach((todo) => todo.done = event.target.checked);
        }
    }
}
</script>
