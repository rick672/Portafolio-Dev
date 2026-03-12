<template>
    <!-- Botón simple flotante -->
    <button @click="toggleChat" class="fixed bottom-6 right-6 z-50 group">
        <div class="
                relative flex items-center
                h-16
                w-16 hover:w-auto
                pl-2 pr-4
                transition-all duration-300 ease-in-out
                overflow-hidden
                rounded-full
                bg-base-100
                border border-base-200
                shadow-md
                cursor-pointer"
        >

            <!-- Ícono -->
            <div class="flex items-center justify-center w-12 h-12 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-7 h-7 text-base-content"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4">
                    <path d="M3.5 5.5h9a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1" />
                    <path
                        d="M6.5 9a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5m4 0a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5M8 5.5v-2m-7.5 5v3m15-3v3M9 2.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-2.5 10h3" />
                </svg>
            </div>

            <!-- Texto -->
            <span
                class="ml-2 whitespace-nowrap text-md font-medium text-base-content opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {{ $t('assistant.button.label') }}
            </span>
        </div>
    </button>

    <!-- Modal simple - sin overlay oscuro -->
    <div v-if="isOpen" class="fixed bottom-25 right-8 z-50 max-w-sm">
        <!-- Contenido del chat -->
        <div class="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
            <!-- Header simple - ESTE SE QUEDA FIJO -->
            <div class="bg-base-100 p-4 border-b border-base-300">
                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-base-content">
                        RickDev
                    </h3>
                    <button @click="toggleChat" title="Cerrar" class="btn btn-sm btn-circle btn-ghost">
                        ✕
                    </button>
                </div>
            </div>

            <!-- Contenedor SCROLLEABLE - solo esto se mueve -->
            <div class="p-4 bg-base-100 max-h-[60vh] overflow-y-auto">
                <div class="text-center space-y-2">
                    <p class="text-3xl font-bold text-base-content">
                        {{ $t('assistant.header.greeting') }}
                    </p>

                    <p class="text-base-content/80 text-lg">
                        {{ $t('assistant.header.introText') }}
                        <span class="font-semibold">
                            {{ $t('assistant.header.brandName') }}
                        </span>
                    </p>

                    <p class="text-base-content/70 text-sm">
                        {{ $t('assistant.header.description') }}
                    </p>
                </div>

                <!-- Preguntas rápidas - estilo más simple -->
                <div v-if="messages.length === 0" class="space-y-2 mt-4">
                    <button v-for="(question, index) in quickQuestions" :key="index"
                        @click="sendQuickQuestion(question.key)" class="w-full text-left p-3 rounded-lg 
                    bg-base-100 hover:bg-base-200 
                    transition-all duration-200 
                    hover:translate-x-1 hover:shadow-md
                    text-base-content 
                    border border-base-300 
                    cursor-pointer">

                        <span class="text-md">💬</span>
                        {{ question.label }}
                    </button>
                </div>

                <!-- Respuestas -->
                <div v-if="messages.length > 0" class="mt-4 space-y-3">
                    <div v-for="(msg, index) in messages" :key="index">
                        <!-- Pregunta del usuario -->
                        <div class="text-right mb-3">
                            <span
                                class="inline-block p-3 border border-primary text-primary font-semibold rounded-lg max-w-xs">
                                {{ msg.text }}
                            </span>
                        </div>

                        <!-- Respuesta -->
                        <div v-if="msg.response" class="text-left">

                            <!-- Respuesta normal -->
                            <span v-if="typeof msg.response === 'string'"
                                class="inline-block px-3 py-2 bg-base-300 text-base-content rounded-lg max-w-xs">
                                {{ msg.response }}
                            </span>
                            <!-- Respuesta stack -->
                            <div v-else-if="msg.response.type === 'stack'"
                                class="inline-block px-5 py-4 bg-base-300 text-base-content rounded-2xl max-w-xs space-y-4">

                                <p class="leading-relaxed">
                                    {{ $t('assistant.responses.technologies') }}
                                </p>

                                <!-- Iconos -->
                                <div class="flex flex-wrap gap-3 text-2xl pt-3 border-t border-base-content/10">
                                    <div class="tooltip" data-tip="Laravel">
                                        <Icon icon="logos:laravel" class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="PHP">
                                        <Icon icon="devicon:php" class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="Vue.js">
                                        <Icon icon="logos:vue" class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="React">
                                        <Icon icon="logos:react" class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="JavaScript">
                                        <Icon icon="logos:javascript"
                                            class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="TailwindCSS">
                                        <Icon icon="devicon:tailwindcss"
                                            class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="Bootstrap">
                                        <Icon icon="devicon:bootstrap"
                                            class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="MySQL">
                                        <Icon icon="devicon:mysql" class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                    <div class="tooltip" data-tip="PostgreSQL">
                                        <Icon icon="logos:postgresql"
                                            class="hover:scale-110 transition cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <!-- Respuesta contacto -->
                            <div v-else-if="msg.response.type === 'contact'"
                                class="inline-block px-5 py-4 bg-base-300 text-base-content rounded-2xl max-w-xs space-y-3">

                                <p class="text-sm font-medium">
                                    {{ $t('assistant.responses.contact.title') }}
                                </p>

                                <div class="flex justify-around items-center py-2">
                                    <a :href="msg.response.data.whatsapp" target="_blank"
                                        class="tooltip btn btn-ghost btn-circle text-3xl hover:scale-110 transition"
                                        data-tip="WhatsApp">
                                        <Icon icon="logos:whatsapp-icon" />
                                    </a>

                                    <a :href="msg.response.data.linkedin" target="_blank"
                                        class="tooltip btn btn-ghost btn-circle text-3xl hover:scale-110 transition"
                                        data-tip="LinkedIn">
                                        <Icon icon="logos:linkedin-icon" />
                                    </a>

                                    <a :href="'mailto:' + msg.response.data.email"
                                        class="tooltip btn btn-ghost btn-circle text-2xl hover:scale-120 transition"
                                        data-tip="Email">
                                        <Icon icon="logos:google-gmail" />
                                    </a>
                                </div>

                                <p class="text-xs text-center text-base-content/60 italic">
                                    {{ $t('assistant.responses.contact.description') }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Typing indicator -->
                    <div v-if="isTyping" class="text-left">
                        <span class="inline-block px-3 py-2 bg-base-300 text-base-content rounded-lg">
                            <span class="loading loading-dots loading-xs"></span>
                        </span>
                    </div>

                    <!-- Botón reiniciar conversación -->
                    <div v-if="messages.length > 0 && !isTyping" class="mt-5 flex justify-center">
                        <button @click="messages = []" class="text-xs uppercase tracking-wide text-base-content/60 
           hover:text-primary transition">
                            {{ $t('assistant.actions.restart') }}
                        </button>
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-[11px] text-base-content/40">
                        {{ $t('assistant.footer') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()


const isOpen = ref(false)
const isTyping = ref(false)
const messages = ref([])

const quickQuestions = computed(() => {
    const questions = tm('assistant.quickQuestions')

    return Object.keys(questions).map(key => ({
        key,
        label: questions[key]
    }))
})


const responses = computed(() => tm('assistant.responses'))

const toggleChat = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        messages.value = []
    }
}

const closeChat = () => {
    isOpen.value = false
}

const sendQuickQuestion = (key) => {
    messages.value.push({
        text: t(`assistant.quickQuestions.${key}`),
        response: null
    })

    isTyping.value = true

    setTimeout(() => {
        const lastMessage = messages.value[messages.value.length - 1]

        let responseData = null

        // 🔹 Caso tecnologías (stack visual)
        if (key === 'technologies') {
            responseData = { type: 'stack' }
        }

        // 🔹 Caso contacto (estructura especial)
        else if (key === 'contact') {
            responseData = {
                type: 'contact',
                data: {
                    whatsapp: 'https://wa.me/59165181877?text=Hola%20Rick,%20vi%20tu%20portafolio%20y%20me%20interesa%20conversar',
                    linkedin: 'https://www.linkedin.com/in/codeinrick',
                    email: 'aliagaricardo321@gmail.com'
                }
            }
        }

        // 🔹 Respuestas normales (desde i18n)
        else {
            responseData = responses.value[key] || t('assistant.responses.default')
        }

        lastMessage.response = responseData
        isTyping.value = false
    }, 1000)
}
</script>

<style scoped>
/* Asegurar que no haya overlay oscuro */
:deep(body) {
    overflow: auto !important;
}
</style>