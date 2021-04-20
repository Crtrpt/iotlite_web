<template>
  <b-col cols="12" class="mt-2 mb-2" style="pading-left:0px;pading-right:0px">
    <b-button-toolbar>
      <b-button-group class="mr-2">
        <b-modal id="new" ref="new" :title="$t('page.group.new')" hide-footer>
          <New @close="closeNew" />
        </b-modal>
        <b-button size="sm" variant="primary" v-b-modal.new>{{
          $t("page.group.new")
        }}</b-button>
      </b-button-group>

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
import DateTimePicker from "../../components/date/DateTimePicker";
import New from "./New";

export default {
  props: {
    query: Object,
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
