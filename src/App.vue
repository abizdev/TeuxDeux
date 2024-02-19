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
import Heading from "@/components/Heading.vue";
import TodoItem from "@/components/TodoItem.vue";
import AppInput from "@/components/form/Input.vue";

import {Swiper, SwiperSlide} from 'swiper/vue'
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import {computed, watch} from 'vue';

import { useTodosStore } from './stores/todos'
import type {Todo} from "@/types/todo";

const todosStore = useTodosStore()

const todosLists = computed(() => todosStore.todosLists)

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