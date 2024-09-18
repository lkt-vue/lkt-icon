import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode } from "vue";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktIcon",
  props: {
    icon: {},
    text: { default: "" },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const computedClassName = computed(() => {
      return props.class;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lkt-icon", computedClassName.value])
      }, [
        createElementVNode("i", {
          class: normalizeClass(_ctx.icon)
        }, null, 2),
        _ctx.text ? (openBlock(), createElementBlock("span", {
          key: 0,
          innerHTML: _ctx.text
        }, null, 8, _hoisted_1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const LktIcon = {
  install: (app) => {
    if (app.component("lkt-icon") === void 0) app.component("lkt-icon", _sfc_main);
  }
};
export {
  LktIcon as default
};
