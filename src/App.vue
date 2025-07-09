<template>
  <div class="min-h-screen bg-[#09095a]">     
  <LoginModal />
  <RegisterModal />
  <HyperHeader v-if="$route.name != 'NotFound'" />
  <router-view />  
  <HyperFooter v-if="$route.name != 'NotFound'" />
  </div>
</template>
<script>
import HyperHeader from './components/HeaderSection.vue';
import HyperFooter from './components/FooterSection.vue';
import LoginModal from './components/LoginModal.vue';
import RegisterModal from './components/RegisterModal.vue';
export default {
  components: {
    HyperHeader,
    HyperFooter,
    LoginModal,
    RegisterModal
  }
}
</script>