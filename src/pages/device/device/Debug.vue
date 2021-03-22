<template>
  <div>
      <b-row class="mt-2 mb-2">
        <b-col> 
            <b-button-toolbar>
              <b-button-group>
                <b-button  variant="primary" >上线</b-button>
                <b-button  size="sm" variant="outline-primary">下线</b-button>
              </b-button-group>
             
            </b-button-toolbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          交互日志
        </b-col>
      </b-row>
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