<template>
  <div class="header-container fixed-top">
    <header class="header navbar navbar-expand-sm">
      <ul class="navbar-item theme-brand flex-row  text-center">
        <li class="nav-item theme-text">
          <a href="/" class="nav-link"> IotLite </a>
        </li>
      </ul>

      <ul class="navbar-item flex-row ml-md-0 ml-auto">
        <li class="nav-item align-self-center ">
          <b-button variant="link" @click="$store.commit('layout/toggleMenu')">
            <b-icon
              style="color:#e0e6ed"
              icon="blockquote-left"
              v-if="this.$store.getters['layout/showLeftMenu']"
            />
            <b-icon
              style="color:#e0e6ed"
              icon="blockquote-right"
              v-if="!this.$store.getters['layout/showLeftMenu']"
            />
          </b-button>
        </li>
      </ul>

      <ul class="navbar-item flex-row ml-md-auto">
        <b-dropdown
          toggle-tag="a"
          toggle-class="nav-link dropdown-toggle user text-decoration-none  btn-link"
          variant="link"
          no-caret
          class="nav-item dropdown user-profile-dropdown "
        >
          <template #button-content class="nav-link dropdown-toggle user">
            {{ $store.getters["auth/username"] }}
            <img
              class="ml-2"
              :src="$store.getters['auth/avatar']"
              alt="avatar"
            />
          </template>

          <b-dropdown-item
            class="dropdown-item"
            @click="$router.push({ name: 'profile' })"
          >
            个人信息</b-dropdown-item
          >
          <b-dropdown-item
            class="dropdown-item"
            @click="$router.push({ name: 'team' })"
          >
            我的团队</b-dropdown-item
          >

          <b-dropdown-item
            class="dropdown-item"
            @click="$router.push({ name: 'login' })"
          >
            退出</b-dropdown-item
          >
        </b-dropdown>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      console.log("退出登录");
    },
  },
};
</script>

<style scoped></style>
