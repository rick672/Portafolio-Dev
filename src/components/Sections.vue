<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <section>
        <h2 class="text-4xl font-bold text-start my-10 flex items-center">

            <Icon :icon="icon" class="w-10 h-10 mr-2" />
            <slot name="title"></slot>
        </h2>
        <slot />
    </section>
</template>