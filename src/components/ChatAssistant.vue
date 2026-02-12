<template>
    <!-- Botón simple flotante -->
    <button @click="toggleChat" class="fixed bottom-6 right-6 z-50 group">
        <div class="
            relative flex items-center
            h-16
            w-16 hover:w-50
            px-2
            transition-all duration-300 ease-in-out
            overflow-hidden
            rounded-full
            bg-base-100
            border border-base-200
            shadow-md
            cursor-pointer">

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
                class="ml-2 whitespace-nowrap text-md font-medium text-base-content opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Habla conmigo
            </span>
        </div>
    </button>

    <!-- Modal simple - sin overlay oscuro -->
    <div v-if="isOpen" class="fixed bottom-25 right-8 z-50 max-w-sm">
        <!-- Contenido del chat -->
        <div class="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
            <!-- Header simple -->
            <div class="bg-base-100 p-4 border-b border-base-300">
                <div class="flex items-center justify-between">

                    <h3 class="font-bold text-base-content">
                        RickDev
                    </h3>

                    <!-- Botón cerrar -->
                    <button @click="toggleChat" title="Cerrar" class="btn btn-sm btn-circle btn-ghost">
                        ✕
                    </button>

                </div>
            </div>

            <!-- Mensaje de bienvenida -->
            <div class="p-4 bg-base-100">
                <div class="text-center space-y-2">
                    <p class="text-3xl font-bold text-base-content">
                        Hola 👋
                    </p>

                    <p class="text-base-content/80 text-lg">
                        Soy <span class="font-semibold">RickDev</span>
                    </p>

                    <p class="text-base-content/70 text-sm">
                        Estoy listo para responderte.
                    </p>
                </div>

                <!-- Preguntas rápidas - estilo más simple -->
                <div v-if="messages.length === 0" class="space-y-2 mt-4">
                    <button v-for="(question, index) in quickQuestions" :key="index"
                        @click="sendQuickQuestion(question.question)" class="w-full text-left p-3 rounded-lg 
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
                            <span class="inline-block px-3 py-2 bg-base-300 text-base-content rounded-lg max-w-xs">
                                {{ msg.response }}
                            </span>
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
                            Hacer otra pregunta
                        </button>
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-[11px] text-base-content/40">
                        Siempre estoy trabajando en nuevos proyectos 😉
                        Si algo cambia, lo verás primero en el portafolio.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isTyping = ref(false)
const messages = ref([])

const quickQuestions = [
    { label: '¿Qué tecnologías manejas?', question: 'tecnologias' },
    { label: '¿Puedo ver tus proyectos?', question: 'proyectos' },
    { label: '¿Cómo contactarte?', question: 'contacto' },
    { label: '¿Cuál es tu experiencia?', question: 'experiencia' }
]

const responses = {
    'tecnologias': 'Uso principalmente Vue.js 3 con javascript, Laravel con php, filament, Tailwind CSS, bootstrap y tambien manejo base de datos como mysql, postgres tambien react para desarrollo web full-stack.',
    'proyectos': 'Puedes ver todos mis proyectos en la sección "Proyectos" de mi portafolio. Incluyen aplicaciones web completas. entrando a este enlace /projects',
    'contacto': 'Puedes contactarme a través del formulario en la sección "Contacto" o por LinkedIn. ¡Respondo rápido! o escribeme por whatsapp al +59165181877 Vengo desde tu portafolio y entras un descuento por contactar conmigo.',
    'experiencia': 'Tengo experiencia desarrollando aplicaciones web por más de 2 años, tanto como freelancer como en equipos de desarrollo.',
    'default': 'Puedes preguntarme sobre mis habilidades, proyectos anteriores o cómo contactarme para colaborar.'
}

const toggleChat = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
        messages.value = []
    }
}

const closeChat = () => {
    isOpen.value = false
}

const sendQuickQuestion = (questionKey) => {
    // Agregar pregunta
    messages.value.push({
        text: quickQuestions.find(q => q.question === questionKey)?.label || questionKey,
        response: null
    })

    // Mostrar typing
    isTyping.value = true

    // Responder después de delay
    setTimeout(() => {
        const lastIndex = messages.value.length - 1
        const response = responses[questionKey] || responses['default']

        messages.value[lastIndex].response = response
        isTyping.value = false
    }, 800)
}
</script>

<style scoped>
/* Asegurar que no haya overlay oscuro */
:deep(body) {
    overflow: auto !important;
}
</style>