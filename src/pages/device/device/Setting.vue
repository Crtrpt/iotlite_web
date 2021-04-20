<template>
  <div class="mt-1">
    <b-row>
      <b-col cols="6">
        <b-card title="基本信息" tag="article" class="mt-2 mb-2">
          <b-card-text>
            <form>
              <b-form-group description="设备的名称">
                <b-input v-model="form.name" placeholder="名称"></b-input>
              </b-form-group>
              <b-form-group description="设备的简单描述">
                <b-input
                  v-model="form.description"
                  placeholder="描述信息"
                ></b-input>
              </b-form-group>
            </form>
          </b-card-text>
          <b-button variant="primary" @click="saveBase">保存</b-button>
        </b-card>

        <b-card title="产品可见" tag="article" class="mb-2">
          <b-card-text>
            <b-form-radio-group
              v-model="access"
              :options="options"
              name="radio-validation"
            >
            </b-form-radio-group>
          </b-card-text>
          <b-button variant="primary" @click="saveAccess">保存</b-button>
        </b-card>

        <b-card title="删除设备" tag="article" class="mb-2">
          <b-card-text>
            设备将从设备组内删除 删除之后无法恢复 请谨慎操作
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
  data() {
    return {
      access: this.form.access || "Public",
      options: [
        { text: "所有人", value: "Public" },
        { text: "仅自己", value: "Private" },
        { text: "团队", value: "Team" },
      ],
    };
  },
  methods: {
    saveBase() {
      var _this = this;
      device
        .saveBase({
          sn: this.form.sn,
          productSn: this.form.product.sn,
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
    saveAccess() {
      var _this = this;
      device
        .saveAccess({
          sn: this.form.sn,
          productSn: this.form.product.sn,
          access: this.access,
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
        .remove({
          id: this.form.id,
          deviceSn: this.form.sn,
          productSn: this.form.product.sn,
        })
        .then((res) => {
          if (res.code === 0) {
            _this.$bvModal.msgBoxOk("删除成功");
          } else {
            _this.$router.push({ name: "device" });
          }
        });
    },
  },
};
</script>

<style scoped></style>
