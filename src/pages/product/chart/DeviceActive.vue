<template>
      <canvas ref="chart"  height="200"></canvas>
</template>
<script>

import Chart from 'chart.js';
export default {
  name:"DeviceActive",
  props:{
    productId:Number
  },
  components: {
    
  },
  data () {
    return {

    }
  },
  mounted(){
    var ctx = this.$refs.chart;
    console.log(this.$refs);
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['v0.0.1', 'v0.0.2',"v0.0.3","v0.0.4","v0.0.5","v0.0.6","v0.0.7"],
            datasets: [
              {
                label: '激活',
                data: [100, 2000,1800,200,3000,400,500],
              },            
            ]
        },
         options:{
          responsive: false,
        }
    });
  },
}
</script>
