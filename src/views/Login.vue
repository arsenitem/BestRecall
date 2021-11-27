<template>
  <div>
      <b-container>
    <b-row class="justify-content-md-center" style="margin-top:10%">
      <b-col md="4">
        <b-row>
          <b-form-input placeholder="Логин" v-model="user"></b-form-input>
        </b-row>
        <b-row style="margin-top:20px">
          <b-form-input placeholder="Пароль"></b-form-input>
        </b-row>
        <b-row style="margin-top:20px"> 
          <b-button variant="outline-primary" @click="onLoginClick">Войти</b-button>
        </b-row>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user: ""
        }
    },
    methods: {
        onLoginClick() {
            this.$store.commit("setUser", this.user)
            this.$router.push({ name: 'Home', params: { userId: '123' } })
        }
    }
};
</script>

<style>
</style>