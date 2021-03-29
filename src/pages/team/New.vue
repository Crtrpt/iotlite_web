<template>
  <div>
    <b-modal ref="newTeam" id="new_team" title="团队" hide-footer>
        <form>
          <b-form-group label="团队名称">
            <b-input v-model="form.name"></b-input>
          </b-form-group>
          <b-form-group label="团队介绍">
             <b-input v-model="form.description"></b-input>
          </b-form-group>
          <b-button @click="save">保存</b-button>
        </form>
    </b-modal>
    <a v-b-modal.new_team href="javascript:void(0);">创建团队</a>
  </div>
</template>

<script>
import {team} from "../../api/team.js";
export default {
    name:"NewTeam",
    data(){
        return {
            form:{}
        };
    },
    methods:{
        save(){
            var _this=this;
            team.save(this.form).then(res=>{
                if(res.code==0){
                    _this.$bvModal.msgBoxOk("创建成功");
                    _this.$emit("refresh");
                    this.$refs['newTeam'].hide();
                }else{
                    _this.$bvModal.msgBoxOk(res.msg);
                    _this.$emit("refresh");
                }
            });
        }
    }
};
</script>