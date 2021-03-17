<template>
     <b-row class="mt-2">
      <b-col cols="2" v-for="(ctr,i) in  form.spec.property" :key="i">
        <b-card :title="ctr.desc" titleClass="a11" >
          <b-card-text >{{ctr.name}}:
             <b-tooltip :target="'property-'+ctr.name" variant="danger">期望:{{ctr.expect}}</b-tooltip>
             <b-link  :id="'property-'+ctr.name" :class="{
               'text-success':ctr.expect==ctr.value,
               'text-danger':ctr.expect!=ctr.value,
             }">{{form.snap[ctr.name]||ctr.value||'null'}}</b-link>
             </b-card-text>
        </b-card>
      </b-col>
  </b-row>
</template>

<script>
export default {
  name:"Base",
  props:{
    form:Object
  },
}
</script>

<style scoped>

</style>