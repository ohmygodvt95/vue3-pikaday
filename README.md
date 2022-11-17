# vue3-pikaday

Vue3 wrapper component for Pikaday datepicker

### Install


### Usage

```vue
<script setup lang="ts">
import VPikaday from "@/VPikaday/components/VPikaday.vue";
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

### Contribution
Feel free to create issue for bugs or pull request with fixes / enhancements.

### License
[MIT](./LICENSE)
Copyright (c) 2022 - present [Ohmygodvt95](https://github.com/ohmygodvt95)
