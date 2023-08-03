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

          <form action="#" autocomplete="off" class="space-y-6">

            <!--            input Name-->
            <div>
              <label class="block text-sm font-medium text-gray-700 pl-1" for="name">Name</label>
              <div class="relative rounded-md shadow-md mt-2">
                <div class="absolute left-0 inset-y-0 flex items-center  pl-1.5">
                  <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675h-4.45Zm0-2h4.45L13.9 7.6q-.1-.7-.637-1.15T12 6q-.725 0-1.263.45T10.1 7.6L9.775 10ZM12 10ZM4 20v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6 0Z"/>
                  </svg>
                </div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="border-gray-300 pl-7 rounded-md focus:border-green-500 focus:ring-green-500 text-sm w-full"
                    placeholder="John Doe"
                >
              </div>
            </div>

            <!--            input Email-->
            <div>
              <label class="block text-sm font-medium text-gray-700 pl-1" for="email">Email</label>
              <div class="relative rounded-md shadow-md mt-2">
                <div class="absolute left-0 inset-y-0 flex items-center  pl-1.5">
                  <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z"/>
                  </svg>
                </div>
                <input
                    type="email"
                    id="email"
                    required
                    name="email"
                    class="border-gray-300 px-7 rounded-md focus:border-gray-500 focus:ring-gray-500 text-sm text-gray-700 placeholder-gray-500 w-full"
                    placeholder="JohnDoe@gmail.com"
                >
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
                <input
                    type="password"
                    id="password"
                    name="password"
                    minLength="8"
                    class="border-gray-300 pl-7 rounded-md focus:border-green-500 focus:ring-green-500 text-sm w-full"
                    placeholder="min 4 characters"
                >
              </div>
            </div>

            <!--            input password_confirm-->
            <div>
              <label class="block text-sm font-medium text-gray-700 pl-1" for="password_confirmation">Confirm password</label>
              <div class="relative rounded-md shadow-md mt-2">
                <div class="absolute left-0 inset-y-0 flex items-center  pl-1.5">
                  <svg class="text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"/>
                  </svg>
                </div>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    minLength="8"
                    class="border-gray-300 pl-7 rounded-md focus:border-green-500 focus:ring-green-500 text-sm w-full"
                    placeholder="confirm password"
                >
              </div>
            </div>

<!--            <div class="pt-5">-->
<!--              <nuxt-link to="/verify-email" class="flex justify-center items-center rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold-->
<!--          shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500-->
<!--          focus:ring-offset-2 transition duration-200 ease-in-out "-->
<!--              >-->
<!--                Sign up-->
<!--              </nuxt-link>-->
<!--            </div>-->
            <button
                type="submit"
                class="flex justify-center items-center  mx-auto rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold
          shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
          focus:ring-offset-2 transition duration-200 ease-in-out "
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

<script>

export default {
  name: "index",
  data () {
    return {
      signIn: true
    }
  }
}
</script>

<style scoped>

</style>