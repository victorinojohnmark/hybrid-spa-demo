import './assets/main.css'
import 'primeicons/primeicons.css'
import './axios'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import Wind from '@/presets/wind';
import ToastService from 'primevue/toastservice';

import App from './App.vue'
import router from './router'

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
import Toast from 'primevue/toast';

const app = createApp(App)

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
app.component('Toast', Toast)

app.use(createPinia())
app.use(ToastService);
app.use(router)
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});

app.mount('#app')
