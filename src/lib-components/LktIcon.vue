<script setup lang="ts">
// Props
import {computed} from "vue";

const props = withDefaults(defineProps<{
    icon?: string,
    text?: string,
    class?: string,
}>(), {
    src: '',
    text: '',
    class: '',
});

const computedClassName = computed(() => {
    return props.class;
});

</script>

<template>
    <div
        class="lkt-icon"
        :class="computedClassName">
        <i :class="icon"/>

        <span v-if="text" v-html="text"></span>
    </div>
</template>