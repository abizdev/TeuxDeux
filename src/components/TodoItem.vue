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
}

const props = defineProps<Props>();

const { editTodo, delTodo } = useTodosStore()

const inputValue = ref<string>(props.todoValue);
const checkboxValue = ref<boolean>(false)

const delItem = (todoId: string) => delTodo(todoId);

const updatedVals = (isChecked?: boolean) => {

  const updatedTodo = {
    id: props.id,
    text: inputValue.value,
    checked: isChecked
  }
  editTodo(updatedTodo)
}

watch(checkboxValue, (newVal) => {
  updatedVals(newVal)
})
watch(inputValue, () => updatedVals(checkboxValue))

</script>
