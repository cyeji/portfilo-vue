import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Timeline from 'primevue/Timeline'
import Image from 'primevue/image';
import Avatar from 'primevue/avatar';
import 'primeicons/primeicons.css'
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';
import Dialog from 'primevue/dialog';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark'
    }
  },
})
app.use(ToastService);

app.component('InputText', InputText)
app.component('Image', Image)
app.component('Button', Button)
app.component('Card', Card)
app.component('Timeline', Timeline)
app.component('Avatar', Avatar)
app.component('DataView', DataView)
app.component('Rating', Rating)
app.component('Toast', Toast)
app.component('Dialog', Dialog)
app.component('Stepper', Stepper)
app.component('StepPanels', StepPanels)
app.component('StepPanel', StepPanel)
app.component('Step', Step)
app.component('StepItem', StepItem)
app.component('StepList', StepList)


app.mount('#app')
