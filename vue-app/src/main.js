import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config"; 
import "primevue/resources/primevue.min.css";                    
import "primeicons/primeicons.css"; 
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-indigo/theme.css"; 
import Button from "primevue/button"; 
import Menubar from "primevue/menubar"; 

const app = createApp(App)
app.use(PrimeVue);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.mount('#app')
