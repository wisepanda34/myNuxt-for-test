<template>
  <header class="header flex justify-between items-center p-6">
    <div class="flex">
      <nuxt-link to="/">
        <div class="flex justify-between items-center">
          <svg class="text-green-700 mx-auto " width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-8L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4Z"/>
          </svg>
        </div>
        <div class="logo flex items-center text-gray-900 font-bold text-2xl px-5 py-1.5">Security</div>
      </nuxt-link>
    </div>
    <div class="flex gap-2">
      <nuxt-link to="/login" v-show="signIn"  class="flex  rounded-md bg-gray-250 py-2 px-4 text-gray-900 hover:bg-gray-300 font-semibold
      shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
      focus:ring-offset-2 transition duration-200 ease-in-out "
      >
        Sign in
      </nuxt-link>
      <nuxt-link to="/" v-show="signUp"  class="flex  rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold
      shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
      focus:ring-offset-2 transition duration-200 ease-in-out "
      >
        Sign up
      </nuxt-link>
      <nuxt-link to="/login" v-show="signOut" class="flex  rounded-md bg-gray-200 py-2 px-4 text-gray-900 hover:bg-gray-300 font-semibold
    shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-grey-500
    focus:ring-offset-2 transition duration-200 ease-in-out "
      >
        Sign out
      </nuxt-link>
    </div>

  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    signIn: Boolean,
    signUp: Boolean,
    signOut: Boolean
  },
}
</script>

<style scoped>

</style>