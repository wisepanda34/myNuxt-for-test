<template>
  <div>
    <Header :signOut="signOut"/>
    <h1 class="text-center text-4xl">You authentified!</h1>
    <h2 class="text-center text-2xl">That's your cabinet</h2>
  </div>
</template>

<script >

export default {
  data () {
    return {
      signOut: true
    }
  }
}
</script>


