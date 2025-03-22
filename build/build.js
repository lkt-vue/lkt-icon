import { defineComponent, mergeDefaults, useSlots, computed, createBlock, openBlock, resolveDynamicComponent, normalizeClass, withCtx, createElementBlock, createCommentVNode, renderSlot, unref } from "vue";
import { getDefaultValues, Icon } from "lkt-vue-kernel";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktIcon",
  props: /* @__PURE__ */ mergeDefaults({
    icon: {},
    text: {},
    class: {},
    type: {},
    position: {},
    events: {}
  }, getDefaultValues(Icon)),
  emits: [
    "click"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const slots = useSlots();
    const props = __props;
    const computedClassName = computed(() => {
      return props.class;
    }), computedComponent = computed(() => {
      if (props.type === "button") return "button";
      return "div";
    });
    const doClick = ($event) => {
      var _a;
      if (typeof ((_a = props.events) == null ? void 0 : _a.click) === "function") props.events.click($event);
      emit("click", $event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(computedComponent.value), {
        class: normalizeClass(["lkt-icon", computedClassName.value]),
        onClick: doClick
      }, {
        default: withCtx(() => [
          _ctx.icon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(_ctx.icon)
          }, null, 2)) : createCommentVNode("", true),
          unref(slots).text ? renderSlot(_ctx.$slots, "text", { key: 1 }) : _ctx.text ? (openBlock(), createElementBlock("span", {
            key: 2,
            innerHTML: _ctx.text
          }, null, 8, _hoisted_1)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class"]);
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
