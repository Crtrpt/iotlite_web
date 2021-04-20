<template>
  <b-col cols="12" class="mt-2 mb-2">
    <b-button-toolbar>
      <b-button-group class="mr-2">
        <b-modal id="new" ref="new" title="新建设备" hide-footer>
          <New @close="closeNew" :preset="form" />
        </b-modal>
        <b-button size="sm" variant="primary" v-b-modal.new>{{
          $t("page.device.new")
        }}</b-button>
      </b-button-group>
      <importFile></importFile>

      <b-button-group class="mr-2">
        <b-form-input
          class="tool_input"
          v-model="query.words"
          :placeholder="$t('component.search')"
        ></b-form-input>
      </b-button-group>

      <b-button-group class="mr-2 ">
        <DateTimePicker v-model="query.date" />
      </b-button-group>

      <b-button-group class="mr-2">
        <b-button size="sm" variant="primary" @click="$emit('refresh', {})">{{
          $t("component.refresh")
        }}</b-button>
      </b-button-group>
    </b-button-toolbar>
  </b-col>
</template>
<script>
import importFile from "../../components/export/ImportFile";
import New from "./New";
import DateTimePicker from "../../components/date/DateTimePicker";

export default {
  props: {
    query: Object,
    form: Object,
  },
  name: "Toolbar",
  components: { New, importFile, DateTimePicker },
  methods: {
    closeNew() {
      this.$refs["new"].hide();
      this.$emit("refresh", {});
    },
  },
};
</script>
