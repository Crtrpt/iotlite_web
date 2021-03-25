<template>
    <VueCtkDateTimePicker color="#1a1c2d" 
    :button-now-translation="$t('component.now')" 
    :range='true'
    :noLabel="true"
    :label="$t('component.timeSelect')" v-model="value.date" />
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import './date.time.picker.css';
export default {
  name:"DateTimePicker",
  components:{
    VueCtkDateTimePicker
  },
  props:{
    value:Object
  }
}
</script>