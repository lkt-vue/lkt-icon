import { IconConfig, IconVisualType } from "lkt-vue-kernel";
declare var __VLS_10: {}, __VLS_12: {};
type __VLS_Slots = {} & {
    text?: (props: typeof __VLS_10) => any;
} & {
    'web-element-actions'?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<IconConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<IconConfig> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("lkt-vue-kernel").IconType;
    position: import("lkt-vue-kernel").IconPosition;
    text: string | number;
    class: string | number;
    icon: string | number | (() => string);
    events: import("lkt-vue-kernel").EventsConfig;
    visualType: IconVisualType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
