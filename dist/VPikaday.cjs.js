'use strict';

var vue = require('vue');
var moment = require('moment');
require('pikaday/css/pikaday.css');
var Pikaday = require('pikaday');

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





const element = vue.ref();

const attrs = vue.useAttrs();

const updateModelValue = (picker) => {
  emit(
    "update:modelValue",
    moment(picker.firedBy._d).format(picker.firedBy._o.format)
  );
};

const picker = vue.ref();

vue.onMounted(() => {
  picker.value = new Pikaday({
    field: element.value,
    ...attrs,
  });
});

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("input", {
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

module.exports = script;
