<script setup lang="ts">
import {computed, useSlots} from "vue";
import {getDefaultValues, Icon, IconConfig} from "lkt-vue-kernel";

const emit = defineEmits([
    'click',
]);

const slots = useSlots();

const props = withDefaults(defineProps<IconConfig>(), getDefaultValues(Icon));

const computedClassName = computed(() => {
        return props.class;
    }),
    computedComponent = computed(() => {
        if (props.type === 'button') return 'button';
        return 'div'
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
        <i v-if="icon" :class="icon"/>
        <template v-if="slots.text">
            <slot name="text"/>
        </template>
        <span v-else-if="text" v-html="text"/>

        <template v-if="slots['web-element-actions']">
            <slot name="web-element-actions"/>
        </template>
    </component>
</template>