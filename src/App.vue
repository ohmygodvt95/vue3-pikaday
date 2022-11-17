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
