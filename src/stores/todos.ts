import { defineStore } from "pinia";
import type { Todo } from './types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todosList: []
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todosList.push(todo)
    }
  }
})