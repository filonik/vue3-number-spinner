<template>
  <input
    ref="dragElement"
    type="text"
    v-bind="$attrs"
    :style="style"
    :class="{
      drag: true,
      dragging,
      focus: dragFocussed,
      inactive: editing,
    }"
    v-model="visibleValue"
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
    v-bind="$attrs"
    :style="style"
    :class="{
      edit: true,
      editing,
      focus: editFocussed,
      inactive: !editing,
    }"
    v-model="visibleValue"
    @focus="editFocusHandler"
    @blur="editBlurHandler"
    @input="inputHandler"
  />
</template>

<script>
import { computed, nextTick as tick, onMounted, reactive, toRefs, watch } from 'vue'

import { useEventListener } from '../composables/useEventListener'

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
      type: Function,
      default: undefined,
    },
    parse: {
      type: Function,
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
  emits: ['consoleLog', 'change', 'input', 'focus', 'blur', 'dragstart', 'dragend', 'editstart', 'editend', 'update:modelValue'],
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

    onMounted(() => {
      state.htmlNode = document.querySelector('html')
      state.htmlNodeOriginalCursor = state.htmlNode.style.cursor
    })

    updateValues(props.modelValue)

    const { htmlNode, dragging } = toRefs(state)
    watch([htmlNode, dragging], () => {
      if (state.htmlNode) {
        if (state.dragging) {
          state.htmlNode.style.cursor = props.cursor ?? state.defaultCursor
          // addClass(htmlNode, cursorClass);
        } else {
          state.htmlNode.style.cursor = state.htmlNodeOriginalCursor
          // removeClass(htmlNode, cursorClass);
        }
      }
    })

    const { modelValue } = toRefs(props)
    watch(modelValue, (newValue, oldValue) => {
      //console.log('value', newValue, oldValue)
      if (!state.editing && !state.dragging) {
        updateValues(newValue)
      }
    })

    function keepInRange(val) {
      const { min, max } = props
      if (props.circular) {
        let range = max - min
        if (range === 0) return min
        let fac = val < min ? Math.ceil((min - val) / range) : 0
        val = ((val - min + range * fac) % range) + min
      } else {
        val = Math.min(Math.max(val, min), max)
      }
      return val
    }

    function roundToPrecision(val) {
      const { min, max, step, precision } = props
      let frac
      val = Math.round((parseFloat(val) - min) / precision) * precision + min
      // number of decimals comes either from the precision prop ...
      let dec = precision < 1 ? Math.ceil(-Math.log10(precision)) : 0
      // ... or from the number of decimals of the step value
      frac = step.toString().split('.')[1]
      if (frac) dec = Math.max(dec, frac.length)
      // ... or from the number of decimals of the min value
      frac = min.toString().split('.')[1]
      if (frac) dec = Math.max(dec, frac.length)
      return parseFloat(val.toFixed(dec))
    }

    function updateValues(val) {
      const { min, max, step, precision, format, decimals } = props
      state.preciseValue = parseFloat(val)
      state.preciseValue = keepInRange(state.preciseValue)
      state.visibleValue = Math.round((state.preciseValue - min) / step) * step + min
      if (format) {
        state.visibleValue = format(state.visibleValue)
      } else {
        state.visibleValue = state.visibleValue.toFixed(decimals)
      }
      let value = roundToPrecision(state.preciseValue)

      dispatch('input', parseFloat(value))
      dispatch('change', parseFloat(value))

      dispatch('update:modelValue', parseFloat(value))
    }

    async function updateFocussed() {
      await tick()
      if (document.activeElement == state.dragElement || document.activeElement == state.editElement) {
        if (!state.focussed) {
          state.focussed = true
          dispatch('focus')
          // console.log("Focus");
        }
      } else {
        if (state.focussed) {
          state.focussed = false
          dispatch('blur')
          // console.log("Blur");
        }
      }
    }

    async function startEditing() {
      state.editing = true
      //preciseValue = parseFloat(visibleValue);

      await tick()

      state.editElement.focus()
      state.editElement.select()

      dispatch('editstart')
    }

    function stopEditing() {
      if (state.editing) {
        state.editing = false

        if (props.parse) {
          state.preciseValue = props.parse(state.visibleValue)
          updateValues(state.preciseValue)
        } else {
          let checkValue = parseFloat(state.editElement.value)
          if (!isNaN(checkValue)) {
            state.preciseValue = parseFloat(state.visibleValue)
            updateValues(state.preciseValue)
          }
        }

        /*
        // Bring focus back to the drag element if editElement was focussed:
        if (document.activeElement === editElement) {
          setTimeout(() => {
            dragElement.focus()
          }, 0)
        }
        */

        dispatch('editend')
      }
    }

    function stepValue(numSteps) {
      const { step, speed } = props
      state.preciseValue = state.preciseValue ?? parseFloat(state.visibleValue)
      state.preciseValue += numSteps * step * speed
      updateValues(state.preciseValue)
    }

    function addToValue(increment) {
      state.preciseValue = state.preciseValue ?? parseFloat(state.visibleValue)
      state.preciseValue += increment
      updateValues(state.preciseValue)
    }

    function dragstartHandler(ev) {
      state.wasActiveOnClick = document.activeElement === state.dragElement

      state.dragging = true
      state.dragElement.focus()

      state.hasMoved = false
      state.clickX = state.isTouchDevice ? ev.touches[0].clientX : ev.clientX
      state.clickY = state.isTouchDevice ? ev.touches[0].clientY : ev.clientY

      state.dragging = true

      updateValues(props.modelValue)
    }

    function dragmoveHandler(ev) {
      const { horizontal, vertical } = props

      // dispatch('consoleLog', ev.type);
      // ev.preventDefault();
      let actX = state.isTouchDevice ? ev.touches[0].clientX : ev.clientX
      let actY = state.isTouchDevice ? ev.touches[0].clientY : ev.clientY
      let distX = horizontal ? +(actX - state.clickX) : 0
      let distY = vertical ? -(actY - state.clickY) : 0
      let stepNum = Math.abs(distX) > Math.abs(distY) ? distX : distY
      // fire dragstart before value changes
      if (stepNum != 0 && !state.hasMoved) {
        state.hasMoved = true
        dispatch('dragstart')
      }
      stepValue(stepNum * state.stepFactor)
      state.clickX = actX
      state.clickY = actY
      // hasMoved++;
    }

    function mouseupHandler(ev) {
      //dispatch('consoleLog', ev.type)

      if (state.dragging && state.hasMoved) {
        dispatch('dragend')
      }

      state.dragging = false

      // start editing only if element was already focussed on mousedown and no dragging was done
      if (state.wasActiveOnClick && !state.hasMoved) {
        startEditing()
      }
    }

    function dragFocusHandler(ev) {
      //dispatch('consoleLog', ev.type)

      state.dragFocussed = true
      updateFocussed()
    }
    function dragBlurHandler(ev) {
      //dispatch('consoleLog', ev.type)

      state.dragFocussed = false
      updateFocussed()
    }
    function editFocusHandler(ev) {
      //dispatch('consoleLog', ev.type)

      state.editFocussed = true
      updateFocussed()
    }
    function editBlurHandler(ev) {
      //dispatch('consoleLog', ev.type)

      state.editFocussed = false
      updateFocussed()
      stopEditing()
    }

    function keydownHandler(ev) {
      if (ev.target === state.dragElement || ev.target === state.editElement) {
        dispatch('consoleLog', ev.type)
        // console.log("keydownHandler", ev)
      }

      // prevent submitting if the number spinner is inside a form element
      if (ev.key == 'Enter') {
        ev.preventDefault()
      }

      if (ev.key == 'Shift') {
        state.shiftPressed = true
      }
      if (ev.key == 'Alt') {
        state.altPressed = true
      }
    }

    function keyupHandler(ev) {
      if (ev.target === state.dragElement || ev.target === state.editElement) {
        dispatch('consoleLog', ev.type)
        // console.log('keyupHandler', ev)
      }

      if (ev.key == 'Shift') {
        state.shiftPressed = false
      }
      if (ev.key == 'Alt') {
        state.altPressed = false
      }

      if (state.dragFocussed && !state.editing) {
        let increment = props.keyStep
        if (state.stepFactor < 1) increment = props.keyStepSlow
        if (state.stepFactor > 1) increment = props.keyStepFast
        if (ev.key == 'ArrowUp' || ev.key == 'ArrowRight') {
          addToValue(increment)
        }
        if (ev.key == 'ArrowDown' || ev.key == 'ArrowLeft') {
          addToValue(-increment)
        }
        if (ev.key == 'Enter') {
          startEditing()
        }
      } else if (state.editFocussed && state.editing) {
        if (ev.key == 'Enter' || ev.key == 'Escape') {
          stopEditing()
        }
      }
    }

    function inputHandler(ev) {
      // dispatch("consoleLog", ev.type)

      let checkValue = parseFloat(state.editElement.value)

      if (!isNaN(checkValue)) {
        state.preciseValue = checkValue
        state.preciseValue = keepInRange(state.preciseValue)

        let value = roundToPrecision(state.preciseValue)
        dispatch('input', parseFloat(value))
      }
    }

    let onWindowMouseMove = (ev) => {
      let handler = state.dragging ? dragmoveHandler : undefined
      if (handler === undefined) return
      return handler(ev)
    }
    let onWindowMouseUp = (ev) => {
      let handler = state.dragging ? mouseupHandler : editBlurHandler
      if (handler === undefined) return
      return handler(ev)
    }

    useEventListener(window, 'keydown', keydownHandler)
    useEventListener(window, 'keyup', keyupHandler)

    useEventListener(window, 'mousemove', onWindowMouseMove)
    useEventListener(window, 'touchmove', onWindowMouseMove)

    useEventListener(window, 'mouseup', onWindowMouseUp)
    useEventListener(window, 'touchend', onWindowMouseUp)

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
