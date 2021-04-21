<template>
  <div class="auth">
    <div class="login form">
      <b-row>
        <b-col cols="12">
          <b-card>
            <template #header>
              <h3>找回密码</h3>
            </template>
            <b-form>
              <b-form-group
                label="邮箱:"
                description="注册的时候使用的邮箱,点击确认后 我们会给您发送验证码"
              >
                <b-input-group>
                  <b-input v-model="form.email" />
                  <template #append>
                    <b-button variant="primary" @click="confirmEmail"
                      >确认</b-button
                    >
                  </template>
                </b-input-group>
              </b-form-group>

              <b-form-group
                label="验证码:"
                description="我们会发送确认邮件到您的邮箱"
              >
                <b-input v-model="form.code" />
              </b-form-group>
              <b-form-group label="新密码:" description="登录密码(必填)">
                <b-input v-model="help.password" type="password" />
              </b-form-group>

              <b-row>
                <b-col>
                  <b-button-group class="float-right">
                    <b-button block @click="onSubmit" variant="primary"
                      >确认</b-button
                    >
                  </b-button-group>
                </b-col>
              </b-row>
            </b-form>

            <template #footer>
              <b-row>
                <b-col>
                  <b-link @click="$router.push({ name: 'login' })">
                    收到确认邮件 去登录 →</b-link
                  ></b-col
                >
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
      msg: "",
      help: {
        password: process.env.VUE_APP_USER_PASSWORD,
      },
      form: {
        password: null,
      },
    };
  },
  methods: {
    confirmEmail() {
      var _this = this;
      auth.confirmEmail(this.form).then((res) => {
        if (res.code === 0) {
          _this.$bvModal.msgBoxOk("确认找回邮件已经发往您的邮箱请注意查收");
        } else {
          _this.$bvModal.msgBoxOk(res.msg);
        }
      });
    },
    onSubmit(evt) {
      var _this = this;
      evt.preventDefault();
      this.form.password = sha256(this.help.password);

      auth.resetpassword(this.form).then((res) => {
        if (res.code === 0) {
          _this.$router.push({ name: "login" });
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
