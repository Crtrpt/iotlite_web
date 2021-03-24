<template>
    <treeselect v-model="v" :multiple="false" :options="options"  @input="change"  />
</template>

<script>

  import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import { product } from '../../api/product.js'

export default {
    name:"ProductSelect",
    components: { Treeselect },
    props:{
        value:Number,
        productId:Number,
    },
    watch:{
        productId:{
            handler:function(){
                this.refresh();
            }
        }
    },
    data(){
        return {
            v:0,
            options:[
            ]
        }
    },
    mounted(){
        var _this=this;
        this.v=this.value
       
    },
    methods:{
        refresh(){
            console.log("获取全部版本")
            var _this=this;
            product.allVersion({
            id:this.productId
            }).then(res=>{
                _this.options=res.data;
            })
        },
        change(v){
            this.$emit("input",v);
        }
    }
}
</script>