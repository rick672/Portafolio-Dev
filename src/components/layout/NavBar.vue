<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

// Obtener el tema guardado o asignar uno por defecto
const savedTheme = localStorage.getItem('theme')
const defaultTheme = savedTheme || document.documentElement.getAttribute('data-theme') || 'sunset'

// Configuración de idioma
const { t, locale } = useI18n()

// Cambiar entre español e inglés
const toggleLanguage = () => {
	locale.value = locale.value === 'es' ? 'en' : 'es'
}

// Estado del tema actual
const currentTheme = ref(defaultTheme)

// Aplicar tema al cargar el componente
onMounted(() => {
	document.documentElement.setAttribute('data-theme', currentTheme.value)
})

// Alternar entre temas y guardar en localStorage
const toggleTheme = () => {
	currentTheme.value = currentTheme.value === 'sunset' ? 'cupcake' : 'sunset'
	document.documentElement.setAttribute('data-theme', currentTheme.value)
	localStorage.setItem('theme', currentTheme.value)
}
// Efecto para cambiar tema
const toggleThemeWithTransition = () => {
	if (!document.startViewTransition) {
		toggleTheme()
		return
	}

	document.startViewTransition(() => {
		toggleTheme()
	})
}

</script>


<template>
	<div class="navbar bg-base backdrop-blur-sm
			shadow-primary shadow-sm 
			rounded-full 
			fixed left-0 right-0 max-w-screen-md min-h-0
			mx-auto mt-2 sm:mb-0 z-100">
		<div class="navbar-start">
			<div class="dropdown">
				<button 
					tabindex="0" 
					role="button" 
					class="btn btn-ghost btn-circle"
					aria-label="Menú"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7" />
					</svg>
				</button>
				<ul tabindex="0"
					class="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-sm rounded-box z-10 mt-3 w-52 p-2 shadow-xl border border-base-200">
					<li>
						<RouterLink 
							to="/"
							aria-current="page"
							class="flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200 ease-out hover:bg-base-200 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-sm active:scale-95">
							{{ t('navbar.home') }}</RouterLink>
					</li>
					<li>
						<RouterLink to="/projects"
							class="flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200 ease-out hover:bg-base-200 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-sm active:scale-95">
							{{ t('navbar.projects') }}</RouterLink>
					</li>
					<li>
						<a href="https://github.com/rick672" target="_blank"
							class="flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200 ease-out hover:bg-base-200 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-sm active:scale-95 group">
							GitHub
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
								fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								stroke-linejoin="round"
								class="ml-1.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
								<polyline points="15 3 21 3 21 9"></polyline>
								<line x1="10" y1="14" x2="21" y2="3"></line>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<RouterLink to="/" class="btn btn-ghost text-xl btn-outline-none border-none rounded">RickDev
			</RouterLink>
		</div>
		<div class="navbar-end">
			<!-- toggle tema  -->
			<button 
				class="btn btn-ghost border-none rounded-full px-2"
				aria-label="Cambiar theme"
			>
				<label class="swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input 
						type="checkbox" 
						class="theme-controller" :checked="currentTheme === 'cupcake'"
						@change="toggleThemeWithTransition" 
						aria-label="Cambiar theme"
					/>

					<!-- sun icon -->
					<svg class="swap-off h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
					</svg>

					<!-- moon icon -->
					<svg class="swap-on h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
					</svg>
				</label>
			</button>
			<!-- toggle idioma  -->
			<div class="flex items-center gap-2">
				<label class="flex items-center text-xs">
					<!-- Bandera EN con tooltip de daisyUI -->
					<div class="tooltip tooltip-bottom" data-tip="English (USA)">
						<img src="/imgs/us.svg" 
							alt="EN" 
							class="w-5 h-3 rounded mx-1"
							:class="locale === 'en' ? 'opacity-100' : 'opacity-50'">
					</div>

					<input 
						type="checkbox" 
						class="toggle toggle-xs text-primary border-primary"
						:checked="locale === 'es'"
						@change="toggleLanguage" 
					/>

					<!-- Bandera ES con tooltip de daisyUI -->
					<div class="tooltip tooltip-bottom" data-tip="Español (Bolivia)">
						<img src="/imgs/bo.svg" 
							alt="ES" 
							class="w-5 h-3 rounded mx-1"
							:class="locale === 'es' ? 'opacity-100' : 'opacity-50'">
					</div>
				</label>
			</div>
		</div>
	</div>
</template>