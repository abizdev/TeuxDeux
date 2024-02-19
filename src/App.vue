<template>
  <!-- wrapper -->
  <div class="relative py-12">
    <div 
      class="wrapper-content w-[95%] m-auto overflow-hidden" 
    >
      <div class="table-content w-full flex items-center">
        <Table  
          v-for="(todosList, index) in todosLists"
          :key="index"
          :tableId="index"
          :todosList="todosList"
        />
      </div>
    </div>
    <div class="flex flex-col absolute gap-y-1 h-8 top-12 left-0 p-1 border-2 border-red-500 rounded-sm bg-slate-300">
      <button class="btn icon-chevron-left" @click="translateContent('left')"></button>
    </div>
    <div class="flex flex-col absolute gap-y-1 h-8 top-12 right-0 p-1 border-2 border-red-500 rounded-sm bg-slate-300">
      <button class="btn icon-chevron-right" @click="translateContent('right')"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from './components/Table.vue';

import 'swiper/css';
import 'swiper/css/navigation';

import { computed, ref } from 'vue';

import { useTodosStore } from './stores/todos'

const todosStore = useTodosStore()

const todosLists = computed(() => todosStore.todosLists)

let contentProp = ref<number>(0)
let contentStyles = ref<string>('')

const translateContent = (direction: string) => {
  contentStyles.value = direction === 'right'
    ? `translateX(${contentProp.value -= 20}%)`
    : `translateX(${contentProp.value += 20}%)`   
}

// on created check localstorage
if(localStorage.todosLists) {
  const localList = JSON.parse(localStorage.getItem('todosLists'))
  todosStore.todosLists = localList
}
</script>

<style>
.table-content {
  transition: 0.3s ease-in-out;
  transform: v-bind(contentStyles)
}
</style>