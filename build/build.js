import { defineComponent, computed, openBlock, createBlock, resolveDynamicComponent, normalizeClass, withCtx, createElementVNode, createElementBlock, createCommentVNode } from "vue";
const _Settings = class _Settings {
};
_Settings.packs = {};
let Settings = _Settings;
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktIcon",
  props: {
    icon: {},
    text: { default: "" },
    class: { default: "" },
    pack: { default: "" },
    type: { default: "" }
  },
  emits: [
    "click"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const computedClassName = computed(() => {
      if (props.pack && Settings.packs[props.pack]) {
        let pack = Settings.packs[props.pack];
        if (props.class.indexOf(pack) !== 0) {
          return `${pack}-${props.class}`;
        }
      }
      return props.class;
    }), computedComponent = computed(() => {
      if (props.type === "button") return "button";
      return "div";
    });
    const onClick = () => {
      emit("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(computedComponent.value), {
        class: normalizeClass(["lkt-icon", computedClassName.value]),
        onClick
      }, {
        default: withCtx(() => [
          createElementVNode("i", {
            class: normalizeClass(_ctx.icon)
          }, null, 2),
          _ctx.text ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: _ctx.text
          }, null, 8, _hoisted_1)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const LktIcon = {
  install: (app) => {
    if (app.component("lkt-icon") === void 0) app.component("lkt-icon", _sfc_main);
  }
};
const setIconPack = (name, className) => {
  Settings.packs[name] = className;
};
export {
  LktIcon as default,
  setIconPack
};
