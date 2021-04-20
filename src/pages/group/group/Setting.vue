<template>
  <div class="mt-1">
    <b-row>
      <b-col cols="6">
        <b-card title="基本信息" tag="article" class="mt-2 mb-2">
          <b-card-text>
            <form>
              <b-form-group description="分组名称">
                <b-input v-model="form.name" placeholder="分组名称"></b-input>
              </b-form-group>
              <b-form-group description="对分组的简单描述信息">
                <b-input
                  v-model="form.description"
                  placeholder="描述信息"
                ></b-input>
              </b-form-group>
            </form>
          </b-card-text>
          <b-button variant="primary" @click="saveBase">保存</b-button>
        </b-card>

        <b-card title="删除设备组" tag="article" class="mb-2">
          <b-card-text>
            设备组将被删除请谨慎操作
          </b-card-text>

          <b-button variant="danger" @click="remove">删除</b-button>
        </b-card>

        <b-form> </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { device } from "../../../api/device";
export default {
  name: "Setting",
  props: {
    form: Object,
  },
  methods: {
    saveBase() {
      var _this = this;
      device
        .saveGroupBase({
          id: this.form.id,
          name: this.form.name,
          description: this.form.description,
        })
        .then((res) => {
          if (res.code === 0) {
            _this.$bvModal.msgBoxOk("保存成功");
            _this.$emit("refresh", {});
          } else {
            _this.$bvModal.msgBoxOk("保存失败");
          }
        });
    },
    remove() {
      var _this = this;
      device
        .groupRemove({
          id: this.form.id,
        })
        .then((res) => {
          if (res.code === 0) {
            _this.$bvModal.msgBoxOk("删除成功");

            _this.$router.push({ name: "group" });
          } else {
            _this.$bvModal.msgBoxOk(res.msg);
          }
        });
    },
  },
};
</script>

<style scoped></style>
