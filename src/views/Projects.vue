<script setup>
import { Icon } from '@iconify/vue';
import ProjectSection from '@/components/ProjectSection.vue';

</script>

<template>
    <div class=" mockup-browser border-base-300 pt-20 w-full h-full">
        <div class="mockup-browser-toolbar">
            <div class="input">https://codeinrick.com</div>
        </div>
        <div class="grid place-content-center mb-10 ">
            <!-- Proyecto 4 Carrito de Compras con Vue -->
            <ProjectSection 
                :title="$t('projects.project.3.title')"
                :description="$t('projects.project.3.description')"
                :technologies="['VueJs', 'Tailwind', 'Css']"
                imgUrl="/proyectos/projectStore.webp"
                altText="CodeInRick"
                githubUrl="https://github.com/rick672/Carrito-Compras"
                previewUrl="https://carrito-compras-eight.vercel.app/"
                type="Web"
            />
            <!-- Proyecto 5 Rick and Morty API Explorer -->
            <ProjectSection 
                :title="$t('projects.project.4.title')"
                :description="$t('projects.project.4.description')"
                :technologies="['Html', 'Css', 'Js']"
                imgUrl="/proyectos/projectApiRickandMorty.webp"
                altText="CodeInRick"
                githubUrl="https://github.com/rick672/RickMorty"
                previewUrl="https://rick-morty-ochre-iota.vercel.app/"
                type="Web"
            />
            <!-- Proyecto 6  Buscador de Gifs -->
            <ProjectSection 
                :title="$t('projects.project.5.title')"
                :description="$t('projects.project.5.description')"
                :technologies="['VueJs', 'Tailwind', 'Daisy', 'Css']"
                imgUrl="/proyectos/projectBuscadorGifs.webp"
                altText="CodeInRick"
                githubUrl="https://github.com/rick672/Buscador-Giphy"
                previewUrl="https://buscador-giphy-flax.vercel.app/"
                type="Web"
            />
            <!-- Proyecto 7 -->
            <ProjectSection 
                :title="$t('projects.project.6.title')"
                :description="$t('projects.project.6.description')"
                :technologies="['Laravel', 'Php', 'Tailwind', 'Css']"
                imgUrl="/proyectos/projectFilamentVeterinaria.webp"
                altText="CodeInRick"
                githubUrl="https://github.com/rick672/Veterinaria-PetsLove"
                previewUrl="https://www.youtube.com/watch?v=478Df2eicpE&t=113s"
                type="Web"
            />
            <!-- Proyecto 8 LOS PINOS - Condominio (Privado) -->
            <ProjectSection 
                :title="$t('projects.project.7.title')"
                :description="$t('projects.project.7.description')"
                :technologies="['Laravel', 'VueJs', 'Postgres', 'Js']"
                imgUrl="/proyectos/projectPINOS.webp"
                altText="CodeInRick"
                type="Web"
            />
            <!-- Proyecto 9  ROSABI – Control de Ventas (Privado) -->
            <ProjectSection 
                :title="$t('projects.project.8.title')"
                :description="$t('projects.project.8.description')"
                :technologies="['Laravel','VueJs', 'Mysql', 'Hostinger']"
                imgUrl="/proyectos/projectROSABI.webp"
                altText="CodeInRick"
                type="Web"
            />
            <!-- Boton para Volver al inicio -->
            <div class="flex justify-center">
                <RouterLink 
                    to="/"
                    class="btn btn-outline rounded-md"
                >
                    <Icon icon="pajamas:arrow-left" />
                    {{ $t('projects.buttons.back') }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>