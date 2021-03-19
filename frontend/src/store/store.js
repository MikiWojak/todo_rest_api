import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
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
    },

    getters: {
        remaining(state) {
            return state.todos.filter(todo => !todo.done).length;
        },
    
        anyRemaining(state, getters) {
            return getters.remaining != 0;
        },
    
        todosFiltered(state) {
            if(state.filter == 'all') {
                return state.todos;
            } else if(state.filter == 'active') {
                return state.todos.filter(todo => !todo.done);
            } else if(state.filter == 'done') {
                return state.todos.filter(todo => todo.done);
            }
        
            return state.todos;
        },
    
        showClearDoneButton(state) {
            return state.todos.filter(todo => todo.done).length > 0;
        }
    }
});