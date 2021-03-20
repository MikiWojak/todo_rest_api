import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:8000/api';

export const store = new Vuex.Store({
    state: {
        todos: []
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
        },

        retrieveTodos(state, todos) {
            state.todos = todos;
        }
    },

    actions: {
        retrieveTodos(context) {
            axios.get('/todos')
                .then(response => {
                    context.commit('retrieveTodos', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },

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