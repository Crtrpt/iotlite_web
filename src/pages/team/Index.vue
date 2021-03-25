<template>
  <b-container fluid>
  <b-row class="mb-2">
    <b-col cols="12">
      <h3>我的团队</h3>
    </b-col>
   
  </b-row>
  <b-row>
    <b-col>
      <b-nav tabs>
        <b-nav-item to="contain" active-class="active">包含我的团队</b-nav-item>
        <b-nav-item to="created" >我创建的团队</b-nav-item>
      </b-nav>
      <router-view  class="content" ></router-view>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import {product} from "../../api/product"
import Tag from "../../components/tags/Tag"
export default {
  name:"ProductDetail",
 
  components:{
    Tag
  },
  mounted(){
    this.getInfo()
  },
  methods:{
    copy(){
      console.log("复制")
    },
    refreshProductKey(){
     product.refreshProductKey({productSn:this.form.sn}).then(res=>{
       console.log("更新完成")
     })
    },
    changeTags(payload){
      var _this=this;
      product.changeTags({
        productSn:this.form.sn,
        tags:payload
      }).then(res=>{
      })
    },
    getInfo(){
      var _this=this;
      product.info({
        id:this.form.id
      }).then(res=>{
        _this.form=res.data
      })
    }
  },
  data(){
    return {
      visible:false,
      form:{
        id:0||this.$route.params.id,
      },
      list:[
        {
          id:"",
          name:"燃气",
          description:"CQ2010"
        },
        {
          id:"",
          name:"烟感",
          description:"CQ2010"
        },
        
      ],
    }
  }
}
</script>

<style scoped>

</style>