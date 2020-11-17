import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// Importing the Nova PrimeVue theme styles
import 'primevue/resources/themes/nova/theme.css';

// Importing the base PrimeVue component styles
import 'primevue/resources/primevue.min.css';

// Importing the base PrimeIcon styles
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

const app = createApp(App)
app.config.globalProperties.$primevue = {ripple: true};
app.use(store).use(router).mount('#app')
