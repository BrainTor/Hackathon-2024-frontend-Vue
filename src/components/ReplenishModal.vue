<template>
    <div v-if="isVisible" class="modal text-white">
        <div class="modal-content">
            <div class = "modal-header">
                <slot name = "header">Def header</slot>
    
                <span class="close" @click="globalState.toggleModal">&times;</span>
            </div>
            <div class = "modal-body">
                <slot name="body">Def Body</slot>
            </div>
         
            <div class = "modal-footer">
                <slot name = "footer">Def footer </slot>
          </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps,   inject } from 'vue';
  import type { GlobalState } from '@/stores/types';

const globalState = inject<GlobalState>('globalState')!;
  const props = defineProps({
    isVisible: Boolean
  });

  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(56, 51, 51, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 323232323232;
    flex-direction: column;
  }
  .modal-body{
    padding: 10px;
  }
  .modal-content {
    background-color: var(--secondary_green);
    padding: 20px;
    border-radius: 5px;
    width: 500px;
    min-width: 300px;
  }
  .modal-header{
    border: 1.5px solid rgb(255, 253, 253);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
  }
  .modal-footer{
    border: 1.5px solid rgb(255, 255, 255);
    padding: 10px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
  }
  .close {
    float: right;
    font-size: 28px;
    cursor: pointer;
  }
</style>