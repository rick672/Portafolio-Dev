<script setup>
import { Icon } from '@iconify/vue';

let year = new Date().getFullYear()


</script>

<template>
    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside class="flex flex-col sm:flex-row items-start justify-center">
            <RouterLink to="/">
                <div class="w-[65px] h-auto">
                    <img 
                        src="/imgs/branding/iconLight.jpeg" 
                        alt="Logo" 
                        class="w-full h-auto object-contain rounded-md" 
                    />
                </div>
            </RouterLink>
            <p class="text-sm">
                CodeInRick
                <br />
                <span id="copyrightYear">Copyright © {{ year }}</span>
                {{ $t('footer.copyright') }}
                <br />
                {{ $t('footer.inspiration') }}
                <a 
                    href="https://porfolio.dev/" 
                    target="_blank"
                    aria-label="Porfolio de Midudev"
                >Midudev</a>
            </p>
        </aside>
        <nav>
            <div class="footer-title">{{ $t('footer.social.title') }}</div>
            <div class="grid grid-flow-col gap-4">
                <a 
                    href="https://github.com/rick672"
                    target="_blank"
                    class="btn btn-ghost btn-circle"
                    aria-label="GitHub"
                >
                    <Icon icon="mdi:github" class="w-8 h-8" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/codeinrick/"
                    target="_blank"
                    class="btn btn-ghost btn-circle"
                    aria-label="Linkedin"
                >
                    <Icon icon="mdi:linkedin" class="w-8 h-8" />
                </a>
                <a 
                    href="https://wa.me/59162005216?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
                    target="_blank"
                    class="btn btn-ghost btn-circle"
                    aria-label="Whatsapp"
                >
                    <Icon icon="mdi:whatsapp" class="w-8 h-8" />
                </a>
                <a
                    href="mailto:aliagaricardo321@gmail.com"
                    target="_blank"
                    class="btn btn-ghost btn-circle"
                    aria-label="Email"
                >
                    <Icon icon="mdi:email" class="w-8 h-8" />
                </a>
            </div>
        </nav>
    </footer>
</template>