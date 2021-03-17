<template>
  <b-row class="mt-2">
      <b-col cols="3" v-for="(ctr,i) in  form.product.spec.metric" :key="i">
        <b-card :title="ctr.name" >
          <b-card-text>{{ctr.desc}}</b-card-text>
          <ChartLine />
        </b-card>
      </b-col>
  </b-row>
</template>

<script>

import ChartLine from "../../../components/chart/ChartLine";

export default {
  name:"Metric",
  components:{
    ChartLine
  },
  data:()=>{
    return {
      datacollection: null,
    }
  },
  props:{
    form:Object
  },
  methods:{
  }
}
</script>

<style scoped>

</style>