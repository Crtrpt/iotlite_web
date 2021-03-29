<template>
 
<div class="form mt-4" >
    <b-row>
      <b-col cols="4" offset="4">
        <b-card>
        <template #header>
           <h2>iotlite-登录</h2>
        </template>
          <b-form>
          <b-form-group></b-form-group>
          <b-form-group label="账户" description="登录账户信息(必填)">
            <b-input v-model="form.account"/>
          </b-form-group>
           <b-form-group label="密码"  description="登录密码(必填)">
            <b-input v-model="help.password" type="password"/>
          </b-form-group>

          <b-form-group >
            <b-form-checkbox type="checkbox" v-model="form.check" >同意许可协议</b-form-checkbox>
          </b-form-group>
          <b-form-group>
            <b-button block  @click="onSubmit" variant="primary" :disabled=!!!form.check>登录</b-button>
          </b-form-group>
        </b-form>

        <template #footer>
            <b-link @click="$router.push({name:'register'})" > 去注册</b-link>
        </template>
        </b-card>
      </b-col>
    </b-row>
</div>
</template>

<script>

import { auth } from '../../api/auth';
import { sha256 } from 'js-sha256';
export default {
    name: 'Auth',
    components: { },
    data(){
        return {
            msg: '',
            help: {
                password: process.env.VUE_APP_USER_PASSWORD,
            },
            form: {
                account: process.env.VUE_APP_USER_NAME,
                password: null,
                check:0,
            },
        };
    },
    methods: {
        onSubmit(evt) {
            var _this=this;
            evt.preventDefault();
            this.form.password = sha256(this.help.password);
            // this.form.password = this.help.password;
            auth.login(this.form).then((res) => {
                if(res.code==0){
                    window.localStorage.token=res.data.token;
                    _this.$store.commit('auth/login',res);
                    _this.$router.push({name:"product"});
                }else{
                    _this.$bvModal.msgBoxOk(res.msg);
                }

            });
            console.log(this.form);
        },
        onReset(evt) {
            evt.preventDefault();
        },
    },
};
</script>

<style scoped>
   .column {
      max-width: 450px;
    }
</style>
