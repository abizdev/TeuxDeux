import { defineStore } from "pinia";
import type { Todo } from '../types/todo'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todosLists: [
      [
        {
          "id": "0.48969378384430584",
          "text": "a1",
          "checked": false
        },
        {
          "id": "0.042568000216382185",
          "text": "a2",
          "checked": false
        }
      ],
      [
        {
          "id": "0.48969378384430584",
          "text": "a1",
          "checked": false
        },
        {
          "id": "0.042568000216382185",
          "text": "a2",
          "checked": false
        }
      ],
      [],
    ]
  }),
  actions: {
    addTodo(todo: Todo, tableId: number) {
      this.todosLists[tableId].push(todo)
    },
    editTodo(tableId: number, todo: Todo) {
      // find existion item index      
      const existingItem = this.todosLists[tableId].findIndex((item) => item.id === todo.id)
      
      // delete item
      this.todosLists[tableId].splice(existingItem, 1, todo)
    },
    delTodo(tableId: number, id: string) {
      // find existion item index
      const existingItem = this.todosLists[tableId].findIndex((item) => item.id === id)
      
      // delete item
      this.todosList[tableId].splice(existingItem, 1)
    },
    setLocalStorate(payload?: any) {
      // localStorage.todosList = payload ? JSON.stringify(payload) : JSON.stringify(this.todosList)
    }
  }
})