<template>
  <div class="mt-1 mx-1">
      <b-row>
        <b-col cols="12" >
            环境变量
        </b-col>
      </b-row>
  </div>
</template>

<script>

import {product} from "../../../api/product"
import {device} from "../../../api/device"
export default {
  name:"Map",
  props:{
    form:Object
  },
  data(){
    return {
      map:null,
      layerContrl:null,
      productLayer:{

      }
    }
  },
  watch:{
    "form.fence":{
      handler(){
         this.renderFence()
      },
      deep:true
    }
  },
  methods:{   
    init(){ 


    }
  },

  mounted() {
     this.init();
  }
}
</script>

<style scoped>

</style>