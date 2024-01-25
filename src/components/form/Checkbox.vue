<template>
  <div class="absolute top-50% left-[10px] -translate-x-[50%] w-[18px] h-[18px] group-hover/item:opacity-100 opacity-0 transition duration-300">
    <input 
      type="checkbox" 
      class="todo__checkbox"
      v-model="isChecked"
    >
  </div>
</template>

<script setup lang="ts">

const isChecked = defineModel('modelValue')

</script>