<template>
   <b-col cols="12" class="mt-2 mb-2">
                  <b-button-toolbar>
                    <b-modal id="new" ref="new" title="发布新版本" hide-footer >
                        <NewVersion  @close="closeNew" :productSn=form.sn />
                    </b-modal>
                      <b-button size="sm" variant="primary" v-b-modal.new  >发布新版本</b-button>
                    <b-button-group  class="mr-2 ml-2">
                      <b-form-input class="tool_input" v-model="query.words" placeholder="搜索"></b-form-input>
                    </b-button-group>

                    <!-- <b-button-group class="mr-2 ">
                        <DateTimePicker  v-model="query.date" />
                    </b-button-group> -->

                     <b-button-group class="mr-2">
                      <b-button size="sm" variant="primary" @click="$emit('refresh',{})" >刷新</b-button>
                    </b-button-group>

                  </b-button-toolbar>
  </b-col>
</template>
<script>

import NewVersion from "./NewVersion";
export default {
  props:{
    form:Object,
    query:Object
  },
  components:{NewVersion},
  name:"Toolbar",
  methods:{
    closeNew(){

    }
  }
}
</script>