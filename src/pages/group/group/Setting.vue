<template>
  <div class="mt-1">
      <b-row>
        <b-col cols="6">

           <b-card
              title="删除设备组"
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                设备组将被删除请谨慎操作
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
      device.groupRemove({
        id:this.form.id
      }).then((res)=>{
            if(res.code==0){
              _this.$bvModal.msgBoxOk("删除成功")

              _this.$router.push({name:"group"})
            }else{
              _this.$bvModal.msgBoxOk(res.msg)
            }
      })
    }
  }
}
</script>

<style scoped>

</style>