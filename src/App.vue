<script setup>
import VPikaday from "../dist/VPikaday.esm.js";
import { ref } from "vue";

const pickedDate = ref();
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
