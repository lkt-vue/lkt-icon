<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../settings/Settings";
import {getDefaultValues, Icon, IconConfig} from "lkt-vue-kernel";

const emit = defineEmits([
    'click',
]);

const props = withDefaults(defineProps<IconConfig>(), getDefaultValues(Icon));

const computedClassName = computed(() => {
        if (props.pack && Settings.packs[props.pack]) {
            let pack = Settings.packs[props.pack];
            let className = String(props.class);
            if (className.indexOf(pack) !== 0) {
                return `${pack}-${className}`;
            }
        }
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
        <span v-if="text" v-html="text"/>
    </component>
</template>