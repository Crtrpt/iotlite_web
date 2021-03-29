<template>
  <div class="mt-1">
      <b-row>
        <b-col cols="6">

            <b-card
              title="产品可见"
              tag="article"
              class="mb-2"
            >
            <b-card-text>
                <b-form-radio-group v-model="access" :options="options" name="radio-validation">
                </b-form-radio-group>
            </b-card-text>
                 <b-button  variant="primary" @click="saveAccess">保存</b-button>
            </b-card>

           <b-card
              title="删除设备"
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                产品下面所有的设备将被删除 产品所在的组也将被删除 请谨慎处理
              </b-card-text>

              <b-button  variant="danger" @click="remove">彻底删除</b-button>
            </b-card>
          
          <b-form  >
            
          </b-form>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import {product} from "../../../api/product";
export default {
    name:"Setting",
    props:{
        form:Object
    },
    data(){
        return {  
            access: this.form.access||"Public",
            options: [
                { text: '所有人', value: "Public" },
                { text: '仅自己', value: "Private" },
                { text: '团队', value: "Team" }
            ]
        };
    },
    methods:{
        saveAccess(){
            product.saveAccess({
                sn:this.form.sn,
                access:this.access,
            }).then((res)=>{
                if(res.code==0){
                    _this.$bvModal.msgBoxOk("保存成功");
                    _this.$emit('refresh',{});
                }else{
                    _this.$bvModal.msgBoxOk("保存失败");
                }
            });
        },
        remove(){
            var _this=this;
            product.remove({
                id:this.form.id
            }).then((res)=>{
                if(res.code==0){
                    _this.$bvModal.msgBoxOk("删除成功");
                    _this.$router.push({name:"product"});
                }else{
                   
                }
            });
        }
    }
};
</script>

<style scoped>

</style>