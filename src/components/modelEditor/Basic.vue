<template>
  <b-tab title="基本信息">
    <b-form>
      <b-form-group label="名称" description="物模型名称">
        <b-form-input
          v-model="form.name"
          placeholder="名称"
          @change="$emit('input', this.form)"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="版本" description="物模型版本">
        <b-form-input
          v-model="form.version"
          placeholder="物模型版本"
          @change="saveSpec"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="描述" description="对物模型的描述">
        <b-form-input
          v-model="form.desc"
          placeholder="对物模型的简单描述"
          @change="saveSpec"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="原型" description="原型">
        <b-form-input
          v-model="form.from"
          placeholder="对物模型的原型"
          @change="saveSpec"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="作者" description="作者联系方式">
        <b-form-input
          v-model="form.author"
          placeholder="联系作者"
          @change="saveSpec"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="开源协议" description="对物模型的描述">
        <b-form-input
          v-model="form.license"
          placeholder="对物模型的简单描述"
          @change="saveSpec"
        >
        </b-form-input>
      </b-form-group>
      <b-button variant="primary" @click="saveSpec">保存</b-button>
    </b-form>
  </b-tab>
</template>

<script>
export default {
  name: "Basic",
  watch: {
    value: {
      handler() {
        this.form = this.value;
      },
    },
  },
  props: {
    value: Object,
  },
  data() {
    return {
      form: this.value,
    };
  },
  methods: {
    saveSpec() {
      this.$emit("input", this.form);
    },
  },
};
</script>
