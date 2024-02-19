<template>

</template>

<script setup lang="ts">
import Heading from './Heading.vue';
import TodoItem from './TodoItem.vue';
import AppInput from './form/Input.vue'
import draggable from 'vuedraggable';

import { SwiperSlide } from "swiper/vue";

import { ref, computed, watch } from 'vue';

import type { Todo } from '@/types/todo';

import { useTodosStore } from '@/stores/todos';

const props = defineProps<{ todosList: Todo[], tableId: number }>()

const todosStore = useTodosStore()

const newTodo = ref<string>('')



</script>