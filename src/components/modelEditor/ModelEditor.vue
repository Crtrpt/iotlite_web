<template>
  <b-row class="mt-2">
    <b-col cols="6">
      <b-tabs>
        <Basic v-model="spec" />
        <NewProperty v-model="spec.property" />
        <NewEvent v-model="spec.event" />
        <Control v-model="spec.control" />
        <Alarm v-model="spec.alarm" />
        <KeyIndicator v-model="spec.metric" />
      </b-tabs>
    </b-col>
    <b-col cols="6">
      <div ref="editor"></div>
    </b-col>
  </b-row>
</template>

<script>
// 引入全局实例
import CodeMirror from "codemirror";
// 核心样式
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

import "codemirror/mode/groovy/groovy.js";

import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/hint/javascript-hint.js";

import "codemirror/addon/search/search.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/jump-to-line.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/brace-fold.js";
import NewProperty from "./NewProperty.vue";
import NewEvent from "./NewEvent.vue";
import Control from "./Control.vue";
import Alarm from "./Alarm.vue";
import Basic from "./Basic.vue";
import KeyIndicator from "./KeyIndicator.vue";

export default {
  components: { NewProperty, NewEvent, Control, Alarm, Basic, KeyIndicator },
  name: "ModelEditor",
  props: {
    data: Object,
  },
  data() {
    return {
      instance: null,
      spec: {
        name: "",
        version: "",
        desc: "",
        author: "",
        license: "",
        from: "",
        property: [],
        event: [],
        control: [],
        alarm: [],
        metric: [],
      },
    };
  },
  watch: {
    spec: {
      handler() {
        this.instance.setValue(JSON.stringify(this.spec, null, 4));
      },
      deep: true,
    },
  },
  methods: {},
  mounted() {
    console.log(this.data);
    if (this.data != undefined) {
      this.spec = {
        ...this.spec,
        ...JSON.parse(this.data.value),
      };
    }

    // this.spec=JSON.parse(this.data.value);
    this.instance = CodeMirror(this.$refs.editor, {
      value: this.data.value || "",
      mode: this.data.mode,
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true,
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    });
  },
};
</script>
<style scoped></style>
