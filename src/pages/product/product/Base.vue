<template>
  <b-row class="mt-2">
      <b-col cols="6">
       <b-row>
          <b-col>
            <b-row>
              <b-col><h5>产品信息</h5></b-col>
            </b-row>
            <b-row>
              <b-col>
           
              </b-col>
          </b-row>
          </b-col> 
          
        </b-row>
      
      </b-col>
  </b-row>
</template>

<script>
import {product} from "../../../api/product";
export default {
    name:"Base",
    props:{
        form:Object
    },
    methods:{
  
    }
};
</script>

<style scoped>

</style>