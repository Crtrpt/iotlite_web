<template>
  <b-container fluid>
  <b-row class="mb-2">
    <b-col cols="12">
      <h3>团队详情# {{form.name}}</h3>
      <p>{{form.description}} </p>
    </b-col>
  </b-row>
  <b-collapse id="more" class="mt-2"  v-model="visible">
  <b-row >
         <b-col cols="6">
           <b-table-simple  responsive :bordered="true" :fixed=true>
                  <b-tbody>
                    <b-tr>
                      <b-td  variant="light" class="text-right">设备名称:</b-td>
                      <b-td>{{form.name}}</b-td>
                       <b-td  variant="light" class="text-right">序号:</b-td>
                      <b-td>{{form.sn}}</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td  variant="light" class="text-right">认证方式:</b-td>
                      <b-td>{{form.deviceCert}}</b-td>
                      <b-td  variant="light" class="text-right">产品key:</b-td>
                      <b-td>{{form.secKey}} | <a href="javascript:void(0)" @click="copy">复制</a> | <a href="javascript:void(0)" @click="refreshTeamKey">重新生成</a></b-td>
                    </b-tr>
                    <b-tr>
                      <b-td  variant="light" class="text-right">注册方式:</b-td>
                      <b-td>{{form.discover}}</b-td>
                    </b-tr>
                     <b-tr>
                      <b-td  variant="light" class="text-right">设备数量:</b-td>
                      <b-td>{{form.deviceCount||0}}</b-td>
                    </b-tr>
                  </b-tbody>
                 
              </b-table-simple>
    </b-col>
  </b-row>
  </b-collapse>
  <b-row>
    <b-col>
      <b-nav tabs>
        <b-nav-item to="member"  active-class="active">成员</b-nav-item>
        <b-nav-item to="setting"  active-class="active"  >设置</b-nav-item>
      </b-nav>
      <router-view  class="content" :form=form  :type="'team'"
        @refresh=getInfo
      ></router-view>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import {team} from "../../api/team";

export default {
    name:"TeamDetail",
 
    components:{
 
    },
    mounted(){
        this.getInfo();
    },
    methods:{
        copy(){
            console.log("复制");
        },
        refreshTeamKey(){
            team.refreshTeamKey({teamSn:this.form.sn}).then(res=>{
                console.log("更新完成");
            });
        },
        changeTags(payload){
            var _this=this;
            team.changeTags({
                teamSn:this.form.sn,
                tags:payload
            }).then(res=>{
            });
        },
        getInfo(){
            var _this=this;
            team.info({
                sn:this.form.sn
            }).then(res=>{
                _this.form=res.data;
            });
        }
    },
    data(){
        return {
            visible:false,
            form:{
                sn:0||this.$route.params.sn,
            },
            list:[        
            ],
        };
    }
};
</script>

<style scoped>

</style>