<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
        <div class="modal">
          <header class="modal-header">
            <slot name="header">Default Header</slot>
            <button @click="close"><fa icon="xmark" style="color: var(--primary_accent); font-size: 15.5pt;margin-top: 12px;" /></button>
          </header>
          <section class="modal-body">
            <slot>Default Content</slot>
          </section>
          <footer class="modal-footer">

            <slot name="footer">Default Footer</slot>
          </footer>
        </div>
      </div>
    
</template>

<script setup lang="ts">

import { ref, watchEffect } from 'vue';
const props = defineProps({
  modelValue: Boolean,
});

const isVisible = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

watchEffect(() => {
  isVisible.value = props.modelValue;
});


const close = () => {
  isVisible.value = false;
  emit('update:modelValue', false);
};
</script>
    
<style scoped>
.modal-overlay {
    position: fixed;
    top: -20%;
    left: 0;
    width: 100%;
    height: 120%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: var(--secondary_green);
    border-radius: 10px;
    padding: 20px;
    min-width: 370px;
    font-family: 'Noto Sans', sans-serif;
    color: black;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid whitesmoke;
  border-left: 0px;
  border-right: 0px;

  border-top: 0px;
  }
  
  .modal-body {
    margin-top: 20px;
  }
  .modal-footer{
    display: flex;
    width: 100%;
  justify-content: space-between;
  border: 1px solid whitesmoke;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  margin-top: 2rem;
}
</style>