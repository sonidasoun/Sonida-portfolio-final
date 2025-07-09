import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './routes.js'
import { createI18n } from 'vue-i18n'

// Optional third-party libraries
import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
import * as VanillaCalendarPro from "vanilla-calendar-pro";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;


/**
 * About
Register
User
Services
Projects
Setting
 */
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            home: 'Home',
            about:'About',
            register: 'Register',
            user: 'User',
            skill: 'Skills',
            projects: 'Projects',
            contact:'Contact',
            setting: 'Setting',
          
           
        },
        khm: {
            home:'ទំព័រដើម',
            about: 'អំពីយើង',
            register: 'ចុះឈ្មោះ',
            user: 'អ្នកប្រើប្រាស់',
            skill: 'ជំនាញ',
            contact:'ទំនាក់ទំនង',
            projects: 'គម្រោង',
            setting: 'ការកំណត់',
            
        }
    }
}
)

const app = createApp(App)
app.use(router)
app.use(i18n)


app.mount('#app')
import("preline/dist/index.js")