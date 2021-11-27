<template>
  <div>
      <NavBar/>
      <b-container>
          <router-view/>
      </b-container>
  </div>
</template>

<script>
import NavBar from "../components/Navabar.vue"

export default {
    components: {
        NavBar,
    }
}
</script>

<style>

</style>