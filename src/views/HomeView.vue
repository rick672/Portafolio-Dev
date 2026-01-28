<script setup>
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue'
import HeroSection from '@/components/layout/HeroSection.vue';
import Stats from '@/components/Stats.vue';
import TimeLine from '@/components/TimeLine.vue';
import Sections from '@/components/Sections.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import About from '@/components/layout/About.vue';
import Contact from '@/components/Contact.vue';
import { useRouter } from 'vue-router'



const router = useRouter()

function goToProjects() {
    // Guarda la posición del scroll
    sessionStorage.setItem('scrollY', window.scrollY)
    router.push('/projects')
}


onMounted(() => {
    const savedPosition = sessionStorage.getItem('scrollY')
    if (savedPosition) {
        // Espera un poquito para que la vista cargue bien
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(savedPosition),
                behavior: 'smooth'
            })
            sessionStorage.removeItem('scrollY')
        }, 100) // 100ms
    }
})

</script>

<template>
    <main>
        <HeroSection />
        <Stats />
        <!-- secciones -->
        <!-- Trayectoria -->
        <Sections 
            icon="mdi:history" 
            title="Timeline" 
            class="mx-6"
        >
            <template #title>
                <h2>{{ $t('timeline.section.title') }}</h2>
            </template>
            <div class="px-8 max-w-3xl mx-auto">
                <ol class="relative border-s border-primary">
                    <TimeLine 
                        :title="$t('timeline.experience.3.title')" 
                        :date="$t('timeline.experience.3.date')"
                        :description="$t('timeline.experience.3.description')" 
                    />
                    <TimeLine 
                        :title="$t('timeline.experience.2.title')" 
                        :date="$t('timeline.experience.2.date')"
                        :description="$t('timeline.experience.2.description')" 
                    />
                    <TimeLine 
                        :title="$t('timeline.experience.1.title')" 
                        :date="$t('timeline.experience.1.date')"
                        :description="$t('timeline.experience.1.description')" 
                    />
                </ol>
            </div>
        </Sections>
        <!-- projects -->
        <Sections 
            icon="mdi:code-tags" 
            title="Projects" 
            class="mx-6 pb-10"
        >
            <template #title>
                <h2>{{ $t('projects.section.title') }}</h2>
            </template>
            <!-- Proyecto 1 Landing Page -->
            <ProjectSection 
                :title="$t('projects.project.0.title')" :description="$t('projects.project.0.description')"
                :technologies="['Html', 'Css']" 
                imgUrl="/proyectos/landingPageCss.webp"
                altText="CodeInRick" 
                githubUrl="https://github.com/rick672/Landing-Page-Css"
                previewUrl="https://landing-page-css-ten.vercel.app/" 
                type="Web" 
            />
            <!-- Proyecto 2 CriptoCotizador -->
            <ProjectSection 
                :title="$t('projects.project.1.title')" :description="$t('projects.project.1.description')"
                :technologies="['VueJs', 'Tailwind', 'Css']"
                imgUrl="/proyectos/projectCriptoCotizador.webp"
                altText="CodeInRick" 
                githubUrl="https://github.com/rick672/Cripto-Cotizador"
                previewUrl="https://cripto-cotizador-snowy.vercel.app/" 
                type="Web" 
            />
            <!-- Proyecto 3 Instagram Clone -->
            <ProjectSection 
                :title="$t('projects.project.2.title')" :description="$t('projects.project.2.description')"
                :technologies="['VueJs', 'Tailwind', 'Firebase', 'Css']" imgUrl="/proyectos/projectInstaClone.webp"
                altText="CodeInRick" 
                githubUrl="https://github.com/rick672/Instagram-Clone"
                previewUrl="https://instagram-clone-murex-pi.vercel.app" type="Web" 
            />
            <div class="flex justify-center">
                <button 
                    @click="goToProjects" 
                    class="btn btn-outline rounded-md"
                >
                    {{ $t('projects.buttons.viewMore') }}
                    <Icon icon="pajamas:arrow-right" />
                </button>
            </div>
        </Sections>

        <!-- About me -->
        <Sections 
            icon="mdi:account-outline" 
            title="About me" 
            class="mx-6"
        >
            <template #title>
                <h2>{{ $t('about.section.title') }}</h2>
            </template>
            <div class="">
                <About />
            </div>
        </Sections>
        <!-- Contact me -->
        <Sections 
            icon="mdi:email-outline" 
            title="Contact me" 
            class="mx-6"
        >
            <template #title>
                <h2>{{ $t('contact.section.title') }}</h2>
            </template>
            <div class="pb-10">
                <Contact />
            </div>
        </Sections>
    </main>
</template>
