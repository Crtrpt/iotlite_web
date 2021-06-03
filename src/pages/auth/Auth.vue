<template>
  <div class="auth">
    <div class="login form">
      <b-row>
        <b-col cols="12">
          <b-card>
            <template #header>
              <h3>登录</h3>
            </template>
            <b-form>
              <b-form-group></b-form-group>
              <b-form-group label="账户:" description="登录账户信息(必填)">
                <b-input v-model="form.account" />
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
              <b-row>
                <b-col>
                  <b-form-checkbox
                    v-model="rememberUsername"
                    name="check-button"
                    switch
                  >
                    记住用户名
                  </b-form-checkbox>
                </b-col>
                <b-col>
                  <b-button-group class="float-right">
                    <b-button
                      block
                      @click="onSubmit"
                      variant="primary"
                      :disabled="!!!form.check"
                      >登录</b-button
                    >
                  </b-button-group>
                </b-col>
              </b-row>
            </b-form>

            <template #footer>
              <b-row>
                <b-col>
                  <b-link @click="$router.push({ name: 'register' })">
                    去注册</b-link
                  >
                  |<b-link @click="$router.push({ name: 'forgetpassword' })">
                    找回密码</b-link
                  ></b-col
                >
                <!-- <b-col>
                  <b-button-group class="float-right">
                    <b-form-select
                      size="sm"
                      v-model="selected"
                      :options="options"
                    ></b-form-select>
                  </b-button-group>
                </b-col> -->
              </b-row>
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
  name: "Auth",
  components: {},
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "默认" },
        { value: "zh-cn", text: "中文" },
        { value: "en", text: "English" },
      ],
      msg: "",
      rememberUsername: false,
      help: {
        password: process.env.VUE_APP_USER_PASSWORD,
      },
      form: {
        account: window.localStorage.rememberUsername,
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
      // this.form.password = this.help.password;
      if (this.rememberUsername === true) {
        window.localStorage.rememberUsername = this.form.account;
      }
      auth.login(this.form).then((res) => {
        if (res.code === 0) {
          window.localStorage.token = res.data.token;
          _this.$store.commit("auth/login", res);
          _this.$router.push({ name: "product" });
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
