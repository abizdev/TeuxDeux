<template>
  <div class="w-full border-b-[1px] border-slate-300">
    <label :for="id" class="hidden">label text</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="update($event)"
      class="w-full h-full outline-none rounded-md text-sm py-[8.5px] px-[10px]"
      :class="isChecked === true ? 'line-through text-slate-300' : ''"
    />
  </div>
</template>

<script setup lang="ts">
interface TodoProps {
  id: string,
  type: string,
  modelValue: string,
  labelText?: string,
  isChecked: boolean
}

const props = defineProps<TodoProps>();
const emit = defineEmits();

const update = ($event: { target: { value: string } }) => {
  emit("update:modelValue", $event.target.value);
};
</script>
