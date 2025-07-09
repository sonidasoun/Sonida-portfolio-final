<template>
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
           <div class="invisible w-64 h-24 bg-gradient-to-br from bg-amber-500 via-red-700-secondary to-[#570cac] blur-2xl opacity-20"></div>
        </div>
        <div class="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="mb-8 text-4xl font-black text-left text-whtie">My Education</h2>
                <div class="py-8 space-y-8">
                    <div v-for="element in education" :key="element.id"
                    class="flex items-center md:w[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap--v1"  />
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500-400">
                                {{ element.school }}
                            </h3>
                            <p class="text-gray-400">{{ element.program }}</p>
                            <p class="text-gray-400">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="z-10 flex flex-col h-full mt-4 text-left md:mt-0" data-aos="fade-right">
                <div v-if="$i18n.locale === 'khm'" @click="changeLanguage('khm')">
                   <h2 class="mb-4 text-4xl font-bold text-left text-white md:text-center">អំពីខ្ញុំ</h2>
                <p class="py-8 mt-8 text-base lg:text-lg">
                    ខ្ញុំជាអ្នកបង្កើតគេហទំព័រដែលស្រលាញ់ និងមានប្រវត្តិរឹងមាំខាងវិទ្យាសាស្ត្រកុំព្យូទ័រ និងគណនេយ្យ។ 
                    ដំណើររបស់ខ្ញុំបានចាប់ផ្តើមនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ជាកន្លែងដែលខ្ញុំទទួលបានបរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ។ 
                    ក្រោយ​មក​ខ្ញុំ​បាន​បន្ត​ថ្នាក់​បរិញ្ញាបត្រ​គណនេយ្យ​នៅ​វិទ្យាស្ថាន​វ៉ាន់ដា បន្ត​ដោយ​ថ្នាក់​អនុបណ្ឌិត​ផ្នែក​សវនកម្ម។ 
                    ជាមួយនឹងសំណុំជំនាញចម្រុះ និងការប្តេជ្ញាចិត្តចំពោះឧត្តមភាព ខ្ញុំប្តេជ្ញាផ្តល់នូវដំណោះស្រាយដែលមានគុណភាពខ្ពស់ដែលបំពេញតម្រូវការរបស់អតិថិជនរបស់ខ្ញុំ។
                </p> 
                    
                </div>
                <div v-else @click="changeLanguage('en')">
                <h2 class="mb-4 text-4xl font-bold text-left text-white md:text-center">About Me</h2>
                <p class="py-8 mt-8 text-base lg:text-lg">
                    I am a passionate web developer with a strong background in computer science and accounting. 
                    My journey began at the Royal University of Phnom Penh, where I earned my Bachelor's degree in Computer Science.
                    Later, I pursued a Bachelor's degree in Accounting at Vanda Institute, followed by a Master's degree in Audit.
                    With a diverse skill set and a commitment to excellence, I am dedicated to delivering high-quality solutions that meet the needs of my clients.
                </p>
                </div>

                <div v-if="$i18n.locale === 'khm'" @click="changeLanguage('khm')">
                    <div class="grid max-w-lg grid-cols-3 gap-4 pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-xl font-bold text-white sm:text-2xl lg:text-3xl">+៥០</h3>
                        <p class="text-sm text-gray-400 sm:text-base">អតិថិជន</p>
                    </div>
                     <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-xl font-bold text-white sm:text-2xl lg:text-3xl">+៥0</h3>
                        <p class="text-sm text-gray-400 sm:text-base">គម្រោង</p>
                    </div>
                     <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-xl font-bold text-white sm:text-2xl lg:text-3xl">+៨</h3>
                        <p class="text-sm text-gray-400 sm:text-base">ឆ្នាំនៃបទពិសោធន៍</p>
                    </div>
                </div>
                </div>
                <div v-else @click="changeLanguage('en')">

                <div class="grid max-w-lg grid-cols-3 gap-4 pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-xl font-bold text-white sm:text-2xl lg:text-3xl">+50</h3>
                        <p class="text-sm text-gray-400 sm:text-base">Happy Client</p>
                    </div>
                     <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-xl font-bold text-white sm:text-2xl lg:text-3xl">+50</h3>
                        <p class="text-sm text-gray-400 sm:text-base">Project</p>
                    </div>
                     <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-xl font-bold text-white sm:text-2xl lg:text-3xl">+8</h3>
                        <p class="text-sm text-gray-400 sm:text-base">Years Experience</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const education = ref([
    { id: 1, school: 'Royal University of Phom Penh', program: 'Bachelor of Science in Computer Science', year: '2005 - 2009' },
    { id: 2, school: 'Vanda Institute', program: 'Bachelor of Accounting', year: '2012 - 2015' },
    { id: 3, school: 'Vanda Institue', program: 'Master of Audit', year: '2020 - 2023' }
])

</script>

