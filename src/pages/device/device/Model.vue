<template>
  <div class="mt-2">
    <b-row>
      <b-col>
        <b-button-group>
          <b-button variant="primary" @click="updateDeviceModel">
            更新设备物模型
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>
    <model-editor ref="editor" :data="d" />
  </div>
</template>

<script>
import ModelEditor from '../../../components/modelEditor/ModelEditor.vue'
import { device } from '../../../api/device'
export default {
  components: { ModelEditor },
  props: {
    form: Object,
  },
  name: 'Model',
  data() {
    return {
      d: {
        type: 'codeEditor',
        mode: 'javascript',
        value: JSON.stringify(this.form.spec, null, 2),
      },
    }
  },
  methods: {
    updateDeviceModel() {
      var _this = this
      console.log(this.$refs.editor.instance.getValue())
      device
        .saveModel({
          sn: this.form.sn,
          productSn: this.form.product.sn,
          spec: this.$refs.editor.instance.getValue(),
        })
        .then((res) => {
          if (res.code === 0) {
            _this.$bvModal.msgBoxOk('保存成功')
            _this.$emit('refresh', {})
          } else {
            _this.$bvModal.msgBoxOk(res.msg)
          }
        })
    },
  },
  mounted() {
    this.d.value = JSON.stringify(this.form.spec, null, 2)
  },
}
</script>

<style scoped></style>