import { defineStore } from "pinia"

export const useSystemStore = defineStore('system', {
    persist: true,
    state: () => ({
        systemStatus: null,
        error: [],
        darkMode: false,
        width: window.innerWidth,
        showNotifications: true
    }),
    getters: {
        errors: (state) => state.error,
        status: (state) => state.systemStatus,
        screenWidth: (state) => state.width
    },
    actions: {
        reset() {
            this.systemError = []
            this.systemStatus = []
        },
        resetError(model = '') {
            if(model.length > 0) {
                this.error = []
            } else {
                error[model] ? delete error[model] : null
            }
        },
        setScreenWidth(width) {
            this.width = width
        }
    }
})