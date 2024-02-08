<template>
  <!-- wrapper -->
  <div class="p-12 grid grid-cols-5">
<!--    <pre>{{ todosLists }}</pre>-->
    <Table  
      v-for="(todosList, index) in todosLists"
      :key="index"
      :tableId="index"
      :todosList="todosList"
    />
  </div>
</template>

<script setup lang="ts">
import Table from './components/Table.vue';

import {computed, watch} from 'vue';

import { useTodosStore } from './stores/todos'

const todosStore = useTodosStore()

const todosLists = computed(() => todosStore.todosLists)

// on created check localstorage
if(localStorage.todosLists) {
  const localList = JSON.parse(localStorage.getItem('todosLists'))
  todosStore.todosLists = localList
}

</script>