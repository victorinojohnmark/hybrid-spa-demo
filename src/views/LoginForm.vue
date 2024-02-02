<template>
    <div class="relative min-h-screen">
        <video class="absolute inset-0 w-full h-full object-cover bg-video" autoplay muted loop>
            <source src="/video/girls_buying_online.mp4" type="video/mp4">
        </video>

        <div class="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-white/30">
            <div class="mx-3">
                <div class="flex flex-row items-center justify-center py-2 -mt-40 gap-x-2">
                    <img src="/img/ariazon_logo.png" class="h-14" alt="logo" />
                </div>
                <Card class="p-4 sm:max-w-xl w-full shadow-lg">
                    <template #title>Sign in into account</template>
                    <template #content>
                        <p class="text">Use your credentials to access your account</p>
                        <hr class="my-3 border-gray-100">
                        <form @submit.prevent="handleLogin">
                            <div class="flex flex-col gap-3 mb-3">
                                <label for="email">Email Address</label>
                                <InputText id="email" type="email" v-model="loginData.email" placeholder="..." />
                                <small v-if="authStore.errors && authStore.errors.email" class="text-red-400">{{ authStore.errors.email[0] }}</small>
                            </div>

                            <div class="flex flex-col gap-3 mb-3">
                                <label for="password">Password</label>
                                <InputText id="password" type="password" v-model="loginData.password" placeholder="..." autocomplete="false"/>
                                <small v-if="authStore.errors && authStore.errors.email" class="text-red-400">{{ authStore.errors.password[0] }}</small>
                            </div>

                            <div v-if="authStore.status" class="mb-3">
                                <p class="mt-2 text-sm font-semibold text-red-400">{{ authStore.status }}</p>
                            </div>

                            <div class="flex gap-2">
                                <Button label="Sign In" type="submit" class="flex-1" />
                                <Button icon="fas fa-fingerprint" :pt="{ 
                                    icon: { class: 'text-lg' } 
                                }" class="" />
                            </div>
                        </form>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()
const loginData = ref({
    email: '',
    password: ''
})

const handleLogin = async () => {
    await authStore.handleLogin(loginData.value)
    loginData.value.password
}
</script>

<style scoped>
.bg-video {
    position: absolute;
    z-index: -1;
}
</style>