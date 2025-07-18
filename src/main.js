import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import splitText from './directives/splitText'

// createApp(App).mount('#app')
const app = createApp(App)
app.directive('split-text', splitText)
app.mount('#app')
