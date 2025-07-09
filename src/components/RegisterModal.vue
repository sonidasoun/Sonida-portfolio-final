<template>
    <div id="register-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog" tabindex="-1" aria-labelledby="register-modal-label">
        <Registration></Registration>

    </div>      
    </template>
    <script>
    import Registration from '@/pages/Registration.vue'
    export default {
        name: 'RegisterModal',
        components: {
            Registration
        }
    }

</script>