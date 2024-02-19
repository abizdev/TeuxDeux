<template>
  <!-- wrapper -->
  <div class="p-12">
<!--    <pre>{{ todosLists }}</pre>-->
    <swiper
        :slides-per-view="5"
        :navigation="true"
        :modules="modules"
        :draggble="false"
        :scrollbar="{ draggable: false }"
    >
      <swiper-slide
          v-for="(todosList, index) in todosLists"
          :key="index"
      >
        <div class="flex flex-col" >
          <Heading />

          <div class="flex flex-col top-0 after:translate-y-[10px] after:mx-auto after:w-[85%] after:h-full after:bg-line-gradient min-h-[305px]">
            <!-- todos list -->
            <draggable
                :list="todosLists[index]"
                tag="ul"
                item-key="id"
                class="flex flex-col"
                group="todo"
                @end="updateLocalStorage"
            >

              <!-- todo item -->
              <template #item="{ element: todo }">
                <li class="item relative px-5 group/item">
                  <TodoItem
                      :id="todo.id"
                      :todoValue="todo.text.val"
                      :tableId="index"
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
                    :id="`addInput${index}`"
                    type="text"
                    v-model:modelValue="newTodo"
                    @update-val="addNewTodo()"
                    :tableId="index"
                />
              </div>
            </div>
            <!-- addTodo component end -->
          </div>
        </div>
      </swiper-slide>
    </swiper>
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

import { ref, computed, watch} from 'vue';

import { useTodosStore } from './stores/todos'
import type {Todo} from "@/types/todo";

const todosStore = useTodosStore()

const todosLists = computed(() => todosStore.todosLists)

const newTodo = ref<string>('')

const modules = [Navigation]

const addNewTodo = (inputVal: string, tableId: number) => {
  const todo: Todo = {
    id: `${Math.random()}`,
    text: inputVal,
    checked: false,
  }
  // console.log(todo)
  newTodo = '';
  tableId = null;
  todosStore.addTodo(todo, tableId)
  todosStore.setLocalStorate()
}

const updateLocalStorage = () => {
  todosStore.setLocalStorate()
}

watch(newTodo, (newVal) => {
  console.log(newVal);
  
  if(newVal) {
    addNewTodo(newVal.val, newVal.tableId)
  }
})

// on created check localstorage
if(localStorage.todosLists) {
  const localList = JSON.parse(localStorage.getItem('todosLists'))
  todosStore.todosLists = localList
}

</script>