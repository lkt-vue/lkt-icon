import { defineComponent, mergeDefaults, useSlots, computed, createBlock, openBlock, resolveDynamicComponent, normalizeClass, withCtx, createElementBlock, createCommentVNode, renderSlot, toDisplayString, unref } from "vue";
import { IconVisualType, getDefaultValues, Icon } from "lkt-vue-kernel";
const _hoisted_1 = {
  key: 1,
  class: "lkt-icon--dot"
};
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktIcon",
  props: /* @__PURE__ */ mergeDefaults({
    icon: { type: [String, Number, Function] },
    iconText: { type: [String, Number, Function] },
    text: {},
    class: {},
    type: {},
    visualType: {},
    dot: { type: [Boolean, String, Number] },
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
      let r = [];
      if (props.class) r.push(props.class);
      if (computedIcon.value) r.push("has-icon");
      if (computedIconText.value) r.push("has-icon-text");
      if (props.dot) r.push("has-dot");
      if (typeof props.dot === "string" && props.dot !== "") r.push("has-dot-text");
      if (props.visualType === IconVisualType.SwapIconAndDot) r.push("swap-icon-and-dot");
      return r.join(" ");
    }), computedComponent = computed(() => {
      if (props.type === "button") return "button";
      return "div";
    }), computedIcon = computed(() => {
      if (typeof props.icon === "function") return props.icon();
      return props.icon;
    }), computedIconDotText = computed(() => {
      if (typeof props.dot === "boolean") return "";
      return props.dot;
    }), computedIconText = computed(() => {
      return props.iconText;
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
          computedIcon.value || computedIconText.value ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([computedIcon.value, "lkt-icon--main"])
          }, toDisplayString(computedIconText.value), 3)) : createCommentVNode("", true),
          (computedIcon.value || computedIconText.value || __props.visualType === unref(IconVisualType).SwapIconAndDot) && __props.dot ? (openBlock(), createElementBlock("i", _hoisted_1, toDisplayString(computedIconDotText.value), 1)) : createCommentVNode("", true),
          unref(slots).text ? renderSlot(_ctx.$slots, "text", { key: 2 }) : __props.text ? (openBlock(), createElementBlock("span", {
            key: 3,
            innerHTML: __props.text
          }, null, 8, _hoisted_2)) : createCommentVNode("", true),
          unref(slots)["web-element-actions"] ? renderSlot(_ctx.$slots, "web-element-actions", { key: 4 }) : createCommentVNode("", true)
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
