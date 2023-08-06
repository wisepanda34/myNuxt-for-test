<template>
  <div class="text-gray-900">

    <div class="h-20 bg-green-500/50 flex gap-20 items-center px-10">
      <div class="text-3xl font-bold text-green-900">Mail</div>
      <div>
        <input
            class="h-10 w-96 border-green-800 focus:border-green-600 focus:ring-green-600 focus:ring-2 rounded"
            type="text"
            placeholder="search in mail"
        >
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-x-10 py-8 text-md">
      <aside>
        <div class="px-8 py-4 bg-white shadow-gray-400 rounded-xl cursor-pointer" >Write</div>
        <ul class="py-4 space-y-1 " >
          <li class="hover:bg-gray-300/60 cursor-pointer py-2 px-5 rounded-r-xl">incoming</li>
          <li class="hover:bg-gray-300/60 cursor-pointer py-2 px-5 rounded-r-xl">outgoing</li>
          <li class="hover:bg-gray-300/60 cursor-pointer py-2 px-5 rounded-r-xl">deferred</li>
          <li class="hover:bg-gray-300/60 cursor-pointer py-2 px-5 rounded-r-xl">drafts</li>
          <li class="hover:bg-gray-300/60 cursor-pointer py-2 px-5 rounded-r-xl">spam</li>
        </ul>
      </aside>
      
      <div class="w-full">
        <div v-show="!isOpenReset"  class="flex items-center gap-x-5 py-4 px-4 bg-gray-200 w-full">
          <input type="checkbox" class="focus:ring-0 focus:border-0 text-green-500">
          <svg class="shrink-0 w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/>
          </svg>
          <div
              class="cursor-pointer text-gray-900 hover:underline"
              @click="isOpenReset=true"
          >
            You have got email from Security. open it and follow the instructions to reset your password
          </div>
        </div>
        <nuxt-link to="/reset-password"
            v-show="isOpenReset"
            class="block w-40 mx-auto mt-20 bg-white py-10 text-center text-black text-bold rounded cursor-pointer"
        >
              RESET PASSWORD
        </nuxt-link>
      </div>
    </div>



  </div>

</template>

<script>
export default {
  name: "your-mail",
  data () {
    return {
      isOpenReset: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>