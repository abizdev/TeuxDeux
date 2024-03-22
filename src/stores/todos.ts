import { defineStore } from "pinia";
import type { Todo } from '../types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todosLists: [
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
      {
        todos: [],
      },
    ]
  }),
  actions: {
    addTodo(todo: Todo, tableId: number) {
      this.todosLists[tableId].todos.push(todo)
    },
    editTodo(tableId: number, todo: Todo) {

      // find existion item index      
      const existingItem = this.todosLists[tableId].findIndex((item) => item.id === todo.id)
      
      // delete item
      this.todosLists[tableId].splice(existingItem, 1, todo)
    },
    delTodo(tableId: number, id: string) {
      console.log(tableId, id)
      // find existion item index
      const existingItem = this.todosLists[tableId].findIndex((item) => item.id === id)
      
      // delete item
      this.todosLists[tableId].splice(existingItem, 1)
    },
    setLocalStorate(payload?: any) {
      localStorage.todosLists = payload ? JSON.stringify(payload) : JSON.stringify(this.todosLists)
    }
  }
})