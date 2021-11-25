# vue3-number-spinner

This is a direct port of [svelte-number-spinner](https://github.com/bohnacker/svelte-number-spinner) from Svelte to Vue 3.

## Demo

[Number spinner demo](https://the-source.de/vue3-number-spinner/)

## Installation

```bash
npm install vue3-number-spinner
```

## Usage

```vue
<template>
  <number-spinner v-model="value" :min="0" :max="100" />
</template>

<script>
import { ref } from 'vue'

import { NumberSpinner } from 'vue3-number-spinner'

export default {
  name: 'App',
  components: {
    NumberSpinner,
  },
  setup() {
    const value = ref(50)

    return { value }
  },
}
</script>
```
