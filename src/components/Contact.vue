<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Swal from 'sweetalert2';

const { t } = useI18n(); // Este es el equivalente a usar $t en el template

const formData = ref({
    name: '',
    email: '',
    message: ''
})

const handleSubmit =  async() => {
    console.log(formData.value)

    // Enviar el formulario a la API
    try {
        const response = await fetch('https://formsubmit.co/ajax/aliagaricardo321@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData.value),
        });

        const data = await response.json();

        // Verificar si la respuesta es correcta
        if (response.ok) {
            console.log('Formulario enviado correctamente');
            Swal.fire({
                title: t('contact.alert.successTitle'),
                text: t('contact.alert.successText'),
                icon: 'success',
                confirmButtonText: t('contact.alert.Button'),
            })
            formData.value = {
                name: '',
                email: '',
                message: ''
            }
        } else {
            console.log('Error al enviar el formulario');
            Swal.fire({
                title: t('contact.alert.errorTitle'),
                text: t('contact.alert.errorText'),
                icon: 'error',
                confirmButtonText: t('contact.alert.Button'),
            })
        }
    } catch (error) {
        console.error('Error al enviar el formulario', error);
        Swal.fire({
            title: t('contact.alert.errorTitle'),
            text: t('contact.alert.errorText'),
            icon: 'error',
            confirmButtonText: t('contact.alert.Button'),
        })
    }
}

</script>

<template>
    <div class="max-w-lg mx-auto py-10 rounded-xl shadow-2xl">
        <form class="max-w-md mx-auto px-5" @submit.prevent="handleSubmit">
            <div class="grid md:grid-cols-2 md:gap-6">
                <!-- Nombre -->
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model="formData.name" type="text" name="nombre" id="nombre" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none 
                     dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" "
                        required />
                    <label for="nombre" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6">
                        {{ $t('contact.form.name') }}
                    </label>
                </div>
    
                <!-- Correo -->
                <div class="relative z-0 w-full mb-5 group">
                    <input v-model="formData.email" type="email" name="correo" id="correo" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none 
                     dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" "
                        required />
                    <label for="correo" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6">
                        {{ $t('contact.form.email') }}
                    </label>
                </div>
            </div>
    
            <!-- Mensaje o Asunto -->
            <div class="relative z-0 w-full mb-5 group">
                <textarea v-model="formData.message" name="mensaje" id="mensaje" rows="4" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none 
                   dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-500 peer resize-none"
                    placeholder=" " required></textarea>
                <label for="mensaje" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                   peer-focus:scale-75 peer-focus:-translate-y-6">
                    {{ $t('contact.form.message') }}
                </label>
            </div>
    
            <!-- Botón -->
            <button type="submit" class="btn shadow hover:shadow-primary btn-primary btn-outline border border-xs hover:text-accent rounded-lg btn-md btn-block">
                {{ $t('contact.form.button') }}
            </button>
        </form>
    </div>
</template>
