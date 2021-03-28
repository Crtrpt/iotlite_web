<template>
    <treeselect v-model="v" :multiple="false" :options="options"  @input="change" 
    placeholder="选择产品版本" />
</template>

<script>

  import Treeselect from '@riophae/vue-treeselect'

import { product } from '../../api/product.js'

export default {
    name:"ProductVersionSelect",
    components: { Treeselect },
    props:{
        value:String,
        productSn:String,
    },
    watch:{
        'productSn':{
            handler:function(){
                this.refresh();
            }
        }
    },
    data(){
        return {
            v:"开发板",
            options:[
                {
                    "id": -1,
                    "label": "开发版",
                }
            ]
        }
    },
    mounted(){
        var _this=this;
        if(this.value==null){
            this.v=-1;
        }else{
             for(const opt in this.options) {
                if(opt.label==v){
                    this.v=opt.id
                }
            }
        }
         this.refresh();
    },
    methods:{
        refresh(){
            console.log("获取全部版本")
            var _this=this;
            product.allVersion({
                sn:this.productSn
            }).then(res=>{
                _this.options=res.data;
            })
        },
        change(v){
            for(const opt in this.options) {
             
                if(this.options[opt].id==v){
                    this.$emit("input",this.options[opt].label);
                    break;
                }
            }
           
        }
    }
}
</script>