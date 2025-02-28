var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { defineComponent, mergeDefaults, computed, createBlock, openBlock, resolveDynamicComponent, normalizeClass, withCtx, createElementBlock, createCommentVNode } from "vue";
import "lkt-string-tools";
import "lkt-i18n";
const _Settings = class _Settings {
};
_Settings.packs = {};
let Settings = _Settings;
var v = ((f) => (f.Button = "button", f.Submit = "submit", f.Reset = "reset", f.Anchor = "anchor", f.Content = "content", f.Switch = "switch", f.HiddenSwitch = "hidden-switch", f.Split = "split", f.SplitLazy = "split-lazy", f.SplitEver = "split-ever", f.Tooltip = "tooltip", f.TooltipLazy = "tooltip-lazy", f.TooltipEver = "tooltip-ever", f))(v || {});
var P = ((i) => (i.Text = "text", i.Email = "email", i.Tel = "tel", i.Password = "password", i.Search = "search", i.Number = "number", i.Color = "color", i.Range = "range", i.Textarea = "textarea", i.Html = "html", i.Date = "date", i.File = "file", i.Image = "image", i.Select = "select", i.Check = "check", i.Switch = "switch", i.Calc = "calc", i.Card = "card", i.Elements = "elements", i))(P || {});
var bt = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(t) {
  }
  feed(t = {}, o = this) {
    if (typeof t == "object") for (let [r, n] of Object.entries(t)) o.assignProp(r, n);
  }
  assignProp(t, o) {
    if (!(bt.includes(t) || _a.lktExcludedProps.includes(t)) && true) {
      if (_a.lktDateProps.includes(t)) {
        this[t] = new Date(o);
        return;
      }
      this[t] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var F = ((n) => (n.Auto = "auto", n.Always = "always", n.Lazy = "lazy", n.Ever = "ever", n))(F || {});
var N = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(N || {});
var A = ((m) => (m.Href = "href", m.RouterLink = "router-link", m.RouterLinkBack = "router-link-back", m.Mail = "mail", m.Tel = "tel", m.Tab = "tab", m.Download = "download", m.Action = "action", m.Legacy = "", m))(A || {});
var U = ((n) => (n.None = "", n.Field = "field", n.Button = "button", n.Anchor = "anchor", n))(U || {});
var j = ((r) => (r.List = "list", r.Inline = "inline", r.Count = "count", r))(j || {});
var K = ((n) => (n.None = "", n.Focus = "focus", n.Blur = "blur", n.Always = "always", n))(K || {});
var R = ((s) => (s.MinStringLength = "min-str", s.MinNumber = "min-num", s.MaxStringLength = "max-str", s.MaxNumber = "max-num", s.Email = "email", s.Empty = "empty", s.EqualTo = "equal-to", s.MinNumbers = "min-numbers", s.MaxNumbers = "max-numbers", s.MinChars = "min-chars", s.MaxChars = "max-chars", s.MinUpperChars = "min-upper-chars", s.MaxUpperChars = "max-upper-chars", s.MinLowerChars = "min-lower-chars", s.MaxLowerChars = "max-lower-chars", s.MinSpecialChars = "min-special-chars", s.MaxSpecialChars = "max-special-chars", s))(R || {});
var H = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(H || {});
var S = (_b = class extends a {
  constructor(t = {}) {
    super();
    __publicField(this, "icon", "");
    __publicField(this, "text", "");
    __publicField(this, "class", "");
    __publicField(this, "pack", "");
    __publicField(this, "type", "");
    __publicField(this, "events", {});
    this.feed(t);
  }
}, __publicField(_b, "lktAllowUndefinedProps", ["onClick"]), __publicField(_b, "lktDefaultValues", ["icon", "text", "class", "pack", "type", "events"]), _b);
var z = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(z || {});
var W = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(W || {});
var q = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(q || {});
var $ = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))($ || {});
var G = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(G || {});
var X = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(X || {});
var Y = ((p) => (p.Pages = "pages", p.PrevNext = "prev-next", p.PagesPrevNext = "pages-prev-next", p.PagesPrevNextFirstLast = "pages-prev-next-first-last", p.LoadMore = "load-more", p.Infinite = "infinite", p))(Y || {});
var J = ((n) => (n.Table = "table", n.Item = "item", n.Ul = "ul", n.Ol = "ol", n))(J || {});
var Q = ((n) => (n[n.Auto = 0] = "Auto", n[n.PreferItem = 1] = "PreferItem", n[n.PreferCustomItem = 2] = "PreferCustomItem", n[n.PreferColumns = 3] = "PreferColumns", n))(Q || {});
var Z = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(Z || {});
var _ = ((o) => (o.Message = "message", o.Button = "button", o))(_ || {});
var tt = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(tt || {});
var et = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(et || {});
var ot = ((n) => (n.Top = "top", n.Bottom = "bottom", n.Center = "center", n.ReferrerCenter = "referrer-center", n))(ot || {});
var rt = ((l) => (l.Left = "left", l.Right = "right", l.Center = "center", l.LeftCorner = "left-corner", l.RightCorner = "right-corner", l))(rt || {});
var nt = ((l) => (l.Refresh = "refresh", l.Close = "close", l.ReOpen = "reOpen", l.Exec = "exec", l.Open = "open", l))(nt || {});
var at = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(at || {});
var it = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(it || {});
var lt = ((l) => (l.NotDefined = "", l.Hidden = "hidden", l.Integer = "integer", l.Decimal = "decimal", l.Auto = "auto", l))(lt || {});
var st = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(st || {});
var ft = ((u) => (u.Create = "create", u.Update = "update", u.Edit = "edit", u.Drop = "drop", u.Sort = "sort", u.SwitchEditMode = "switch-edit-mode", u.InlineEdit = "inline-edit", u.InlineCreate = "inline-create", u.ModalCreate = "modal-create", u.InlineCreateEver = "inline-create-ever", u))(ft || {});
var dt = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(dt || {});
function oo(e) {
  let t = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in t && (o[r] = t[r]);
  return o;
}
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
  }, oo(S)),
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
      var _a2;
      if (typeof ((_a2 = props.events) == null ? void 0 : _a2.click) === "function") props.events.click($event);
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
