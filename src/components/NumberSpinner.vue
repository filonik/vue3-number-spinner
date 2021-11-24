<template>
  <input
    ref="dragElement"
    type="text"
    :style="style"
    :class="{
      drag: true,
      dragging,
      focus: dragFocussed,
      inactive: editing,
    }"
    :value="modelValue"
    readonly
    contenteditable="false"
    @mousedown.stop="dragstartHandler"
    @touchstart.stop.prevent="touchstartHandler"
    @focus="dragFocusHandler"
    @blur="dragBlurHandler"
  />
  <input
    ref="editElement"
    type="text"
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
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: -1e12,
    },
    max: {
      type: Number,
      default: +1e12,
    },
    step: {
      type: Number,
      default: 1,
    },
    precision: {
      type: Number,
      default: 1,
    },
    speed: {
      type: Number,
      default: 1,
    },
    keyStepSlow: {
      type: Number,
      default: 1,
    },
    keyStep: {
      type: Number,
      default: 10,
    },
    keyStepFast: {
      type: Number,
      default: 100,
    },
    decimals: {
      type: Number,
      default: 0,
    },
    format: {
      type: Object,
      default: undefined,
    },
    parse: {
      type: Object,
      default: undefined,
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    circular: {
      type: Boolean,
      default: false,
    },
    mainStyle: {
      type: String,
    },
    fastStyle: {
      type: String,
    },
    slowStyle: {
      type: String,
    },
    focusStyle: {
      type: String,
    },
    draggingStyle: {
      type: String,
    },
    editingStyle: {
      type: String,
    },
    cursor: {
      type: String,
    },
    options: {
      type: Object,
    },
  },
  emits: ['consoleLog', 'focus', 'blur', 'dragstart', 'dragend', 'editstart', 'editend', 'update:modelValue'],
  setup(props, { emit: dispatch }) {
    const state = reactive({
      preciseValue: undefined,
      visibleValue: undefined,
      isTouchDevice: false,
      editElement: null,
      dragElement: null,
      dragFocussed: false,
      editFocussed: false,
      focussed: false,
      dragging: false,
      wasActiveOnClick: undefined,
      hasMoved: undefined,
      clickX: undefined,
      clickY: undefined,
      stepFactor: 1,
      altPressed: false,
      ctrlPressed: false,
      shiftPressed: false,
      editing: false,
      htmlNode: null,
      htmlNodeOriginalCursor: null,
      defaultCursor: computed(() => (props.horizontal ? (props.vertical ? 'move' : 'ew-resize') : 'ns-resize')),
      style: computed(() => {
        let style = props.mainStyle ?? ''
        style += state.editing && props.editingStyle ? ';' + props.editingStyle : ''
        style += !state.editing ? ';cursor:' + (props.cursor ?? state.defaultCursor) : ''
        return style
      }),
    })

    const dragFocusHandler = () => {}
    const dragBlurHandler = () => {}
    const dragstartHandler = () => {}
    const editFocusHandler = () => {}
    const editBlurHandler = () => {}
    const keydownHandler = () => {}
    const keyupHandler = () => {}
    const inputHandler = () => {}

    return {
      ...toRefs(state),
      dragFocusHandler,
      dragBlurHandler,
      dragstartHandler,
      editFocusHandler,
      editBlurHandler,
      keydownHandler,
      keyupHandler,
      inputHandler,
    }
  },
}
</script>

<style scoped>
.drag {
  user-select: none;
}

.drag::selection {
  /* remove text selection background in non-editing mode */
  background: transparent;
}

.inactive {
  display: none !important;
}
</style>
