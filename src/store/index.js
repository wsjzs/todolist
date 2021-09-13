import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [{ id: 12132, content: 'hello', time: 121213, done: false }]
    },
    getters: {
        getNotDone: state => {
            return state.todos.filter(todo => !todo.done)
        },
        getDone: state => {
            return state.todos.filter(todo => todo.done)
        },

    },
    mutations: {
        //添加todo
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        //删除todo
        deleteTodo(state, id) {
            for (let i in state.todos) {
                if (state.todos[i].id === id) {
                    state.todos.splice(i, 1);
                }
            }
        },
        // 修改todo内容
        changeContent(state, id, content) {
            for (let i in state.todos) {
                if (state.todos[i].id === id) {
                    state.todos[i].content = content;
                    break;
                }
            }
        },
        done(state, id) {
            for (let i in state.todos) {
                if (state.todos[i].id === id) {
                    state.todos[i].done = true;
                    break;
                }
            }
        },
        //清空todos
        clearTodos(state) {
            state.todos = [];
        }
    },
    actions: {},
    modules: {}
})