<template>
  <div class="flex items-center">
    <app-checkbox 
      v-model:modelValue="checkboxValue"
    />
    <app-input
      :id="id"
      type="text"
      v-model:modelValue="inputValue"
      :isChecked="checkboxValue"
      :tableId="tableId"
    />
    <app-button @click="delItem(id)"/>
  </div>
</template>

<script setup lang="ts">
import AppInput from "./form/Input.vue";
import AppCheckbox from './form/Checkbox.vue'
import AppButton from './Button.vue'

import { ref, watch } from "vue";

import { useTodosStore } from '../stores/todos'

interface Props {
  id: string;
  todoValue: string;
  tableId: number
}

const props = defineProps<Props>();

const { editTodo, delTodo, setLocalStorate } = useTodosStore()

const inputValue = ref<string>(props.todoValue);
const checkboxValue = ref<boolean>(false)

const delItem = (todoId: string) => {
  delTodo(props.tableId, todoId)
  // setLocalStorate()
};

const updatedVals = (isChecked: boolean) => {

  const updatedTodo = {
    id: props.id,
    text: inputValue.value,
    checked: isChecked
  }
  editTodo(props.tableId, updatedTodo)
  // setLocalStorate()
}

watch(checkboxValue, (newVal) => updatedVals(newVal))
watch(inputValue, () => updatedVals(checkboxValue.value))

</script>
