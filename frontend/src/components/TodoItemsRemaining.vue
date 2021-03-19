<template>
    <div>
        {{ remaining }} items left
    </div>
</template>

<script>
export default {
    name: 'todo-remaining',

    computed: {
        remaining() {
            this.$store.getters.remaining;
        }
    }
}
</script>
