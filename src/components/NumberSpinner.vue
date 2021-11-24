<template>
  <input
    type="text"
    ref="editElement"
    :style="style"
    :class="{
      edit: true,
      editing,
      focus: editFocussed,
      inactive: !editing,
    }"
    :value="modelValue"
    @focus="editFocusHandler"
    @blur="editBlurHandler"
    @input="inputHandler"
  />
</template>

<script>
import { computed, nextTick as tick, onMounted, reactive, toRefs, watch } from 'vue'

export default {
  name: 'NumberSpinner',
  emits: ['consoleLog', 'focus', 'blur', 'dragstart', 'dragend', 'editstart', 'editend', 'update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit: dispatch }) {},
}
</script>
