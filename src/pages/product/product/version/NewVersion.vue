<template>
  <div>
    <b-form ref="new" @submit="onSubmit" >
      <b-form-group
        label="版本:"
        description="语义化版本号 如 v0.0.1"
      >
        <b-form-input
          v-model="form.version"
          type="text"
          required
          placeholder="输入要发布的版本"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="描述:"
        description="对发布版本的简短描述"
      >
        <b-form-input
          v-model="form.verDescription"
          type="text"
          required
          placeholder="输入对发布版本的描述"
        ></b-form-input>
      </b-form-group>

       <b-form-group
        label="最低支持的硬件的版本:"
        description="最低支持的硬件的版本"
      >
        <b-form-input
          v-model="form.minHdVersion"
          type="text"
          required
          placeholder="最低支持的硬件版本"
        ></b-form-input>
      </b-form-group>

      <b-form-group
      
        label="开始时间:"
        description="支持开始时间"
      >
        <b-form-input
          v-model="form.startAt"
          type="date"
          required
          placeholder="支持开始时间"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="结束时间:"
        description="支持结束时间"
      >
        <b-form-input
          v-model="form.endAt"
          type="date"
          required
          placeholder="支持结束时间"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="发行类型" description="发行类型" > 
                                    <b-form-radio-group
                                        id="release-options"
                                        v-model="form.releaseType"
                                        :options="releaseTypeOptions"
                                        name="side-options"
                                    ></b-form-radio-group>
                              </b-form-group>
     
       <b-button type="submit" variant="primary">提交</b-button>
    </b-form>
  </div>
</template>

<script>
import {product} from "../../../../api/product";

export default {
    name:"NewVersion",
    props:{
        productSn:String
    },
    components:{
    
    },
    data(){
        return {
            releaseTypeOptions:[
                { text: '正式版', value: 'GA' },
                { text: '测试版', value: 'Beta' },
                { text: '开发板', value: 'Alpha' },
            ],
            form:{
                releaseType:0
            }
        };
    },
    methods:{
        onSubmit(){
            var _this=this;
       
            product.saveNewVersion({
                ...this.form,
                ...{
                    productSn:this.productSn
                }
            }).then((res)=>{
                if(res.code==0){
                    console.log("保存成功");
                    _this.$emit("close",true);
                }else{
                    _this.$bvModal.msgBoxOk(res.msg);
                }
            });
        }
    }
};
</script>

<style scoped>

</style>