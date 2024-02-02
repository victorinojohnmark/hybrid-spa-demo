import { defineStore } from "pinia";
import axios from "axios";
import router from '../router'
import { useToast } from 'vue-toastification';

const toast = useToast()

export const useAuthStore = defineStore('auth', {
    persist: true,
    state: () => ({
        authUser: null,
        authErrors: []

    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors
    },
    actions: {
        async initializeToken() {
            this.resetErrorAndStatus()
            const response = await axios.get('/sanctum/csrf-cookie')
        },

        async checkAuthentication() {
            await this.initializeToken();

            if(this.user && this.user.token) {
                try {
                    const data = await axios.get('/api/auth/user', {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${this.user.token}`
                        }
                    })
    
                    this.authUser = data.data
                } catch (error) {
                    console.error('Authetication failed. ', error)
                    this.handleAuthenticationFailure()
                }
            } else {
                console.error('Authentication details do not exist.')
                this.handleAuthenticationFailure()
                
            }
            
        },
        async handleLogin(loginData) {
            this.resetErrorAndStatus();
            try {
                const data = await axios.post('/api/auth/login', loginData);

                toast.success('Verification done! You are being redirected.', { timeout: 2000, position: 'top-center' })
                setTimeout(() => {
                    this.authUser = data.data;
                    router.push('/');
                }, 2200)
                
            } catch (error) {
                if(error.response.data.errors && error.response.data.errors !== null) {
                    this.authErrors = error.response.data.errors
                } else {
                    toast.error(error.response.data.message, { timeout: 2000, position: 'top-center' })
                }
            }
        },

        async handleLogout() {
            this.resetErrorAndStatus();
            console.log('logout')
            try {
                const data = await axios.post('/api/auth/logout', {}, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.user.token}`
                    }
                });
                this.authUser = null
                router.push('/login')
            } catch (error) {
                if(error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                } else {
                    console.error(error.response.data.message)
                }
                this.authUser = null
                router.push('/login')

            }
        },

        resetErrorAndStatus() {
            this.authErrors = [];
        },

        handleAuthenticationFailure() {
            this.authUser = null;
            router.push('/login');
        },
    }
});