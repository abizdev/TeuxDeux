<template>
  <div class="flex flex-col" >
    <Heading />

    <div class="flex flex-col top-0 after:translate-y-[10px] after:mx-auto after:w-[85%] after:h-full after:bg-line-gradient min-h-[305px]">
      <!-- todos list -->
      <draggable
        :list="todosList"
        tag="ul"
        item-key="id"
        class="flex flex-col"
        group="todo"
        @end="updateLocalStorage"
      >
      
        <!-- todo item -->
        <template #item="{ element: todo }">
          <li
            class="item relative px-5 group/item"
          >
            <TodoItem
              :id="todo.id"
              :todoValue="todo.text"
              :tableId="tableId"
              :isChecked="todo.checked"
            />
          </li>
        </template>
        <!-- todo item -->

      </draggable>
      <!-- todos list end -->

      <!-- addTodo component -->
      <div class="px-5">
        <div class="w-full border-b-[1px] border-slate-300">
          <app-input
            :id="`addInput${tableId}`"
            type="text"
            v-model:modelValue="newTodo"
            :tableId="tableId"
          />
        </div>
      </div>
      <!-- addTodo component end -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from './Heading.vue';
import TodoItem from './TodoItem.vue';
import AppInput from './form/Input.vue'
import draggable from 'vuedraggable';

import { ref, computed, watch } from 'vue';

import type { Todo } from '@/types/todo';

import { useTodosStore } from '@/stores/todos';

const props = defineProps<{ todosList: Todo[], tableId: number }>()

const todosStore = useTodosStore()

const newTodo = ref<string>('')

const addNewTodo = (inputVal: string, tableId: number) => {
  const todo: Todo = {
    id: `${Math.random()}`,
    text: inputVal,
    checked: false,
  }
  
  newTodo.value = '';
  todosStore.addTodo(todo, tableId)
  todosStore.setLocalStorate()
}

const updateLocalStorage = () => {
  todosStore.setLocalStorate()
}

watch(newTodo, (newVal) => {
  if(newVal) {
    addNewTodo(newVal, props.tableId)
  }
})

</script>