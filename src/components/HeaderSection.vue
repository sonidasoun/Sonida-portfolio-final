<template>
    <header class="bg-[#09095a]">
        <div class="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">        

            <div class="flex items-center justify-end flex-1 md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-8 text-sm">
                        <li>
                             <router-link class="text-xl text-white transition hover:text-yellow-500" to="/">
                                {{ $t('home') }}
                
                             </router-link>
                        </li>
                        <li>
                            <router-link class="text-xl text-white transition hover:text-yellow-500" to="/about">
                                {{ $t('about') }}
                            </router-link>
                        </li>                
                        <li>
                            <router-link class="text-xl text-white transition hover:text-yellow-500" to="/skill">
                             {{ $t('skill') }}
                            </router-link>
                        </li>

                        <li>
                            <router-link class="text-xl text-white transition hover:text-yellow-500" to="/project">
                                {{ $t('projects') }}
                            </router-link>
                        </li>

                        <li>
                            <router-link class="text-xl text-white transition hover:text-yellow-500" to="/contact">
                                {{ $t('contact') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link class="text-xl text-white transition hover:text-yellow-500" to="/pathMatch(.*)*">
                                {{ $t('*') }}
                            </router-link>
                        </li>
                            
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div v-if="$i18n.locale === 'en'" @click="changeLanguage('khm')"
                        class="px-3 py-2 text-white bg-blue-500 hover:cursor-pointer rounded-3xl hover:bg-blue-300">
                        ខ្មែរ</div>
                    <div v-else @click="changeLanguage('en')"
                        class="px-3 py-2 text-white bg-blue-500 hover:cursor-pointer rounded-3xl hover:bg-blue-300">
                        English</div>
                        
                    <div class="sm:flex sm:gap-4">                       
                        
                    </div>

                    <button
                        class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                        <span class="sr-only">Toggle menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>