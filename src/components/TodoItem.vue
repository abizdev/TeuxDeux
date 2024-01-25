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
  </div>
</template>

<script setup lang="ts">
import AppInput from "./form/Input.vue";
import AppCheckbox from './form/Checkbox.vue'

import { ref } from "vue";

interface Props {
  id: string;
  todoValue: string;
}

const props = defineProps<Props>();

const inputValue = ref<string>(props.todoValue);
const checkboxValue = ref<boolean>(false)

</script>
