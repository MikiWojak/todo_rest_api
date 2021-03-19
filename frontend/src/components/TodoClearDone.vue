<template>
    <button v-if="showClearDoneButton" @click="clearDone()">
        Clear Done
    </button>
</template>

<script>
// import { eventBus } from '../main'
export default {
    name: 'todo-clear-done',

    computed: {
        showClearDoneButton() {
            return this.$store.getters.showClearDoneButton;
        }
    },

    methods: {
        clearDone() {
            this.$store.commit('clearDone');
        }
    }
}
</script>
