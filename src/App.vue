<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'

</script>

<template>
    <div 
        class="min-h-screen max-w-screen-lg mx-auto sm:mb-0 "
    >
        <header>
            <NavBar />
        </header>
        <main class="relative bg-base-300 z-50 rounded-b-4xl">
            <RouterView />
        </main>
        <footer class="sticky bottom-0 z-10">
            <Footer />
        </footer>
    </div>
</template>

<style scoped></style>
