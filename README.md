# Vue3-pikaday

Vue3 wrapper component for [Pikaday](https://github.com/Pikaday/Pikaday) datepicker

### Install

with NPM
```bash
npm i @ohmygodvt95/vue3-pikaday 
```

with Yarn
```bash
yarn add @ohmygodvt95/vue3-pikaday 
```

### Usage & Options

```vue
<script setup lang="ts">
import VPikaday from "@ohmygodvt95/vue3-pikaday";
import { ref } from "vue";

const pickedDate = ref<String>();
</script>

<template>
   <main>
      <VPikaday
              v-model="pickedDate"
              format="YYYY年MM月DD日"
              :firstDay="0"
              :maxDate="new Date()"
      />
      <br />
      picked: {{ pickedDate }}
   </main>
</template>
```

NOTE: Pikaday's options can be added using the vue component's properties. List of properties refer here https://github.com/Pikaday/Pikaday#configuration

### Contribution
Feel free to create issue for bugs or pull request with fixes / enhancements.

### License

[MIT](./LICENSE)

Copyright (c) 2022 - present [Ohmygodvt95](https://github.com/ohmygodvt95)
