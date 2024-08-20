import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { firebaseApp } from './firebaseConfig';

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/components/DocsExample'

import Swal from 'sweetalert2'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(CoreuiVue)
app.config.globalProperties.$swal = Swal
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)

app.mount('#app')
