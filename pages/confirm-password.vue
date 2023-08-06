<template>
  <div>
    <Header :signOut="signOut" />

    <main class="flex flex-col justify-center pb-20">
      <div class="mx-auto max-w-lg">
        <svg class="text-green-600 mx-auto w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linejoin="round" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294C22 4.818 19.17 2 15.68 2S9.362 4.818 9.362 8.293c0 1.61.735
          2.781.735 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439
          2.645-.147c.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.405 2.645.586 3.086 0c.735-1.024 0-2.049
          0-2.049c-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"/>
          <path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.204-2.195a2.2 2.2 0 0 1 2.204-2.196a2.2 2.2 0 0 1 2.204 2.196Z"/></g>
        </svg>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800"> Confirm password</h2>
      </div>

      <div class="bg-white/50 backdrop-blur-xl mt-10 mx-auto rounded-xl shadow-xl p-5 sm:p-10 sm:w-96 w-50">
        <form action="#" autocomplete="off" class="space-y-2">

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

          <div class="pt-5">
            <nuxt-link to="/login" class="flex justify-center items-center rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700 font-semibold
          shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500
          focus:ring-offset-2 transition duration-200 ease-in-out "
            >
              Confirm
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