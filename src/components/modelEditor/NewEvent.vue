<template>
  <b-tab title="事件">
    <b-button-group class="mt-2 mb-2">
      <b-modal ref="new-event" title="事件" hide-footer>
        <b-form>
          <b-form-group label="名称" description="事件名称">
            <b-form-input
              v-model="curData.name"
              placeholder="属性名称"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="描述" description="对事件的描述">
            <b-form-input
              v-model="curData.desc"
              placeholder="描述"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="能力来源"
            description="服务端提供的能力还是设备端提供的能力"
          >
            <b-form-radio-group
              id="side-options"
              v-model="curData.side"
              :options="sideOptions"
              name="side-options"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group
            v-if="curData.side == 1"
            label="描述"
            description="触发条件"
          >
            <b-form-textarea
              v-model="curData.condition"
              placeholder="事件的触发条件"
              required
            >
            </b-form-textarea>
          </b-form-group>
          <b-button variant="primary" @click="createNewEvent">保存</b-button>
        </b-form>
      </b-modal>
      <b-button variant="primary" @click="createEvent">增加事件</b-button>
    </b-button-group>
    <b-row v-for="(p, i) in value" :key="i" class="mt-2">
      <b-col>{{ p.name }}</b-col>
      <b-col>{{ p.desc }}</b-col>
      <b-col>
        <b-button-group>
          <b-button size="sm" variant="primary" @click="editEvent(p, i)"
            >编辑</b-button
          >
          <b-button size="sm" variant="outline-primary" @click="removeEvent(i)"
            >删除</b-button
          >
        </b-button-group>
      </b-col>
    </b-row>
  </b-tab>
</template>

<script>
export default {
  name: "newEvent",
  props: {
    value: Array,
  },
  data() {
    return {
      sideOptions: [
        { text: "设备侧", value: 0 },
        { text: "服务侧", value: 1 },
      ],
      curData: {
        side: 0,
      },
      idx: -1,
    };
  },
  methods: {
    createEvent() {
      this.curData = {};
      this.idx = -1;
      this.$refs["new-event"].show();
    },
    editEvent(p, i) {
      this.curData = p;
      this.idx = i;
      this.$refs["new-event"].show();
    },
    removeEvent(i) {
      var v = [];
      this.value.forEach((ele, idx) => {
        if (idx === i) {
        } else {
          v.push(ele);
        }
      });
      this.$emit("input", v);
    },
    createNewEvent() {
      var v = this.value;
      if (v === null) {
        v = [];
      }
      if (this.idx === -1) {
        v.push(this.curData);
      } else {
        v[this.idx] = curData;
      }
      this.$emit("input", v);
      this.$refs["new-event"].hide();
    },
  },
};
</script>

<style></style>
