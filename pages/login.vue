<template>
  <div>
  <Header :signUp="signUp"/>

    <main class="flex flex-col justify-center pb-20">
      <div class="mx-auto max-w-lg">
        <svg class="text-green-600 mx-auto w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17 7h1v1a1 1 0 0 0 2 0V7h1a1 1 0 0 0 0-2h-1V4a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0
          2Zm4 4a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.41l5.88 5.89a3 3 0 0 0 4.24 0l2.47-2.47a1 1 0 0
          0-1.42-1.42l-2.47 2.47a1 1 0 0 1-1.4 0L5.41 7H13a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0
          3-3v-6a1 1 0 0 0-1-1Z"/>
        </svg>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">Wellcome back!</h2>
      </div>
      <div class="bg-white/50 backdrop-blur-xl mt-10 mx-auto rounded-xl shadow-xl p-5 sm:p-10 w-150">

        <form action="#" autocomplete="off" class="space-y-6">

          <!--          warning-->
          <div class="flex gap-4 items-center justify-between border border-red-200 rounded p-3 bg-red-50">
            <svg class="text-red-500 mx-auto w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
            </svg>

            <p class="text-red-800">These credentials dont match our records.</p>
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

          <!--            input Password-->
          <div>
            <label class="block text-sm font-medium text-gray-700 pl-1" for="password">Password</label>
            <div class="relative rounded-md shadow-md mt-2">
              <div class="absolute left-0 inset-y-0 flex items-center  pl-1.5">
                <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"/>
                </svg>
              </div>
              <input type="password" id="password" name="password" minLength="8" class="border-gray-300 pl-7 rounded-md focus:border-green-500 focus:ring-green-500 text-sm w-full" placeholder="min 4 characters">
            </div>
          </div>

          <div class="flex flex-col gap-3 justify-center items-center mt-5">
            <div class="flex gap-2 items-center justify-start">

              <input class="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-0" type="checkbox" name="remember" id="remember"/>
              <label class="text-gray-900 text-sm" for="remember">Remember me</label>
            </div>

            <nuxt-link to="/forgot-password" class="font-medium text-sm text-green-600 hover:text-green-700">Forgot your password?</nuxt-link>
          </div>

          <div class="pt-5">
            <nuxt-link to="/forgot-password" class="flex justify-center items-center rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold
          shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
          focus:ring-offset-2 transition duration-200 ease-in-out "
            >
              Sign in
            </nuxt-link>
          </div>

        </form>

      </div>
    </main>
  </div>
</template>


<script>
export default {
  name: "login",
  data () {
    return {
      signUp: true
    }
  }
}
</script>

<style scoped>

</style>