<template>
  <div class="mt-1">
      <b-row>
        <b-col cols="6">

           <b-card
              title="删除设备"
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                设备将从设备组内删除 删除之后无法恢复 请谨慎操作
              </b-card-text>

              <b-button  variant="danger" @click="remove">删除</b-button>
            </b-card>

          <b-form  >


            
            
          </b-form>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import {device} from "../../../api/device"
export default {
  name:"Setting",
  props:{
    form:Object
  },
  methods:{
    remove(){
      var _this=this;
      device.remove({
        id:this.form.id,
        deviceSn:this.form.sn,
        productSn:this.form.product.sn,
      }).then((res)=>{
            if(res.code==0){
              _this.$bvModal.msgBoxOk("删除成功")
            }else{
               _this.$router.push({name:"device"})
            }
      })
    }
  }
}
</script>

<style scoped>

</style>