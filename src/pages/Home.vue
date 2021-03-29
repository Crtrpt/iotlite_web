<template>
  <b-container fluid class="dashboard">
    <b-row>
      loading ...
    </b-row>
  </b-container>
</template>
<script>

import 'gridstack/dist/gridstack.min.css';
import Vue from 'vue';
import GridStack from "../../node_modules/gridstack/dist/gridstack-h5";

export default {
    name: 'Dashboard',
    data(){
        return  {
            grid: undefined,
            items:[],
        };
    },
    watch: {

        info: function (newVal, oldVal) {
            if (newVal.length === 0) return;

            window.clearTimeout(this.timerId);
            this.timerId = window.setTimeout(() => {
                this.info = "";
            }, 2000);
        },
    },
    mounted: function () {
        this.grid = GridStack.init({
        });
        this.grid.load(this.items);
        this.grid.on("dragstop", (event, element) => {
            console.log("更新");
        });
        this.grid.on('change', function(e,i) {
            console.log("更新存储");
        });
    },
    methods: {
        addNewWidget: function () {
          
        },
    },
    components: {  },
};
</script>

<style >
  .dashboard {
    padding: 0;
    margin: 0;
  }
  .grid-stack { background: #FAFAD2; }
  .grid-stack-item-content { background-color: #18BC9C; }
</style>
