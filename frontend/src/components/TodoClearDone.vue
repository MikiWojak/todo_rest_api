<template>
    <button v-if="showClearDoneButton" @click="clearDone()">
        Clear Done
    </button>
</template>

<script>
import { eventBus } from '../main'
export default {
    name: 'todo-clear-done',

    props: {
        showClearDoneButton: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        clearDone() {
            eventBus.$emit('clearDoneTodos');
        }
    }
}
</script>
