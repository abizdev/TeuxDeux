<template>
  <!-- wrapper -->
  <div class="p-12 grid grid-cols-5">
    <div class="flex flex-col">
      <Heading />
  
      <!-- todos list -->
      <ul class="flex flex-col">

        <!-- todo items -->
        <li 
          v-for="(todo, index) in todosList" 
          :key="todo.id"
          class="relative px-5 group/item"
        >
          <TodoItem 
            :id="todo.id"
            :todoValue="todo.text"
          />
        </li>
  
        <!-- addTodo component -->
        <li class="px-5">
          <div class=" border-b-[1px] border-slate-300">
            <input
              type="text"
              v-model="newTodo"
              @keyup.enter="addNewTodo()"
              class="w-full outline-none py-[8.5px] px-[10px] rounded-md"
            >
          </div>
        </li>
        
      </ul>
    </div>

  </div>
  
</template>

<script setup lang="ts">
import Heading from './components/Heading.vue';
import TodoItem from './components/TodoItem.vue';
import Checkbox from './components/form/Checkbox.vue';

import { ref } from 'vue';

import type { Todo } from './types/todo'

import { useTodosStore } from './stores/todos'

const { todosList, addTodo } = useTodosStore()

const newTodo = ref<string>('')

const addNewTodo = () => {

  const todo: Todo = {
    id: `${Math.random()}`,
    text: newTodo.value,
    checked: false,
  }
  
  addTodo(todo)
  newTodo.value = ''

}

</script>