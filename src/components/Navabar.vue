<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
      <b-navbar-brand href="#" @click="homeClick">BestRecall</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" @click="patinentsClick">Пациенты</b-nav-item>
          <b-nav-item href="#" @click="historyClick">История</b-nav-item>
          <b-nav-item href="#" style="margin-left: -15px"
            ><b-icon icon="bell-fill" style="color: red"></b-icon
          ></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav style="margin-right: 0; margin-left: auto">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Поиск"
          ></b-form-input>
          <b-button
            size="sm"
            class="mr-5"
            type="submit"
            style="margin-right: 10px"
            >Найти</b-button
          >
          <b-nav-item-dropdown text="Язык" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ user }}</em>
            </template>
            <b-dropdown-item href="#">Профиль</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Выход</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    patinentsClick() {
      this.$router.push({ name: "Patients" });
    },
    historyClick() {
      this.$router.push({ name: "History" });
    },
    homeClick() {
      this.$router.push({ name: "Home" });
    },
    logout() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
</style>