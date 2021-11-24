<template>
  <div>Hello!</div>
  <number-spinner v-model="value" />
</template>

<script>
import { ref } from 'vue'

import { NumberSpinner } from '../../src/main'

export default {
  name: 'App',
  components: {
    NumberSpinner,
  },
  setup() {
    const value = ref(0)
    return { value }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
