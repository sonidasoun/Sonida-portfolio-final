<template>
    <div class="max-w-md p-6 mx-auto mt-10 bg-white shadow-md rounded-2xl">
        <h2 class="mb-6 text-2xl font-semibold text-gray-800">Log In</h2>
        <Form :validation-schema="validationSchema" @submit="handleSubmit" class="space-y-4">
            <!-- Name Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Name</label>
                <Field name="name" type="text" v-model="form.name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name" />
                <ErrorMessage name="name" class="mt-1 text-sm text-red-600" />
            </div>

            <!-- Email Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Password</label>
                <Field name="pass" type="number" v-model="form.pass"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password" />
                <ErrorMessage name="pass" class="mt-1 text-sm text-red-600" />
            </div>

          

            <!-- Submit Button -->
            <button type="submit"
                class="w-full py-2 font-semibold text-white transition duration-200 bg-blue-600 rounded-xl hover:bg-blue-700">
                Submit
            </button>
        </Form>
    </div>
</template>

<script>
import axios from 'axios';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'UserForm',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            form: {
                name: '',
                pass: ''
                
            },
            validationSchema: yup.object(
                {
                    name: yup.string().matches(/^[A-Za-z\s]+$/,
                        'Only alphabet and space is accepted'
                    )
                        .min(3, 'Name must be at least 3 characters')
                        .required('Name is required'),
                    pass: yup.string().required('Password is required')
                    
                })
        }
    },
    methods: {
        async handleSubmit() {
            console.log('Form submitted:', this.form)
            // You can add validation or API calls here
            try {
                const response = await axios.post('https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users', {
                    name: this.form.name,
                    pass: this.form.pass
                    
                })
                console.log('Form submitted successfully:', response.data);
                this.form = {
                    name: '',
                    pass: ''
                    
                };
                alert('User information submitted successfully!');
                this.$router.push('/users');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    }
}
</script>
