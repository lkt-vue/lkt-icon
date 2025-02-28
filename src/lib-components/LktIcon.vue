<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../settings/Settings";

const emit = defineEmits([
    'click',
]);

const props = withDefaults(defineProps<{
    icon?: string,
    text?: string,
    class?: string,
    pack?: string,
    type?: string,
}>(), {
    src: '',
    text: '',
    class: '',
    pack: '',
    type: '',
});

const computedClassName = computed(() => {
        if (props.pack && Settings.packs[props.pack]) {
            let pack = Settings.packs[props.pack];
            if (props.class.indexOf(pack) !== 0) {
                return `${pack}-${props.class}`;
            }
        }
        return props.class;
    }),
    computedComponent = computed(() => {
        if (props.type === 'button') return 'button';
        return 'div'
    });

const onClick = () => {
    emit('click')
};

</script>

<template>
    <component
        :is="computedComponent"
        class="lkt-icon"
        :class="computedClassName"
        @click="onClick">
        <i :class="icon"/>

        <span v-if="text" v-html="text"></span>
    </component>
</template>