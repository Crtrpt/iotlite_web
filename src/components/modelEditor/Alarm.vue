<template>
    <b-tab title="报警">
                   <b-button-group class="mt-2 mb-2">
                        <b-modal ref="new-alarm" title="报警" hide-footer>
                            <b-form>
                              <b-form-group label="名称" description="报警名称" > <b-form-input v-model="curData.name" placeholder="报警名称" required ></b-form-input> </b-form-group>
                              <b-form-group label="描述" description="对报警的描述" > <b-form-input v-model="curData.desc" placeholder="对报警的描述" required ></b-form-input> </b-form-group>

                              <b-form-group label="报警级别" description="报警级别" > <b-form-input v-model="curData.level" placeholder="级别" required ></b-form-input> </b-form-group>

                              <b-form-group label="触发条件" description="触发条件" >
                                 <b-form-textarea v-model="curData.condition" placeholder="触发条件" required ></b-form-textarea> </b-form-group>
                              <b-form-group label="回复条件" description="回复条件" > 
                                <b-form-textarea v-model="curData.resume" placeholder="恢复条件" ></b-form-textarea> </b-form-group>

                              <b-button variant="primary" @click="createNewAlarm">保存</b-button>
                            </b-form>
                        </b-modal>
                        <b-button variant="primary" @click="createAlarm">增加报警</b-button>
                    </b-button-group>
                    <b-row v-for="(p,i) in value" :key="i" class="mt-2">
                            <b-col>{{p.name}}</b-col>
                            <b-col>{{p.desc}}</b-col>
                            <b-col>
                                <b-button-group>
                                    <b-button size="sm" variant="primary" @click="editAlarm(p,i)">编辑</b-button>
                                    <b-button size="sm" variant="outline-primary" @click="removeAlarm(i)">删除</b-button>
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
      createAlarm(){
            this.curData={}
            this.idx=-1
            this.$refs['new-alarm'].show()
        },
        editAlarm(p,i){
            this.curData=p;
            this.idx=i;
            this.$refs['new-alarm'].show()
        },
        removeAlarm(i){
             var v=[];
             this.value.forEach((ele,idx) => {
               if(idx==i){
               }else{
                 v.push(ele)
               }
             });
              this.$emit("input",v)
        },
        createNewAlarm(){
           var v=this.value;
           if(v==null){
             v=[];
           }
           if(this.idx==-1){
                v.push(this.curData);
           }else{
               v[this.idx]=curData;
           }
           this.$emit("input",v)
           this.$refs['new-alarm'].hide()
        },
  }
}
</script>

<style>

</style>