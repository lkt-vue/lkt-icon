import { defineComponent, mergeDefaults, computed, createBlock, openBlock, resolveDynamicComponent, normalizeClass, withCtx, createElementBlock, createCommentVNode } from "vue";
import { getDefaultValues, Icon } from "lkt-vue-kernel";
const _Settings = class _Settings {
};
_Settings.packs = {};
let Settings = _Settings;
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktIcon",
  props: /* @__PURE__ */ mergeDefaults({
    icon: {},
    text: {},
    class: {},
    pack: {},
    type: {},
    events: {}
  }, getDefaultValues(Icon)),
  emits: [
    "click"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const computedClassName = computed(() => {
      if (props.pack && Settings.packs[props.pack]) {
        let pack = Settings.packs[props.pack];
        let className = String(props.class);
        if (className.indexOf(pack) !== 0) {
          return `${pack}-${className}`;
        }
      }
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
          _ctx.text ? (openBlock(), createElementBlock("span", {
            key: 1,
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
