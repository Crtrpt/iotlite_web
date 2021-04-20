<template>
  <div>
    <b-form ref="new" @submit="onSubmit">
      <b-tabs class="simple-tab">
        <b-tab title="基础" active>
          <b-form-group label="名称:" description="产品名称">
            <b-form-input
              v-model="form.name"
              type="text"
              required
              placeholder="输入产品名称"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="描述:" description="产品描述">
            <b-form-input
              v-model="form.description"
              type="text"
              required
              placeholder="输入对产品的描述"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="型号:" description="产品型号">
            <b-form-input
              v-model="form.model"
              type="text"
              required
              placeholder="型号"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="接入适配器:" description="接入适配器">
            <AdapterSelect v-model="form.adapterId"></AdapterSelect>
          </b-form-group>
        </b-tab>
        <b-tab title="高级">
          <b-form-group label="访问权限:" description="谁可以看到这个产品">
            <b-form-radio-group
              v-model="form.access"
              :options="accessOptions"
              name="radio-validation"
            >
            </b-form-radio-group>
          </b-form-group>

          <b-form-group
            label="如何添加设备:"
            description="怎么样添加来发现这个设备"
          >
            <b-form-radio-group
              v-model="form.discover"
              :options="discoverOptions"
              name="discover"
            >
            </b-form-radio-group>
          </b-form-group>

          <b-form-group label="安全认证:" description="">
            <b-form-radio-group
              v-model="form.cert"
              :options="certOptions"
              name="cert"
            >
            </b-form-radio-group>
          </b-form-group>
        </b-tab>
      </b-tabs>

      <b-button type="submit" variant="primary">提交</b-button>
    </b-form>
  </div>
</template>

<script>
import { product } from "../../api/product";
import AdapterSelect from "../../components/product/AdapterSelect.vue";

export default {
  name: "New",
  components: {
    AdapterSelect,
  },
  data() {
    return {
      certOptions: [
        { text: "无", value: "none" },
        { text: "基于产品认证", value: "product" },
        { text: "基于设备认证", value: "device" },
      ],
      discoverOptions: [
        { text: "默认", value: "all" },
        { text: "仅手动", value: "manully" },
        { text: "仅自动", value: "auto" },
      ],
      accessOptions: [
        { text: "仅自己", value: "Private" },
        { text: "团队", value: "Team" },
      ],
      form: {
        access: "Private",
        discover: "all",
        cert: "none",
      },
    };
  },
  methods: {
    onSubmit() {
      var _this = this;

      product.save(this.form).then((res) => {
        if (res.code == 0) {
          console.log("保存成功");
          _this.$emit("close", true);
        } else {
          _this.$bvModal.msgBoxOk(res.msg);
        }
      });
    },
  },
};
</script>

<style scoped></style>
