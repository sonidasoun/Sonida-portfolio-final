<template>
  <div class="max-w-xl p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-900">
    <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 dark:text-white">Contact Me</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input v-model="form.name" type="text" class="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white" required />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input v-model="form.email" type="email" class="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white" required />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
        <textarea v-model="form.message" rows="4" class="w-full px-3 py-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-white" required></textarea>
      </div>
      <button type="submit" class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Send</button>
    </form>
    <p v-if="submitted" class="mt-4 text-green-600">Thank you! Your message has been sent.</p>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form Submitted:", this.form);
      this.submitted = true;
      // Here you can send data to an API or backend
      // axios.post('/api/contact', this.form).then(...)
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>
