<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
    imgUrl: {
        type: String,
        default: ''
    },
    altText: {
        type: String,
        default: ''
    },
    githubUrl: {
        type: String,
        required: false
    },
    previewUrl: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    }
})

// Mapeo de tecnologías
const techIcons = {
    Flutter: "logos:flutter",
    Dart: "logos:dart",
    Firebase: "logos:firebase",
    Playstore: "mage:playstore",
    Html: "logos:html-5",
    Css: "logos:css-3",
    Js: "logos:javascript",
    Jquery: "devicon:jquery",
    Bootstrap: "logos:bootstrap",
    VueJs: "logos:vue",
    Tailwind: "vscode-icons:file-type-tailwind",
    Headless: "logos:headlessui-icon",
    Vercel: "vscode-icons:file-type-vercel",
    Php: "vscode-icons:file-type-php",
    HighCharts: "logos:highcharts",
    Coidegniter: "logos:codeigniter-icon",
    Daisy: "logos:daisyui",
    Hosting: "vscode-icons:file-type-light-firebasehosting",
    Hostinger: "simple-icons:hostinger",
    PWA: "simple-icons:pwa",
    React: "logos:react",
    Next: "ri:nextjs-fill",
    ShadcnUI: "simple-icons:shadcnui",
    Figma: "logos:figma",
    AdobeXd: "simple-icons:adobexd",
    Laravel: "mdi:laravel",
    Filament: "mdi:filament",
    Blade: "logos:laravel",
    NodeJs: "logos:nodejs",
    MongoDb: "logos:mongodb",
    Xampp: "logos:xampp",
    Apache: "logos:apache",
    Mysql: "logos:mysql",
    Postgres: "logos:postgresql",
    Spark: "logos:apache-spark",
    Meta: "logos:meta-icon",
    Instagram: "logos:instagram-icon",
    Facebook: "logos:facebook",
    Supabase: "mdi:database",
    Appstore: "mdi:apple",
};

</script>
<!-- PROJECT SECTION -->
<template>
    <div class="px-4 my-8 lg:shadow-lg rounded-lg">
        <div class="w-full max-w-6xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-6 justify-center items-center transition-all duration-300">
                <!-- Imagen -->
                <div class="w-full sm:w-[90%] md:w-[60%] lg:w-1/2 transition-all duration-300 ease-in-out">
                    <img 
                        :src="imgUrl" 
                        :alt="altText"
                        loading="lazy"
                        class="w-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out" />
                </div>

                <!-- Contenido -->
                <div
                    class="w-full sm:w-[90%] md:w-[60%] lg:w-1/2 flex flex-col justify-center transition-all duration-300 ease-in-out px-4">
                    <!-- Título -->
                    <h3 class="text-2xl font-bold py-4">{{ title }}</h3>

                    <!-- Tecnologías -->
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span 
                            v-for="tech in technologies" :key="tech" 
                            class="inline-flex items-center gap-1 text-sm rounded-lg px-3 py-1.5 bg-base-100 shadow hover:bg-base-300 transition-colors duration-200"
                        >
                            <Icon :icon="techIcons[tech]" class="w-4 h-4" />
                            <span>{{ tech }}</span>
                        </span>
                    </div>
                    <span class="hidden" :value="type">
                        {{ type }}
                    </span>

                    <!-- Descripción -->
                    <p class="text-sm leading-relaxed py-2 opacity-70">
                        {{ description }}
                    </p>
                    <!-- Links -->
                    <div class="flex flex-wrap gap-2 my-4">
                        <a v-if="githubUrl" :href="githubUrl" target="_blank"
                            class="btn rounded-lg shadow-sm hover:shadow-primary">
                            <Icon icon="mdi:github" class="w-4 h-4" />
                            GitHub
                        </a>
                        <a v-if="previewUrl" :href="previewUrl" target="_blank"
                            class="btn rounded-lg shadow-sm hover:shadow-primary">
                            <Icon icon="mdi:eye" class="w-4 h-4" />
                            {{ $t('projects.buttons.view') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
