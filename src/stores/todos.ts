import { defineStore } from "pinia";
import type { Todo } from './types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todosList: []
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todosList.push(todo)
    },
    editTodo(todo: Todo) {
      // find existion item index      
      const existingItem = this.todosList.findIndex((item) => item.id === todo.id)

      // delete item
      this.todosList.splice(existingItem, 1, todo)
    },
    delTodo(id: string) {
      // find existion item index
      const existingItem = this.todosList.findIndex((item) => item.id === id)

      // delete item
      this.todosList.splice(existingItem, 1)
    },
    setLocalStorate(payload?: any) {
      localStorage.todosList = payload ? JSON.stringify(payload) : JSON.stringify(this.todosList)
    }
  }
})