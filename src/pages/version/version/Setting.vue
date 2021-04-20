<template>
  <div class="mt-1">
    <b-row>
      <b-col cols="6">
        <b-card title="删除版本" tag="article" class="mb-2">
          <b-card-text>
            当前版本下面所有的设备将被删除 请谨慎处理
          </b-card-text>

          <b-button variant="danger" @click="remove">彻底删除</b-button>
        </b-card>

        <b-form> </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { product } from "../../../api/product";
export default {
  name: "Setting",
  props: {
    form: Object,
  },
  methods: {
    remove() {
      var _this = this;
      product
        .removeVersion({
          id: this.form.id,
        })
        .then((res) => {
          if (res.code === 0) {
            _this.$bvModal.msgBoxOk("删除成功");
          } else {
            _this.$router.push({ name: "product" });
          }
        });
    },
  },
};
</script>

<style scoped></style>
