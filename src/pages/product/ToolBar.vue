<template>
   <b-col cols="12" class="mt-2 mb-2">
                  <b-button-toolbar>
                    <b-button-group  class="mr-2">
                      <b-modal id="new" ref="new" title="新建产品" hide-footer >
                        <New  @close="closeNew"/>
                      </b-modal>
                      
                      <b-button size="sm" variant="primary" v-b-modal.new  >{{$t('page.product.new')}}</b-button>

                    </b-button-group>
                    <importFile></importFile>

                    <b-button-group  class="mr-2">
                      <b-form-input class="tool_input" v-model="query.words" :placeholder="$t('component.search')"></b-form-input>
                    </b-button-group>

                    <b-button-group  class="mr-2 ">
                        <DateTimePicker  v-model="query.date" />
                    </b-button-group>

                     <b-button-group class="mr-2">
                      <b-button size="sm" variant="primary" @click="$emit('refresh',{})" >{{$t('component.refresh')}}</b-button>
                    </b-button-group>

                  </b-button-toolbar>
  </b-col>
</template>
<script>
import importFile from "../../components/export/ImportFile"
import DateTimePicker from "../../components/date/DateTimePicker"
import New from "./New"

export default {
  props:{
    query:Object
  },
  name:"Toolbar",
  components:{
    New,importFile,DateTimePicker
  },
  methods:{
    closeNew(){
      console.log("关闭")
      this.$refs['new'].hide()
      this.$emit('refresh',{})
    }
  }
}
</script>