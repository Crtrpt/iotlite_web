<template>
  <b-tab title="属性">
    <b-button-group class="mt-2 mb-2">
      <b-modal ref="new-property" title="属性" hide-footer>
        <b-form>
          <b-form-group label="名称" description="属性名称">
            <b-form-input
              v-model="curDevice.name"
              placeholder="属性名称"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="描述" description="对属性的描述">
            <b-form-input
              v-model="curDevice.description"
              placeholder="描述"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="类型" description="属性的类型">
            <b-form-input
              v-model="curDevice.type"
              placeholder="类型"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="单位" description="属性的单位">
            <b-form-input
              v-model="curDevice.unit"
              placeholder="单位"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="刻度" description="属性的刻度">
            <b-form-input
              v-model="curDevice.threshold"
              placeholder="刻度"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="上报方式" description="属性上报方式">
            <b-form-radio-group
              id="active-options"
              v-model="curDevice.active"
              :options="actionOptions"
              name="active-options"
            ></b-form-radio-group>
          </b-form-group>
          <b-button variant="primary" @click="createNewProperty">保存</b-button>
        </b-form>
      </b-modal>
      <b-button variant="primary" @click="createProperty">增加属性</b-button>
    </b-button-group>
    <b-row v-for="(p, i) in value" :key="i" class="mt-2">
      <b-col>{{ p.name }}</b-col>
      <b-col cols="1">{{ p.type }}</b-col>
      <b-col cols="1">{{ p.unit }}</b-col>
      <b-col cols="1">{{ p.threshold }}</b-col>
      <b-col cols="1">{{ p.active == 0 ? "↑" : "↓" }}</b-col>
      <b-col cols="3">
        <b-button-group>
          <b-button size="sm" variant="primary" @click="editProperty(p, i)"
            >编辑</b-button
          >
          <b-button
            size="sm"
            variant="outline-primary"
            @click="removeProperty(i)"
            >删除</b-button
          >
        </b-button-group>
      </b-col>
    </b-row>
  </b-tab>
</template>

<script>
export default {
  name: "newProperty",
  props: {
    value: Array,
  },
  data() {
    return {
      curDevice: {},
      idx: -1,
      actionOptions: [
        { text: "主动上报", value: 0 },
        { text: "被动查询", value: 1 },
      ],
    };
  },
  methods: {
    createProperty() {
      this.curDevice = {};
      this.idx = -1;
      this.$refs["new-property"].show();
    },
    editProperty(p, i) {
      this.curDevice = p;
      this.idx = i;
      this.$refs["new-property"].show();
    },
    removeProperty(i) {
      var v = [];
      this.value.forEach((ele, idx) => {
        if (idx === i) {
        } else {
          v.push(ele);
        }
      });
      this.$emit("input", v);
    },
    createNewProperty() {
      var v = this.value;
      if (v === null) {
        v = [];
      }
      if (this.idx === -1) {
        v.push(this.curDevice);
      } else {
        v[this.idx] = this.curData;
      }
      this.$emit("input", v);
      this.$refs["new-property"].hide();
    },
  },
};
</script>

<style></style>
