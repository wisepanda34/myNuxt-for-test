<template>
  <div>
    <Header :signIn="signIn"/>

    <main class="flex flex-col justify-center pb-20">
      <div class="mx-auto max-w-lg">
        <svg class="text-green-600 mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
        </svg>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">Create your profile</h2>
      </div>
      <div class="bg-white/50 backdrop-blur-xl mt-10 mx-auto rounded-xl shadow-xl p-5 sm:p-10 w-150">

        <form action="#"
              autocomplete="off"
              class="space-y-6"
              novalidate
              @submit.prevent="submitRegistration"
        >
          <div v-for="(field, i) in Object.values(formData)" :key="i">
            <label class="block text-sm font-medium text-gray-700 pl-1" :for="field.name">{{ field.name }}</label>
            <div class="relative rounded-md shadow-md mt-2">
              <div class="absolute left-0 inset-y-0 flex items-center  pl-1.5">
                <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
              </div>
              <input
                  v-model="field.value"
                  :type="field.type"
                  :id="field.name"
                  :name="field.name"
                  class="border-gray-300 px-7 rounded-md focus:border-gray-500 focus:ring-gray-500 text-sm text-gray-700 placeholder-gray-500 w-full"
                  :class="{
                      'border-red-500 focus:border-red-500': v$.formData[Object.keys(formData)[i]]?.value?.$error,
                      'border-[#42d392] ': !v$.formData[Object.keys(formData)[i]]?.value?.$invalid,
                    }"
                  :placeholder="field.placeholder"
                  @change="v$.formData[Object.keys(formData)[i]]?.value?.$touch"
              >
            </div>
          </div>
          <button
              type="submit"
              class="flex justify-center items-center  mx-auto rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold
          shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
          focus:ring-offset-2 w-full transition duration-200 ease-in-out "
          >
            Submit
          </button>
        </form>
        <div class="flex justify-center items-center mt-5">
          <nuxt-link to="login" class="font-medium text-sm text-green-600 hover:text-green-700">Already have an account?</nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script >
import {useVuelidate} from "@vuelidate/core"
import { required, email, sameAs, minLength } from '@vuelidate/validators'

export default {
  setup () { return { v$: useVuelidate() } },
  data () {
    return {
      signIn: true,
      formData: {
        email: {
          name: 'Email',
          type: 'email',
          placeholder: 'JoeDou@gmail.com',
          value: ''
        },
        password: {
          name: 'Password',
          type: 'password',
          placeholder: 'min 4 characters',
          value: ''
        },
        confirmPassword: {
          name: 'Confirm password',
          type: 'password',
          placeholder: 'repeat password',
          value: ''
        }
      }
    }
  },
  validations () {
    return {
      formData :{
        email: {
          value: {
            required, email
          }
        },
        password: {
          value: {
            required, minLength: minLength(4)
          }
        },
        confirmPassword: {
          value: {
            required,
            sameAsPassword: sameAs(this.formData.password.value)
          }
        }
      }
    }
  },
  methods: {
    submitRegistration () {
      if (!this.v$.$invalid) {
        const router = useRouter()
        router.push('/login')
      }
    }
  }
}
</script>

<style scoped>

</style>
