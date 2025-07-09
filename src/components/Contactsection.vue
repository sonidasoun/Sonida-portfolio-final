<script setup lang="ts">
import { Form } from 'vee-validate';

</script>

<template>
    <section class="mt-20 text-white" id="contact">
        <h2 class="px-4 mb-4 text-4xl font-bold text-left text-white xl:pl-16">Let's Connect</h2>
        <div class="relative grid gap-4 px-4 mt-8 md:grid-cols-2 xl:px-16" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">A Contact Us page serves the need to communicate with you directly.
                     It’s also an opportunity to provide personalized communication and connect with visitors.
                </p>    
                <div class="mt-5 col-lg-4 col-md-4 mb-lg-0">
                    <div class="flex items-center mb-10">
                        <div class="p-2"
                        style="background: #111a3e; width:50px;height:46px; display:flex;justify-content:center; border-radius:50%;
                        overflow:hidden;border:1px solid#111a3e;backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);"
                        >
                            <image src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="new-post" class="w-6"></image>
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Email</h4>
                            <p4>Soun.sonida@gmail.com</p4>
                        </div>
                    </div>
                    <div class="flex items-center mb-10">
                        <div class="p-2"
                        style="background: #111a3e; width:50px;height:46px; display:flex;justify-content:center; border-radius:50%;
                        overflow:hidden;border:1px solid#111a3e;backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);"
                        >
                            <image src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone" class="w-6"></image>
                        </div>
                        <div class="ml-5 text-white">
                            <h4>phone</h4>
                            <p4>+855089656585</p4>
                        </div>
                    </div>
                     <div class="flex items-center mb-10">
                        <div class="p-2"
                        style="background: #111a3e; width:50px;height:46px; display:flex;justify-content:center; border-radius:50%;
                        overflow:hidden;border:1px solid#111a3e;backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);"
                        >
                            <image src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="Linkedin" class="w-6"></image>
                        </div>
                        <div class="ml-5 text-white">
                            <h4>Linkedin</h4>
                            <p4>www.w3shool.com</p4>
                        </div>
                    </div>
                </div>                
            </div>
            <div  
            style="background: #111a3e; width:100%;height:100%; border-radius:20px;
            overflow:hidden;border:1px solid#111a3e;backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);">
            <Form class="flex flex-col p-2" data-aos="zoom-in-up" name="contact" netlify>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-white">email</label>
                    <input type="email" id="email" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="email@gmail.com" name="email">
                </div>
                   <div class="mb-6">
                    <label for="subject" class="block mb-2 text-sm font-medium text-white">Subject</label>
                    <input type="subject" id="subject" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="subject" name="subject">
                </div>
                   <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-white">Message</label>
                    <textarea id="message" class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about....." name="message"></textarea>
                </div>
                <button class="z-1 w-[100%important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-amber-500 border-2 border-transparent">
                    Send Message
                </button>
            </Form>            
        </div>
        <div class="opacity-25 bg-gragient-to-tr from-[#570cac] to-amber-500 blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3
        -translate-1/2">           
        </div>
        </div>
    </section>
</template>