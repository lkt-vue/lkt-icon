<script setup lang="ts">
import {computed, useSlots} from "vue";
import {getDefaultValues, Icon, IconConfig, IconVisualType} from "lkt-vue-kernel";

const emit = defineEmits([
    'click',
]);

const slots = useSlots();

const props = withDefaults(defineProps<IconConfig>(), getDefaultValues(Icon));

const computedClassName = computed(() => {
        let r = [];
        if (props.class) r.push(props.class);
        if (computedIcon.value) r.push('has-icon');
        if (computedIconText.value) r.push('has-icon-text');
        if (props.dot) r.push('has-dot');
        if (typeof props.dot === 'string' && props.dot !== '') r.push('has-dot-text');
        if (props.visualType === IconVisualType.SwapIconAndDot) r.push('swap-icon-and-dot');

        return r.join(' ');
    }),
    computedComponent = computed(() => {
        if (props.type === 'button') return 'button';
        return 'div'
    }),
    computedIcon = computed(() => {
        if (typeof props.icon === 'function') return props.icon();
        return props.icon;
    }),
    computedIconDotText = computed(() => {
        if (typeof props.dot === 'boolean') return '';
        return props.dot;
    }),
    computedIconText = computed(() => {
        return props.iconText;
    });

const doClick = ($event: PointerEvent) => {
    if (typeof props.events?.click === 'function') props.events.click($event);
    emit('click', $event);
};

</script>

<template>
    <component
        :is="computedComponent"
        class="lkt-icon"
        :class="computedClassName"
        @click="doClick">
        <i v-if="computedIcon || computedIconText" :class="computedIcon" class="lkt-icon--main">{{computedIconText}}</i>
        <i v-if="(computedIcon || computedIconText || visualType === IconVisualType.SwapIconAndDot) && dot" class="lkt-icon--dot">{{ computedIconDotText }}</i>
        <template v-if="slots.text">
            <slot name="text"/>
        </template>
        <span v-else-if="text" v-html="text"/>

        <template v-if="slots['web-element-actions']">
            <slot name="web-element-actions"/>
        </template>
    </component>
</template>