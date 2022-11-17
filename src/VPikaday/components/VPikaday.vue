<template>
  <input
    type="text"
    ref="element"
    v-bind:value="modelValue"
    @change="updateModelValue"
  />
</template>

<script setup>
import moment from "moment";
import "pikaday/css/pikaday.css";
import { onMounted, ref, useAttrs } from "vue";
import Pikaday from "pikaday";

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const element = ref();

const attrs = useAttrs();

const updateModelValue = (picker) => {
  emit(
    "update:modelValue",
    moment(picker.firedBy._d).format(picker.firedBy._o.format)
  );
};

const picker = ref();

onMounted(() => {
  picker.value = new Pikaday({
    field: element.value,
    ...attrs,
  });
});
</script>
