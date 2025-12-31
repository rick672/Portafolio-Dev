<script setup>
import { Icon } from '@iconify/vue';
import { Vue3Marquee } from 'vue3-marquee';
</script>

<template>
    <div>
        <div class="mockup-browser shadow shadow-white w-full my-4">
            <div class="mockup-browser-toolbar ">

            </div>
            <div class="grid place-content-center backdrop-blur-sm">
                <!-- blurred image -->
                <div class="flex flex-col lg:flex-row items-center justify-center p-5 gap-4">
                    <!-- Imagen -->
                    <div class="p-5">
                        <img src="/imgs/about.jpg" alt="Ricardo"
                            class="w-full sm-max-w-xs md:max-w-lg lg:max-w-xl rounded-lg transition-all duration-500 hover:scale-105 " />
                    </div>
                    <!-- Contenido -->
                    <div class="lg:w-1/2 space-y-4 leading-relaxed ">
                        <p v-html="$t('about.me.parrafo1.texto')"></p>
                        <p v-html="$t('about.me.parrafo2.texto')"></p>
                        <p v-html="$t('about.me.parrafo3.texto')"></p>

                        <div class="flex flex-wrap gap-2 justify-center my-8">
                            <!-- <a 
                                href="https://wa.me/59162005216?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
                                target="_blank" 
                                class="btn btn-primary btn-outline hover:text-white"
                            >
                                <Icon 
                                    icon="mdi:whatsapp" 
                                    class="w-6 h-6" 
                                />
                                {{ $t('hero.accions.contact') }}
                            </a> -->
                            <a href="/Ricardo-Aliaga-Catari-CV.pdf" download
                                class="btn btn-primary btn-outline hover:text-white">
                                <Icon icon="mdi:file-document-outline" class="w-6 h-6" />
                                {{ $t('hero.accions.cv') }}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Vue3Marquee :gradient="true" :gradient-color="['#ffffffaa', '#ffffffaa']" :pause-on-hover="true"
            gradient-length="50">
            <div class="flex gap-4 my-4 items-center">
                <!-- Frontend -->
                <Icon icon="logos:vue" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:react" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:vuetifyjs" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:bootstrap" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Styling -->
                <Icon icon="logos:tailwindcss-icon" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:daisyui" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Languages -->
                <Icon icon="logos:html-5" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:css-3" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:javascript" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:php" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Libraries -->
                <Icon icon="logos:jquery" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:highcharts" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="simple-icons:filament" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Backend -->
                <Icon icon="logos:laravel" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Databases -->
                <Icon icon="logos:mysql" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:postgresql" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Deployment & Tools -->
                <Icon icon="logos:netlify" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="logos:firebase" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="vscode-icons:file-type-vercel" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Tools -->
                <Icon icon="logos:postman-icon" class="w-10 h-10 lg:w-12 lg:h-12" />
                <Icon icon="simple-icons:dbeaver" class="w-10 h-10 lg:w-12 lg:h-12" />

                <!-- Version Control -->
                <Icon icon="logos:github-icon" class="w-10 h-10 lg:w-12 lg:h-12" />
            </div>
        </Vue3Marquee>

    </div>
</template>
<style scoped></style>