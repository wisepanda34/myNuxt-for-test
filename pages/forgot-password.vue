<template>
  <div>
    <Header :signIn="signIn" :signUp="signUp"/>

    <main class="flex flex-col justify-center pb-20">
      <div class="mx-auto max-w-lg">
        <svg class="text-green-600 mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linejoin="round" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294C22 4.818 19.17 2 15.68 2S9.362 4.818 9.362 8.293c0 1.61.735
          2.781.735 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439
          2.645-.147c.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.405 2.645.586 3.086 0c.735-1.024 0-2.049
          0-2.049c-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"/>
          <path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.204-2.195a2.2 2.2 0 0 1 2.204-2.196a2.2 2.2 0 0 1 2.204 2.196Z"/></g>
        </svg>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">Forgot your password?</h2>
      </div>
      <div class="bg-white/50 backdrop-blur-xl mt-10 mx-auto rounded-xl shadow-xl p-5 sm:p-10 w-150">

        <form action="#" autocomplete="off" class="space-y-2">

          <!--          warning-->
          <div class="flex gap-4 items-center justify-between border border-green-300 rounded p-3 bg-green-50">
            <svg class="text-green-500 mx-auto w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-8L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4Z"/>
            </svg>
            <p class="text-green-800">We have emailed your password reset link.</p>
          </div>

          <!--            input Email-->

          <div>
            <label class="block text-sm font-medium text-gray-400 pl-1" for="email">Email</label>
            <div class="relative rounded-md shadow-md mt-2">
              <div class="absolute left-0 inset-y-0 flex items-center  pl-1.5">
                <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
              </div>
              <input type="email" id="email" name="email" class="border-gray-300 pl-7 rounded-md focus:border-green-500 focus:ring-green-500 text-sm w-full" placeholder="JohnDoe@gmail.com">
            </div>
          </div>

          <div class="pt-5">
            <nuxt-link to="/reset-password" class="flex justify-center items-center rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold
          shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
          focus:ring-offset-2 transition duration-200 ease-in-out "
            >
              Send reset link
            </nuxt-link>
          </div>

        </form>



      </div>
    </main>
  </div>
</template>


<script>
export default {
  data () {
    return {
      signIn: true,
      signUp: true,
    }
  }
}
</script>

<style scoped>

</style>