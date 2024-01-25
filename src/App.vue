<template>
  <!-- wrapper -->
  <div class="p-12 grid grid-cols-5">
    <div class="flex flex-col">
      <Heading />
  
      <div class="flex flex-col top-0 after:translate-y-[10px] after:mx-auto after:w-[85%] after:h-full after:bg-line-gradient min-h-[305px]">
        <!-- todos list -->
        <draggable
          v-model="todosList"
          tag="ul"
          item-key="id"
          class="flex flex-col"
        >
        
          <!-- todo item -->
          <template #item="{ element: todo }">
            <li
              class="item relative px-5 group/item"
            >
              <TodoItem 
                :id="todo.id"
                :todoValue="todo.text"
              />
            </li>
          </template>
          <!-- todo item -->
  
        </draggable>
        <!-- todos list end -->
  
        <!-- addTodo component -->
        <div class="px-5">
          <div class="w-full border-b-[1px] border-slate-300">
            <input
              type="text"
              v-model="newTodo"
              @keyup.enter="addNewTodo()"
              class="w-full h-full outline-none rounded-md text-sm py-[8.5px] px-[10px]"
            >
          </div>
        </div>
        <!-- addTodo component end -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from './components/Heading.vue';
import TodoItem from './components/TodoItem.vue';
import draggable from 'vuedraggable';

import { ref, computed } from 'vue';

import type { Todo } from './types/todo'

import { useTodosStore } from './stores/todos'

const todosStore = useTodosStore()

const newTodo = ref<string>('')
const todosList = computed({
  get() {
    return todosStore.todosList
  },
  set(newVal) {
    todosStore.todosList = newVal
  }
})

const addNewTodo = () => {

  const todo: Todo = {
    id: `${Math.random()}`,
    text: newTodo.value,
    checked: false,
  }
  
  todosStore.addTodo(todo)
  newTodo.value = ''
}

</script>