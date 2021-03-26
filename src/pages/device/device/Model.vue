<template>
  <div>
      <model-editor :data=d />
  </div>
</template>

<script>
import ModelEditor from '../../../components/modelEditor/ModelEditor.vue'
export default {
  components: { ModelEditor },
  props:{
    form:Object
  },
  name:"Model",
  data(){
    return {
        d:  {
            type:"codeEditor",
            mode:"javascript",
            value:JSON.stringify(this.form.spec,null,2),
          }
    }
  },
  mounted(){
    this.d.value=JSON.stringify(this.form.spec,null,2);
  }
}
</script>

<style scoped>

</style>