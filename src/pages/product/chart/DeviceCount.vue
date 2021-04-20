<template>
  <span>
    <canvas ref="chart" height="120" width="120px"></canvas>
  </span>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "DeviceCount",
  props: {
    productId: Number,
  },
  components: {},
  data() {
    return {};
  },
  mounted() {
    var ctx = this.$refs.chart;
    console.log(this.$refs);
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          },
        ],
      },
      options: {
        responsive: false,
        title: {
          display: true,
          text: "在线/离线 80%",
        },
      },
    });
  },
};
</script>
