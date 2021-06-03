<template>
<b-container fluid>
    <b-row class="mb-2">
      <b-col cols="12">
        <h3>我的信息</h3>
      </b-col>
    </b-row>
    <div class="mt-1">
    <b-row>
      <b-col cols="6">
        <b-card title="基本信息" tag="article" class="mt-2 mb-2">
          <b-row>
          <b-col cols="8" >
          <b-card-text>
            <form>
              <b-form-group description="显示名称">
                <b-input v-model="form.name" placeholder="名称"></b-input>
              </b-form-group>
            </form>
          </b-card-text>
          </b-col>

           <b-col cols="4" style="text-align:center">
                  <b-form-group description="我的头像">
                    <b-avatar
                      style="cursor: pointer;"
                      id="pick-avatar"
                      :src="form.icon"
                      size="4rem"
                      variant="light"
                      icon="app"
                    ></b-avatar>
                    <avatar-cropper
                      @uploading="handleUploading"
                      @uploaded="handleUploaded"
                      trigger="#pick-avatar"
                      :upload-url="this.helper.api + '/user/image'"
                    /> </b-form-group
                ></b-col>
          </b-row>
          <b-button variant="primary" @click="saveBase">保存</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</b-container>
</template>

<script>
import { user } from "../../api/user";
import AvatarCropper from "vue-avatar-cropper";
export default {
  components:{
    AvatarCropper
  },
  name: "Profile",
  data() {
    return {
      helper: {
        api: process.env.VUE_APP_API,
      },
      form:{
        name:"",
        description:""
      }
    };
  },
  methods:{
    handleUploading(form, xhr) {
      form.append("id", this.form.id);
    },
    handleUploaded(resp) {
      this.$emit("refresh", {});
    },
    saveBase(){
      user.saveProfile(this.form).then(res=>{
        if(res.code===0){
          console.log("保存成功");
        }
      });
    }
  },
  created(){
    var _this=this;
    user.getProfile().then(res=>{
      if(res.code===0){
        _this.form=res.data;
      }
    });
  }
};
</script>
