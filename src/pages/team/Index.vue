<template>
  <b-container fluid>
    <b-row class="mb-2">
      <b-col cols="12">
        <h3>我的团队</h3>
        <New />
      </b-col>
    </b-row>
    <b-nav tabs>
      <b-nav-item to="contain" active-class="active">包含我的团队</b-nav-item>
      <!-- <b-nav-item to="created" >我创建的团队</b-nav-item> -->
    </b-nav>
    <router-view class="content"></router-view>
  </b-container>
</template>

<script>
import { product } from "../../api/product";
import Tag from "../../components/tags/Tag";
import New from "./New";
export default {
  name: "TeamHome",

  components: {
    Tag,
    New,
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {},
  },
  data() {
    return {
      visible: false,
      form: {
        id: 0 || this.$route.params.id,
      },
      list: [],
    };
  },
};
</script>

<style scoped></style>
