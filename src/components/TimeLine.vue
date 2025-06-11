<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

</script>
<template>
    <li class="mb-10 ms-4">
        <div
            class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border dark:border-primary dark:bg-primary">
        </div>
        <div class="flex flex-col md:flex-row gap-6">
            <!-- Parte izquierda: título y fecha -->
            <div class="md:w-1/3">
                <h3 class="text-lg font-semibold text-primary">
                    {{ title }}
                </h3>
                <time class="text-sm font-normal leading-none text-secundary">
                    {{ date }}
                </time>
            </div>
            <!-- Parte derecha: descripción -->
            <div class="md:w-2/3">
                <p class="mb-4 opacity-70">
                    {{ description }}
                </p>
            </div>
        </div>
    </li>
</template>
