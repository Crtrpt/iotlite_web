<template>
     <b-row class="mt-2">
      <b-col cols="3" v-for="(ctr,i) in  form.spec.property" :key="i">
        <b-card :title="ctr.desc" titleClass="a11" class="mb-2" >
          <b-card-text >{{ctr.name}}:
             <b-tooltip :target="'property-'+ctr.name" variant="danger">期望:{{ctr.expect}}</b-tooltip>
             <b-link  :id="'property-'+ctr.name" :class="{
               'text-success':ctr.expect==ctr.value,
               'text-danger':ctr.expect!=ctr.value,
             }">{{form.snap[ctr.name]||ctr.value||'null'}}</b-link>
              {{ctr.unit||'unit'}}

            <b-link  :id="'last_at-'+ctr.name" ></b-link>
             </b-card-text>
             <template #footer>
                <b-icon  icon="clock-history"></b-icon> &nbsp;{{timestamp2Str(form.snap[ctr.name+":last_at"])||"暂无"}}
                <a  v-b-tooltip.hover title="Get the latest data" v-if="ctr.active==1">
                <b-icon   icon="arrow-clockwise"></b-icon>
                </a>
             </template>
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
};
</script>

<style scoped>

</style>