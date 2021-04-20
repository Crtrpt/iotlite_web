<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h5>user Detail</h5>
        <p>desc</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-nav tabs>
          <b-nav-item to="base" active>Base</b-nav-item>
          <b-nav-item to="log">Log</b-nav-item>
        </b-nav>
        <router-view class="content"></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "userDetail",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
