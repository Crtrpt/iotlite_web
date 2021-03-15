<template>
  <b-row class="mt-2">
      <b-col cols="3" v-for="(ctr,i) in  form.product.spec.metric" :key="i">
        <b-card :title="ctr.name" >
          <b-card-text>{{ctr.desc}}</b-card-text>
           <svg  id="text" ref="barContainer" style="height:200px;width:100%" ></svg>
        </b-card>
      </b-col>
  </b-row>
</template>

<script>

import * as d3 from "d3";

export default {
  name:"Metric",
  components:{
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
  },
  mounted(){


    var data= [];

    var selection =d3.select(this.$refs.barContainer[0]);
    console.log(selection);
    var height=this.$refs.barContainer[0].getClientRects()[0].height;
    var width=this.$refs.barContainer[0].getClientRects()[0].width;
    var left=this.$refs.barContainer[0].getClientRects()[0].left;

    var line = d3.line()
                .x(function(d,i) { return width-(data.length-i)*20 })
                .y(function(d) { return height-40-d; })
    selection
      .append("path")
      .attr("class","data1")
      .style('stroke-width', 2)
      .style('fill-opacity',0)
      .style('stroke', '#B35BF0')


    setInterval(() => {
      var left1=document.getElementsByClassName("data1")[0].getClientRects()[0].left
      if(left1<left){
        
        data.shift();
      }
      data.push(parseInt(Math.random(50)*50));
      //重新绘制
      selection.selectAll(".data1")
        .data(data)
        .attr('d',line(data))
        .style('stroke-width', 2)
        .style('fill-opacity',0)
        .style('stroke', '#B35BF0');
      
    }, 1000);
  }
}
</script>

<style scoped>

</style>