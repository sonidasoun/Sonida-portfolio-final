<template>
    <section class="mt-20 text-white" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">My Projects</h2>
                <div class="flex mt-5 mb-4 space-x-4 md:mt-0">
                    <button class="hover:text-primary" v-for="category in ['All', 'Web Development', 'Accounting Service', 'UI/UX']" 
                            :key="category"
                            @click= "() => selectedCategory = category">
                        {{ category }}
                     
                    </button>                    
                </div>                
            </div>
            <ul class="grid grid-cols-1 gap-6 px-4 pt-10 sm:py-16 xl:pr-16 sm:grid-cols-2 lg:grid-cols-3" 
            data-aos="fade-right">
               <div v-for="project in filteredprojects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                         :style="{ backgroundImage: 'url(' + project.image + ')',backgroundSize: 'cover' }">                         
                    <div class="absolute top-0 left-0 items-center justify-center w-full h-full overlay bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition duration-500">
                        <a class="relative mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link h-14 w-14 "
                        :href="project.link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                        data-slot="icon"
                        class="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <path stroke-linecap="round" stroke-linejoin="round"  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" >
                            </path>
                            </svg>
                        </a>                     
                    </div>
                </div>     
            <div class="mt-3 text-white rounded b-xl bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                <h3 class="text-lg font-semibold uppercase lg:text-xl">{{ project.title }}</h3>
                <p class="text-[#ADB7BE]">{{ project.description }}</p>
                <div class="flex flex-wrap p-2.5">
                    <div v-for="technology in project.technology" :key="technology" class="mt-1 ml-1 text-center rounded-3xl bg-[#111827]"
                    style="box-shadow: 0 4px 30px rgba(0,0,0,0.1); border:1px solid #111827; backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px)"
                    >
                <p class="px-1 py-2">{{ technology }}</p>
                </div>
                </div>   
            </div>
        </div>              
        </ul>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';
const projects = ref([
    { id: 1, title: 'Web Development', description: 'Description of project one', category: 'Web Development', image: 'https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg?t=st=1751892262~exp=1751895862~hmac=3ee762f693d92f6357d8548550f8dd59931ddc5fee88c849f83561b416a7938f&w=1800' },
    { id: 2, title: 'Accounting Service', description: 'Description of project two', category: 'Accounting Service', image: 'https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM=' },
    { id: 3, title: 'UI/UX Design', description: 'Description of project three', category: 'UI/UX', image: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/236119761/original/2e98218bef095f02b7c20064744b4bb6f3c5eed1/do-a-creative-mobile-app-ui-ux-design.png' },
    // Add more projects as needed
]);
const selectedCategory = ref('All');
const filteredprojects = computed(() => {
    if (selectedCategory.value === 'All') {
        return projects.value;
    }
    return projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})
</script>