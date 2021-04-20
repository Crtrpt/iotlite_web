<template>
  <div class="mt-1">
    <b-row>
      <b-col cols="6">
        <b-card title="基本信息" tag="article" class="mt-2 mb-2">
          <b-card-text>
            <form>
              <b-row>
                <b-col cols="8">
                  <b-form-group description="产品的名称">
                    <b-input
                      v-model="form.name"
                      placeholder="产品名称"
                    ></b-input>
                  </b-form-group>
                  <b-form-group description="产品的简单描述信息">
                    <b-input
                      v-model="form.description"
                      placeholder="描述信息"
                    ></b-input>
                  </b-form-group>
                </b-col>
                <b-col cols="4" style="text-align:center">
                  <b-form-group description="产品图标">
                    <b-avatar
                      style="cursor: pointer;"
                      id="pick-avatar"
                      :src="form.icon"
                      size="4rem"
                      variant="light"
                      icon="app"
                    ></b-avatar>
                    <avatar-cropper
                      @uploading="handleUploading"
                      @uploaded="handleUploaded"
                      trigger="#pick-avatar"
                      :upload-url="this.helper.api + '/product/image'"
                    /> </b-form-group
                ></b-col>
              </b-row>
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
            产品下面所有的设备将被删除 产品所在的组也将被删除 请谨慎处理
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
import AvatarCropper from "vue-avatar-cropper";

export default {
  name: "Setting",
  components: { AvatarCropper },
  props: {
    form: Object,
  },
  data() {
    return {
      helper: {
        api: process.env.VUE_APP_API,
      },
      access: this.form.access || "Public",
      options: [
        { text: "仅自己", value: "Private" },
        { text: "团队", value: "Team" },
      ],
    };
  },
  methods: {
    saveBase() {
      product
        .saveBase({
          sn: this.form.sn,
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
    handleUploading(form, xhr) {
      form.append("productSn", this.form.sn);
    },
    handleUploaded(resp) {
      this.$emit("refresh", {});
    },
    saveAccess() {
      product
        .saveAccess({
          sn: this.form.sn,
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
      product
        .remove({
          id: this.form.id,
        })
        .then((res) => {
          if (res.code === 0) {
            _this.$bvModal.msgBoxOk("删除成功");
            _this.$router.push({ name: "product" });
          } else {
          }
        });
    },
  },
};
</script>

<style scoped></style>
