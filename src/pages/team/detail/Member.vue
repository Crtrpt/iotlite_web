<template>
  <div class="mt-2">
    <b-row>
      <b-col cols="12">
        <b-button-toolbar>
          <b-button-group>
            <b-button @click="invite" variant="primary">邀请加入</b-button>
            <b-button @click="exitMember" variant="outline-primary"
              >退出</b-button
            >
          </b-button-group>
        </b-button-toolbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col xl="3" lg="4" md="4" sm="6" v-for="p in items" :key="p.id">
        <b-card class="mt-2 product_card">
          <template>
            <h5 @click="detail(p)" class="mb-1">{{ p.name }}</h5>
          </template>
          <b-card-text>
            {{ p.description || " " }}
          </b-card-text>

          <template #footer>
            <a href="javascript:void(0);">移除</a>
          </template>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-2" v-if="helper.total > 10">
      <b-col>
        <b-pagination
          v-model="query.page_num"
          :total-rows="helper.total"
        ></b-pagination
      ></b-col>
    </b-row>
  </div>
</template>

<script>
import { member } from "@/api/member";

export default {
  name: "TeamMember",
  components: {},
  props: {
    form: Object,
  },
  data() {
    return {
      total: 0,
      helper: {
        total: 0,
      },
      query: {
        date: {},
        organizationId: 0,
        words: "",
        pageNum: 1,
        pageSize: 10,
      },
      items: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    exitMember() {
      console.log("退出团队");
    },
    invite() {
      console.log("邀请加入");
    },
    getList() {
      var _this = this;
      member
        .list({
          ...{
            sn: this.form.sn,
          },
          ...this.query,
        })
        .then((res) => {
          _this.items = res.data.list;
          _this.helper.total = res.data.total;
        });
    },
    detail(row) {
      this.$router.push({ name: "userDetail", params: { id: row.id } });
    },
  },
};
</script>

<style scoped>
.product_card {
  cursor: pointer;
}
</style>
