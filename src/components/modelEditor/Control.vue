<template>
    <b-tab title="控制">
                   <b-button-group class="mt-2 mb-2">
                        <b-modal ref="new-control" title="控制" hide-footer>
                            <b-form>
                              <b-form-group label="名称" description="控制名称" > <b-form-input v-model="curData.name" placeholder="属性名称" required ></b-form-input> </b-form-group>
                              <b-form-group label="描述" description="对控制的描述" > <b-form-input v-model="curData.desc" placeholder="描述" required ></b-form-input> </b-form-group>

                              <b-form-group label="执行的操作" description="执行的操作" > 
                                <b-form-textarea v-model="curData.action" placeholder="执行的操作" required >
                                  </b-form-textarea> </b-form-group>
                              <b-button variant="primary" @click="createNewControl">保存</b-button>
                            </b-form>
                        </b-modal>
                        <b-button variant="primary" @click="createControl">增加控制</b-button>
                    </b-button-group>
                    <b-row v-for="(p,i) in value" :key="i" class="mt-2">
                            <b-col>{{p.name}}</b-col>
                            <b-col>{{p.desc}}</b-col>
                            <b-col>
                                <b-button-group>
                                    <b-button size="sm" variant="primary" @click="editControl(p,i)">编辑</b-button>
                                    <b-button size="sm" variant="outline-primary" @click="removeControl(i)">删除</b-button>
                                </b-button-group>
                            </b-col>
                    </b-row>
  </b-tab>
</template>

<script>
export default {
  name:"Control",
  props:{
    value:Array,
  },
  data(){
    return {
          curData:{},
          idx:-1,
    }
  },
  methods:{
      createControl(){
            this.curData={}
            this.idx=-1
            this.$refs['new-control'].show()
        },
        editControl(p,i){
            this.curData=p;
            this.idx=i;
            this.$refs['new-control'].show()
        },
        removeControl(i){
             var v=[];
             this.value.forEach((ele,idx) => {
               if(idx==i){
               }else{
                 v.push(ele)
               }
             });
              this.$emit("input",v)
        },
        createNewControl(){
           var v=this.value;
           if(v==null){
             v=[];
           }
           if(this.idx==-1){
                v.push(this.curData);
           }else{
               v[this.idx]=this.curData;
           }
           this.$emit("input",v)
           this.$refs['new-control'].hide()
        },
  }
}
</script>

<style>

</style>