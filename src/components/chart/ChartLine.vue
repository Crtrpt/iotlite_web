<template>
  <svg id="text" ref="barContainer" style="height:200px;width:100%"></svg>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "ChartLine",
  mounted() {
    var data = [];
    var contextContainer = this.$refs.barContainer;
    var selection = d3.select(this.$refs.barContainer);
    console.log(this.$refs.barContainer);
    var height = this.$refs.barContainer.getClientRects()[0].height;
    var width = this.$refs.barContainer.getClientRects()[0].width;
    var left = this.$refs.barContainer.getClientRects()[0].left;

    var line = d3
      .line()
      .x(function(d, i) {
        return width - (data.length - i) * 20;
      })
      .y(function(d) {
        return height - 40 - d;
      });
    selection
      .append("g")
      .attr("class", "data_metric")
      .append("path")
      .attr("class", "data1")
      .style("stroke-width", 2)
      .style("fill-opacity", 0)
      .style("stroke", "#B35BF0");

    console.log(selection);

    console.log(
      d3
        .select(this.$refs.barContainer)
        .selectAll(".data_metric")
        .nodes()[0]
    );

    setInterval(function() {
      var left1 = selection
        .selectAll(".data_metric")
        .nodes()[0]
        .getClientRects()[0].left;

      if (left1 < left) {
        data.shift();
      }
      data.push(parseInt(Math.random(50) * 50));
      //重新绘制
      selection
        .selectAll(".data1")
        .data(data)
        .attr("d", line(data))
        .style("stroke-width", 2)
        .style("fill-opacity", 0)
        .style("stroke", "#B35BF0");
    }, 1000);
  },
};
</script>
