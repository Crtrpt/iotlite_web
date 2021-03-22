<template>
  <div>
      <b-row class="mt-2 mb-2">
        <b-col> 
           <b-button-toolbar>
                   
                    <b-button-group  class="mr-2">
                      <b-form-input class="tool_input" v-model="query.words" placeholder="搜索"></b-form-input>
                    </b-button-group>
                     <b-button-group  class="mr-2 col-3">
                        <DateTimePicker  v-model="query.date" DateTimePicker />
                    </b-button-group>
            </b-button-toolbar>
        </b-col>
      </b-row>
     

      在线调试
  </div>
</template>

<script>
import DateTimePicker from "../../../components/date/DateTimePicker"


import {device} from "../../../api/device"
export default {
  name:"Debug",
  components:{DateTimePicker},
  props:{
    form:Object
  },
  data(){
    return {
      helper:{total:0},
      query:{
        date:{},
        words:"",
        pageNum:1,
        pageSize:10,
       },
      items: [
         
      ]
    }
  },
  watch:{
    "query":{
      handler(){
        this.getList()
      },
      deep:true
    }
  },
  mounted(){
    this.getList();
  },
  methods:{
    getList(){
      var _this=this;
       device.logList(Object.assign(
         {
        productSn:this.form.product.sn,
        deviceSn:this.form.sn,
       },this.query
       )).then((res)=>{
          _this.items=res.data.list;
          _this.helper.total=res.data.total;
      })
    },
  }
}
</script>

<style scoped>

</style>