<script setup>
import { Icon } from "@iconify/vue";
import { ref } from 'vue'

const showModal = ref(false)

const currentSlide = ref(0)

const nextSlide = (images) => {
  if (!images.length) return
  currentSlide.value =
    currentSlide.value === images.length - 1 ? 0 : currentSlide.value + 1
}

const prevSlide = (images) => {
  if (!images.length) return
  currentSlide.value =
    currentSlide.value === 0 ? images.length - 1 : currentSlide.value - 1
}


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
    images: {
        type: Array,
        default: () => []
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
    Vercel: "ri:vercel-fill",
    Netlify: "material-icon-theme:netlify",
    Render: "simple-icons:render",
    ChartJS: "simple-icons:chartdotjs",
    FilamentPHP: "fluent-color:lightbulb-filament-16",
    Mailtrap: "simple-icons:mailtrap",
    Livewire: "devicon:livewire",
    AdminLTE: "mdi:view-dashboard",
    Flutter: "logos:flutter",
    Dart: "logos:dart",
    Firebase: "logos:firebase",
    Playstore: "mage:playstore",
    Html: "logos:html-5",
    Css: "logos:css-3",
    Js: "logos:javascript",
    Jquery: "devicon:jquery",
    Bootstrap: "devicon:bootstrap",
    VueJs: "logos:vue",
    Tailwind: "devicon:tailwindcss",
    Headless: "logos:headlessui-icon",
    Vercel: "vscode-icons:file-type-vercel",
    Php: "devicon:php",
    HighCharts: "logos:highcharts",
    Coidegniter: "logos:codeigniter-icon",
    Daisy: "logos:daisyui-icon",
    Hosting: "vscode-icons:file-type-light-firebasehosting",
    Hostinger: "simple-icons:hostinger",
    PWA: "simple-icons:pwa",
    React: "logos:react",
    Next: "ri:nextjs-fill",
    ShadcnUI: "simple-icons:shadcnui",
    Figma: "logos:figma",
    AdobeXd: "simple-icons:adobexd",
    Laravel: "logos:laravel",
    Blade: "logos:laravel",
    NodeJs: "logos:nodejs",
    MongoDb: "logos:mongodb",
    Xampp: "logos:xampp",
    Apache: "logos:apache",
    Mysql: "devicon:mysql",
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
                        :src="images.length ? images[0] : imgUrl"
                        :alt="altText" 
                        loading="lazy"
                        class="w-full cursor-pointer object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
                        @click="showModal = true" 
                    />
                </div>

                <!-- Contenido -->
                <div
                    class="w-full sm:w-[90%] md:w-[60%] lg:w-1/2 flex flex-col justify-center transition-all duration-300 ease-in-out px-4">
                    <!-- Título -->
                    <h3 class="text-2xl font-bold py-4">{{ title }}</h3>

                    <!-- Tecnologías -->
                    <div class="flex flex-wrap gap-2 mb-2">
                        <span v-for="tech in technologies" :key="tech"
                            class="inline-flex items-center gap-1 text-sm rounded-lg px-3 py-1.5 bg-base-100 shadow hover:bg-base-300 transition-colors duration-200">
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
        <!-- MODAL DAISYUI -->
        <div v-if="showModal" class="modal modal-open">
            <div class="modal-box max-w-5xl bg-transparent shadow-none p-0 relative">
                <!-- Carrusel -->
                <div v-if="images.length" class="relative w-full rounded-lg overflow-hidden">
                    <img :src="images[currentSlide]" class="w-full max-h-[85vh] object-contain rounded-lg" />
                    <button @click="prevSlide(props.images)" class="btn btn-circle absolute left-5 top-1/2 -translate-y-1/2">❮</button>
                    <button @click="nextSlide(props.images)" class="btn btn-circle absolute right-5 top-1/2 -translate-y-1/2">❯</button>
                </div>

                <!-- Imagen única -->
                <img v-else :src="imgUrl" :alt="altText" class="w-full max-h-[85vh] object-contain rounded-lg" />

                <!-- Botón Cerrar -->
                <button class="btn btn-circle absolute top-2 right-2" @click="showModal = false">✕</button>
            </div>

            <!-- Backdrop clic para cerrar -->
            <div class="modal-backdrop" @click="showModal = false"></div>
        </div>
    </div>
</template>
