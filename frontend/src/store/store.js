import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
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
    },

    getters: {
    },

    mutations: {
        addTodo(state, todo) {
            state.todos.push({
                id: todo.id,
                title: todo.title,
                done: false,
                editing: false
            });
        },

        updateTodo(state, todo) {
            const index = state.todos.findIndex((item) => item.id == todo.id);
            state.todos.splice(index, 1, {
                'id': todo.id,
                'title': todo.title,
                'done': todo.done,
                'editing': todo.editing
            });
        },

        deleteTodo(state, id) {
            const index = state.todos.findIndex((item) => item.id == id);
            state.todos.splice(index, 1);
        }
    },

    actions: {
        addTodo(context, todo) {
            context.commit('addTodo', todo);
        },

        updateTodo(context, todo) {
            context.commit('updateTodo', todo);
        },

        deleteTodo(context, id) {
            context.commit('deleteTodo', id);
        }
    }
});