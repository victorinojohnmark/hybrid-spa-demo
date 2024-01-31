import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from 'vue-toastification'
import toastConfig from './toast'

import './assets/main.css'
import 'primeicons/primeicons.css'
import './axios'
import 'vue-toastification/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import Wind from '@/presets/wind';

import App from './App.vue'
import router from './router'

//Vue-FontAwesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();

const pinia = createPinia()
const app = createApp(App)

// Prime Vue imports
import Menubar from 'primevue/menubar';
import MegaMenu from 'primevue/megamenu';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Ripple from 'primevue/ripple';
import Button from 'primevue/button';
import Chip from 'primevue/chip';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import Card from 'primevue/card';

app.component('Menubar', Menubar)
app.component('MegaMenu', MegaMenu)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Avatar', Avatar)
app.component('Badge', Badge)
app.directive('ripple', Ripple);
app.component('Button', Button)
app.component('Chip', Chip)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('Dialog', Dialog)
app.component('FileUpload', FileUpload)
app.component('Textarea', Textarea)
app.component('Card', Card)

// Add Fontawesome component
app.component('font-awesome-icon', FontAwesomeIcon);

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
app.use(Toast, toastConfig)

const authStore = useAuthStore()

authStore.checkAuthentication().then(() => {
    app.mount('#app')
})

