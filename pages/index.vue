<template>
  <div>
    <Header :signIn="signIn" :signUp="signUp"/>
    <h1 class="text-center text-4xl">This is main page</h1>
  </div>
</template>

<script >

export default {
  data () {
    return {
      signIn: true,
      signUp: true
    }
  }
}
</script>

<style scoped>

</style>
