<template>
    <section class="relative w-full" data-aos="zoom-in-up"> 
        <div class="absolute inset-x-0 top-0 flex items-start h-64">
            <div class="w-2/3 h-24 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
            <div class="w-3/5 h-20 bg-gradient-to-r from-[#670ccf] blur-2xl opacity-40"></div>
        </div>
        <div class="relative w-full max-w-screen-lg px-5 mx-auto sm:px-8 md:px-12 lg:px-8 lg:max-w-screen-xl">
            <div class="relative grid max-w-2xl gap-10 pt-24 mx-auto lg:grid-cols-2 xl:gap-14 lg:max-w-none md:max-w-2xl md:max-w-3xl">
                <div class="lg:py-6">
                    <div v-if="$i18n.locale === 'khm'" class="text-center lg:text-left" @click="changeLanguage('khm')">
                         <h1 class="pt-4 text-3xl font-bold text-white md:text-3xl lg:text-4xl">
                           {{$t('hi')}} <span class="text-yellow-500">សួន សុនីដា</span>
                        </h1></div>
                    <div v-else @click="changeLanguage('en')" class="text-center lg:text-left" >
                        <h1 class="pt-4 text-3xl font-bold text-white md:text-3xl lg:text-4xl">
                            Hi,I'm <span class="text-yellow-500">SONIDA SUON</span>
                        </h1>
                     </div>   

                      <div v-if="$i18n.locale === 'khm'" class="text-center lg:text-left" @click="changeLanguage('khm')">
                     <p class="max-w-xl pt-8 mx-auto text-center text-gray-300 lg:text-left ">
                        ខ្ញុំជាអ្នក <span class="text-yellow-500">សរសេរកម្មវិធីលើFrontend</span> សម្រាប់បង្កើតកម្មវិធីវេប.
                     </p>   
                     </div>
                      <div v-else @click="changeLanguage('en')" class="text-center lg:text-left" >
                     <p class="max-w-xl pt-8 mx-auto text-center text-gray-300 lg:text-left ">
                        I'm a <span class="text-yellow-500">Frontend Developer</span> with a passion for creating beautiful and functional web applications.
                     </p>   
                     </div>
                     <div class="flex items-center gap-3 pt-9-col sm:flex-row sm:m-5 sm:mx-auto lg:mx-0">
                         <div v-if="$i18n.locale === 'khm'" class="text-center lg:text-left" @click="changeLanguage('khm')">
                        <button class="relative flex justify-center w-full px-6 py-3 rounded-full md:px-7 group sm:w-max">
                            <span class="absolute inset-0 transition-all ease-in-out origin-center bg-yellow-800 border-2 border-transparent rounded-3xl group-hover:scale-105"></span>
                             <span class="relative flex items-center justify-center text-white">
                             <a href="https://github.com/sonidasoun/Sonida-portfolio-final/tree/master"  target="_blank" class="pl-2 text-yellow-500">សូមចូលមើលកូដ</a>
                             </span>                             
                        </button>
                        </div>
                        <div v-else @click="changeLanguage('en')" class="text-center lg:text-left" >
                           <button class="relative flex justify-center w-full px-6 py-3 rounded-full md:px-7 group sm:w-max">
                            <span class="absolute inset-0 transition-all ease-in-out origin-center bg-yellow-800 border-2 border-transparent rounded-3xl group-hover:scale-105"></span>
                             <span class="relative flex items-center justify-center text-white">
                             <a href="https://github.com/sonidasoun/Sonida-portfolio-final/tree/master" target="_blank" class="pl-2 text-yellow-500">View Source Code</a>
                             </span>
                        </button> 
                        </div>
                        
                        <button class="relative flex justify-center w-full px-6 py-3 border rounded-full border-amber-500 md:px-7 group sm:w-max" >
                        <div class="relative flex items-center justify-center transition-all ease-in-out hover:scale-105">
                            <div class="svg-container">
                                <svg  class="download-icon"  width="18" height="22" viewBox="0 0 18 22" fill="none" 
                                         xmlns="http://www.w3.org/2000/svg">
                                    <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#f59e0b" 
                                    stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435
                                    21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                                    stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
                                </svg>
                                <div class="hidden text-white download-loader"></div>
                             </div>
                            <div v-if="$i18n.locale === 'khm'" class="text-center lg:text-left" @click="changeLanguage('khm')">
                             <a href="/src/assets/CV.png" download="/src/assets/CV.png" class="pl-2 text-yellow-500">ប្រវត្ដិរូបខ្ញុំ</a>
                            </div>
                            <div v-else @click="changeLanguage('en')" class="text-center lg:text-left" >
                            <a href="/src/assets/CV.png" download="/src/assets/CV.png" class="pl-2 text-yellow-500">My CV</a>
                            </div>
                           
                        </div>
                        </button>
                         
                    </div>   
                    
                   
                </div>     
         </div>
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[34rem] lg:min-h[none] lg:w-full lg:h-full items-center relative">
                        <div class="absolute right-0 z-0 -translate-y-1/2 top-1/2 w-5/6 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac]  bg-yellow-800 to-primary blur-2xl"> </div>  
                        <div class="absolute z-10 h-full p-2 -translate-y-1/2 bg-yellow-600 rounded-full shadow-lg border-primary lg:right-3 md:right-40 sm:right-16">
                            
                    <!-- Hero Image -->
                         <img src="/src/assets/myphoto.jpg" alt="Hero Image" width="500" height="auto" loading="lazy"
                         class="object-cover w-full h-full border-2 border-yellow-500 rounded-full shadow-lg">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useLink } from 'vue-router';
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them
});
export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}


</script>