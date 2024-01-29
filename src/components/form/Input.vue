<template>
  <div class="w-full border-b-[1px] border-slate-300">
    <label :for="id" class="hidden">label text</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      ref="inputField"
      @keyup.enter="update($event)"
      class="w-full h-full outline-none rounded-md text-sm py-[8.5px] px-[10px] transition duration-300"
      :class="isChecked === true ? 'line-through text-slate-300' : ''"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface TodoProps {
  id: string,
  type: string,
  modelValue: string,
  labelText?: string,
  isChecked?: boolean,
  tableId: number
}

const props = defineProps<TodoProps>();
const emit = defineEmits();

const inputField = ref(null)

const update = ($event: { target: { value: string } }) => {
  if ($event.target.value) {
    // add focus to input
    console.log($event.target.id)
    if($event.target.id === `#addItem${props.tableId}`) {
      inputField.value.focus();
    }

    emit("update:modelValue", $event.target.value);
    
    $event.target.value = ''
  }
};
</script>
