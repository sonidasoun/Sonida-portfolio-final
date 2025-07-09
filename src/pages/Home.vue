<template>
    <HeroSection />
    <ServiceSection />   
    <AboutSection />
    <ProjectSection />  
    <Contactsection />
</template>
<script>

import HeroSection from '@/components/HeroSection.vue';
import ServiceSection from '@/components/SkillSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import Contactsection from '@/components/Contactsection.vue';
export default {
    components: {      
        HeroSection,
        ServiceSection,        
        AboutSection,
        ProjectSection,
        Contactsection
  }
}
</script>