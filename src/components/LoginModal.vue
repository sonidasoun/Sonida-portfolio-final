<template>
    <div id="login-modal"
        class="fixed top-0 hidden overflow-x-hidden overflow-y-auto pointer-events-none hs-overlay size-full start-0 z-80"
        role="dialog" tabindex="-1" aria-labelledby="login-modal-label">
        <logIn></logIn>

    </div>      
    </template>
    <script>
    import LogIn from '@/pages/LogIn.vue';
    export default {
        name: 'LoginModal',
        components: {
            LogIn
        }
    }

</script>