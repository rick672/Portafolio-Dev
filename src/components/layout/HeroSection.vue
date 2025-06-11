<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="hero min-h-screen pt-20 px-4 sm:px-10">
        <div class="hero-content flex-col lg:flex-row items-center gap-10">
            <img 
                src="/imgs/profileHero11.png" 
                alt="profile"
                class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover transition-all duration-500 ease-in-out"
                style="
                    mask-image: linear-gradient(
                    black 70%, 
                    rgba(0,0,0,0.2) 90%, 
                    transparent);" 
            />
            <div>
                <div 
                    class="md:text-center lg:text-start"
                >
                    <div 
                        class="indicator"
                    >
                        <span 
                            class="indicator-item badge badge-xs badge-primary">
                        </span>
                        <a 
                            href="https://www.linkedin.com/in/codeinrick" 
                            target="_blank"
                            class="btn btn-xs btn-block btn-primary btn-outline mb-4"
                        >{{ $t('hero.disponible') }}</a>
                    </div>
                    <h1 class="text-5xl md:text-5xl font-bold">
                        {{ $t('hero.title') }} 
                        <span class="text-primary">
                            Ricardo
                        </span>!
                        
                    </h1>
                    <p class="py-6 text-xl">
                        {{ $t('hero.description') }}
                    </p>
                    <!-- btns -->
                    <div 
                        class="flex flex-wrap gap-2 justify-center"
                    >
                        <a 
                            href="https://wa.me/59162005216?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
                            target="_blank" 
                            class="btn btn-ghost btn-outline"
                        >
                            <Icon 
                                icon="mdi:whatsapp" 
                                class="w-6 h-6" 
                            />
                            {{ $t('hero.accions.contact') }}
                        </a>
                        <a 
                            href="/cv.pdf" 
                            download 
                            class="btn btn-ghost btn-outline"
                        >
                            <Icon 
                                icon="mdi:file-document-outline" class="w-6 h-6" 
                            />
                            {{ $t('hero.accions.cv') }}
                        </a>
                        <a 
                            href="https://github.com/rick672" target="_blank" 
                            class="btn btn-ghost btn-outline"
                        >
                            <Icon 
                                icon="mdi:github" 
                                class="w-6 h-6"
                            />
                            {{ $t('hero.accions.github') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
