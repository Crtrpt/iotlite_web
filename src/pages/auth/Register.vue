<template>
  <div class="auth">
    <div class="login form mt-4">
      <b-row>
        <b-col cols="12">
          <b-card>
            <template #header>
              <h3>注册</h3>
            </template>
            <b-form>
              <b-row>
                <b-col>
                  <b-form-group label="账户:" description="登录账户信息(必填)">
                    <b-input v-model="form.account" /> </b-form-group
                ></b-col>
                <b-col>
                  <b-form-group
                    label="用户名:"
                    description="显示的用户名(必填)"
                  >
                    <b-input v-model="form.username" /> </b-form-group
                ></b-col>
              </b-row>

              <b-form-group label="邮箱:" description="找回密码的时候用到">
                <b-input-group>
                  <b-form-input v-model="form.email"></b-form-input>
                </b-input-group>
              </b-form-group>

              <b-form-group label="密码:" description="登录密码(必填)">
                <b-input v-model="help.password" type="password" />
              </b-form-group>
              <b-form-group>
                <b-form-checkbox type="checkbox" v-model="form.check"
                  >同意
                  <b-link href="/agreement.txt"
                    >许可协议</b-link
                  ></b-form-checkbox
                >
              </b-form-group>
              <b-form-group class="float-right">
                <b-button
                  block
                  @click="onSubmit"
                  variant="primary"
                  :disabled="!!!form.check"
                  >注册</b-button
                >
              </b-form-group>
            </b-form>

            <template #footer>
              <b-link @click="$router.push({ name: 'login' })">
                有账号了 去登录 →</b-link
              >
            </template>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { auth } from "../../api/auth";
import { sha256 } from "js-sha256";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      open: true,
      msg: "",
      help: {
        password: process.env.VUE_APP_USER_PASSWORD,
      },
      form: {
        account: process.env.VUE_APP_USER_NAME,
        password: null,
        check: 0,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      var _this = this;
      evt.preventDefault();
      this.form.password = sha256(this.help.password);
      auth.register(this.form).then((res) => {
        if (res.code === 0) {
          _this.$bvModal.msgBoxOk("注册成功");
        } else {
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
.auth {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  width: 25vw;
}
.column {
  max-width: 450px;
}
</style>
