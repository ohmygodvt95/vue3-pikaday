import { ref, useAttrs, onMounted, openBlock, createElementBlock } from 'vue';
import moment from 'moment';
import 'pikaday/css/pikaday.css';
import Pikaday from 'pikaday';

const _hoisted_1 = ["value"];


var script = {
  __name: 'VPikaday',
  props: {
  modelValue: {
    type: String,
    default: "",
  },
},
  emits: ["update:modelValue"],
  setup(__props, { emit }) {





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

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("input", {
    type: "text",
    ref_key: "element",
    ref: element,
    value: __props.modelValue,
    onChange: updateModelValue
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1))
}
}

};

script.__file = "src/VPikaday/components/VPikaday.vue";

export { script as default };
