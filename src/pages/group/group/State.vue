<template>
  <div>
    <b-row>
      <b-col cols="12" class="mt-2 mb-2">
        <b-button-toolbar>
          <b-button-group class="mr-2">
            <b-button size="sm" variant="primary" @click="$emit('refresh', {})"
              >刷新(5s)</b-button
            >
            <b-button size="sm" variant="outline-primary" @click="clearState"
              >清空</b-button
            >
          </b-button-group>
        </b-button-toolbar>
      </b-col>
      <b-col cols="4">
        <b-table-simple responsive :bordered="true" :fixed="true">
          <b-tbody>
            <b-tr v-for="(s, i) in form.state" :key="i">
              <b-td variant="light" class="text-right">{{ i }}:</b-td>
              <b-td>{{ s.value }}</b-td>
              <b-td>{{ timestamp2Str(s.time) }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as d3 from "d3";
var timeFormat = d3.timeFormat("%Y-%m-%d %H:%S:%M");
import { device } from "../../../api/device";
export default {
  name: "State",
  props: {
    form: Object,
  },
  data() {
    return {};
  },
  methods: {
    parseTime(d) {
      return timeFormat(d);
    },
    clearState() {
      var _this = this;
      device.groupStateClean({ id: this.form.id }).then((res) => {
        if (res.code === 0) {
          _this.$bvModal.msgBoxOk("保存成功");
          _this.$emit("refresh", {});
        } else {
          _this.$bvModal.msgBoxOk(res.msg);
        }
      });
    },
  },
  watch: {},
  mounted() {
    var _this = this;
    setInterval(() => {
      _this.$emit("refresh", {});
    }, 5000);
  },
};
</script>

<style scoped>
#map {
  height: 600px;
}
</style>
