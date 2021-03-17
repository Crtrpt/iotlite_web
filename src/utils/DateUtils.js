
import * as d3 from "d3";
var timeFormat = d3.timeFormat("%Y-%m-%d %H:%S:%M");
const DateUtils= (Vue, options) =>{
  Vue.prototype.timestamp2Str = function (d){

  
    return timeFormat(new Date( parseInt(d)));
  };
};

export default DateUtils;