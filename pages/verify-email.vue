<template>
  <div>
    <Header :signOut="signOut" />


    <main class="flex flex-col justify-center pb-20">
      <div class="mx-auto max-w-lg">
        <svg class="text-green-600 mx-auto w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17 7h1v1a1 1 0 0 0 2 0V7h1a1 1 0 0 0
            0-2h-1V4a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm4 4a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1
            1 0 0 1-1-1V8.41l5.88 5.89a3 3 0 0 0 4.24 0l2.47-2.47a1 1 0 0 0-1.42-1.42l-2.47 2.47a1 1 0 0
            1-1.4 0L5.41 7H13a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Z"/>
        </svg>
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-800">Verify email</h3>
      </div>

      <div class="bg-white/50 backdrop-blur-xl mt-10 mx-auto rounded-xl shadow-xl p-5 sm:p-10 w-150">
        <form action="#" autocomplete="off" class="space-y-2">

          <!--     warning  -->
          <div class="flex gap-4 items-center justify-between border border-yellow-200 rounded p-3 bg-yellow-50">
            <svg class="text-yellow-500 mx-auto w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor">
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016a.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06a.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017a.163.163 0 0 1-.054-.06a.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
              <path d="M7.002 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></g>
            </svg>
            <p>Please verify your email. <br/> We just emailed you verification link.</p>
          </div>

          <div class="pt-5">
            <nuxt-link to="/confirm-password" class="flex justify-center items-center rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold
          shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
          focus:ring-offset-2 transition duration-200 ease-in-out "
            >
              Resend verification link
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
      signOut: true,
    }
  }
}
</script>

<style scoped>

</style>