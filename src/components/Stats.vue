<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/config/firebaseConfig';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import AnimatedCount from './AnimatedCount.vue';

const visitas = ref(0)

onMounted(async () => {
    const visitasRef = doc(db, 'visitas', 'e5OJwGfSOsvh9Jr5kMPE')
    await updateDoc(visitasRef, { contador: increment(1) })
    console.log('Visita actualizada')
    visitas.value = await getDoc(visitasRef).then((doc) => doc.data().contador)
})

</script>

<template>
    <div class="flex justify-center p-2">
        <div class="stats stats-vertical md:stats-horizontal shadow shadow-primary max-w-5xl text-center">
            <!-- Card 1 -->
            <div class="stat">
                <div class="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block h-8 w-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </div>
                <div class="stat-title">
                    {{ $t('stats.visitas') }}
                </div>
                <div class="stat-value">
                    <AnimatedCount 
                        :to="visitas" 
                        :duration="1500"
                    />
                    <!-- {{ visitas }} -->
                </div>
                <div class="stat-desc">{{ $t('stats.descriptionVisitas') }}</div>
            </div>
            <!-- Card 2 -->
            <div class="stat">
                <div class="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="inline-block h-8 w-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                        </path>
                    </svg>
                </div>
                <div class="stat-title">{{ $t('stats.proyectos') }}</div>
                <div class="stat-value">+6</div>
                <div class="stat-desc">{{ $t('stats.descriptionProyectos') }}</div>
            </div>
            <!-- Card 3 -->
            <div class="stat">
                <div class="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="inline-block h-8 w-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                </div>
                <div class="stat-title">{{ $t('stats.tecnologias') }}</div>
                <div class="stat-value">+10</div>
                <div class="stat-desc">{{ $t('stats.descriptionTecnologias') }}</div>
            </div>
        </div>
    </div>
</template>