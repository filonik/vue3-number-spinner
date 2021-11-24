<template>
  <main>
    <h2>Vue 3 Number Spinner Example</h2>

    <p>
      Change the values of the number spinners through mousedrag and arrow keys. Press <i>Alt</i> for smaller steps, <i>Alt+Shift</i> for
      larger steps. Click without dragging to edit.
    </p>

    <hr />

    <div class="row">
      <div class="explanation">Default: no range limits, step = 1<br />Current value is {{ value1 }}</div>
      <div class="right">
        <number-spinner v-model="value1" />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="explanation">
        Range: 0 - 360, vertical = true (dragging and arrow keys up/down will also change the value), circular = true <br />
        Current value is {{ value2 }}
      </div>
      <div class="right">
        <number-spinner v-model="value2" :min="0" :max="360" :vertical="true" :circular="true" />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="explanation">
        step = 0.01, decimals = 2, precision = 0.001<br />
        Current value is {{ value3 }}
      </div>
      <div class="right">
        <number-spinner v-model="value3" :min="-5" :max="5" :step="0.01" :decimals="2" :precision="0.001" />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="explanation">
        Individual styling using props.<br />
        Current value is {{ value4 }}
      </div>
      <div class="right">
        <number-spinner
          v-model="value4"
          :step="10"
          mainStyle="color:#aaa; width:80px; border-radius:20px"
          focusStyle="color:#06f"
          draggingStyle="border-color:#f00"
          editingStyle="color:#00f; background-color:#06f4"
          fastStyle="color:#f00"
          slowStyle="color:#0c0"
          cursor="pointer"
        />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="explanation">
        Individual styling using custom class.<br />
        Current value is {{ value5 }}
      </div>
      <div class="right">
        <number-spinner v-model="value5" :min="0" :max="1" :step="0.001" :decimals="3" class="number-spinner-custom" />
      </div>
    </div>

    <hr />
    <!--
    <div class="row">
      <div class="explanation">
        Get value through input and change events.<br />
        Current input value is {{ value6input }}<br />
        Current change value is {{ value6change }}<br />
        Edit mode is {{ value6editmode }}. Last key pressed: {{ value6lastkey }}
      </div>
      <div class="right">
        <number-spinner
          v-model="value6"
          :min="-100"
          :max="100"
          @change="
            (ev) => {
              value6change = ev.detail
            }
          "
          @input="
            (ev) => {
              value6input = ev.detail
            }
          "
          @keyup="
            (ev) => {
              value6lastkey = ev.key
              console.log(ev)
            }
          "
          @editstart="
            (ev) => {
              value6editmode = true
              console.log(ev)
            }
          "
          @editend="
            (ev) => {
              value6editmode = false
              console.log(ev)
            }
          "
        />
      </div>
    </div>

    <hr />
-->

    <div class="row">
      <div class="explanation">
        Test correct updating of the value if changed from outside.<br />
        Current value is {{ value7 }}<br />
      </div>
      <div>
        <button
          @click="
            () => {
              value7--
            }
          "
        >
          –
        </button>
      </div>
      <div class="right small-margin">
        <number-spinner v-model="value7" :min="0" :max="12" :circular="true" />
      </div>
      <div>
        <button
          @click="
            () => {
              value7++
            }
          "
        >
          +
        </button>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="explanation">
        Giving some of the props by options object.<br />
        {`{ min: -5.5, max: 5.5, step: 1, keyStep: 1, keyStepFast: 2, decimals: 1, speed: 0.04 }`}<br />
        Current value is {{ value8 }}
      </div>
      <div class="right">
        <number-spinner v-model="value8" :options="options" />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="explanation">
        Using callbacks to format and parse the displayed value as a currency.<br />Current value is {{ value9 }}
      </div>
      <div class="right">
        <number-spinner v-model="value9" :format="addDollar" :parse="removeDollar" />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="explanation">
        Using callbacks to format and parse the displayed value as time of day.<br />Current value is {{ value10 }}
      </div>
      <div class="right">
        <number-spinner
          v-model="value10"
          :min="0"
          :max="1440"
          :keyStep="15"
          :keyStepSlow="1"
          :keyStepFast="60"
          :circular="true"
          :format="formatMinutesToTime"
          :parse="parseTimeToMinutes"
        />
      </div>
    </div>

    <hr />
  </main>
</template>

<script>
import { reactive, toRefs } from 'vue'

import { NumberSpinner } from '../../src/main'

export default {
  name: 'App',
  components: {
    NumberSpinner,
  },
  setup() {
    const state = reactive({
      value1: 100,
      value2: 500,
      value3: 3.28,
      value4: 0.5,
      value5: 0.5,
      value6: 50,
      value6input: 50,
      value6change: 50,
      value6editmode: false,
      value6lastkey: '',
      value7: 0,
      value8: -2.5,
      options: { min: -5.5, max: 5.5, step: 1, keyStep: 1, keyStepFast: 2, decimals: 1, speed: 0.04 },
      value9: 100,
      value10: 12 * 60,
    })

    // Callback functions for example 9 ---------------------
    function addDollar(val) {
      return '$ ' + val
    }
    function removeDollar(str) {
      return str.replace('$', '').trim()
    }

    // Callback functions for example 10 ---------------------
    // Takes the actual value and returns a formatted time string
    function formatMinutesToTime(minutes) {
      let hours = Math.floor(minutes / 60)
      minutes = minutes % 60
      return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
    }
    // Parses a time string like "16:45" to a number in minutes (result will be 16*60 + 45 = 1005)
    function parseTimeToMinutes(timeString) {
      let res = timeString.split(':')
      let hours = parseInt(res[0])
      hours = Math.min(Math.max(hours, 0), 23)
      let minutes = res[1] ? parseInt(res[1]) : 0
      minutes = Math.min(Math.max(minutes, 0), 59)
      return hours * 60 + minutes
    }

    return { ...toRefs(state), addDollar, removeDollar, formatMinutesToTime, parseTimeToMinutes }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  max-width: 600px;
}

hr {
  margin: 20px 0px;
}

div {
  display: flex;
}
div.row {
  justify-content: space-between;
  align-items: center;
}
div.explanation {
  flex-grow: 6;
}
div.right {
  margin: 0px 40px;
}
div.small-margin {
  margin: 0px 10px;
}

button {
  margin: 5px;
  height: 1.6em;
  padding: 0 0.4em;
}
</style>
