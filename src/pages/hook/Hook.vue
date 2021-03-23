<template>
    <div class="mt-2 mb-2">
      <h4>
        推送
      </h4>

      <b-tabs >
        <b-tab title="推送列表">
          <b-row>
            <b-col cols=3>
              <b-form >
                <b-form-group
                    label="推送方式:"
                    description="请选择推送协议"
                  >
                  {{selected}}
                <b-form-select v-model="form.selected" :options="options"></b-form-select>
                </b-form-group>
                <div v-if="form.selected=='http'">
                    <b-form-group
                        label="请求url地址:"
                        description="请输入请求的url的地址 例如 http://127.0.0.1:80/push"
                      >
                    <b-form-input
                      v-model="form.url"
                      type="url"
                      placeholder="请输入要推送的url的地址"
                      required
                    ></b-form-input>
                    </b-form-group>
                </div>

                <div v-if="form.selected=='mqtt'">
                    <b-form-group
                        label="broker地址:"
                        description="请输入请求的url的地址 例如 mqtt://127.0.0.1:1883"
                      >
                    <b-form-input
                      v-model="form.broker"
                      placeholder="请输入要推送的broker地址"
                      required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="topic:"
                        description="mqtt推送的topic"
                      >
                    <b-form-input
                      v-model="form.topic"
                      placeholder="输入mqtt推送的topic"
                      required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="clientId:"
                        description="mqtt clientId"
                      >
                    <b-form-input
                      v-model="form.clientId"
                      placeholder="请输入要clientId"
                      required
                    ></b-form-input>
                    </b-form-group>
                      <b-form-group
                        label="username:"
                        description="mqtt username"
                      >
                    <b-form-input
                      v-model="form.username"
                      placeholder="输入mqtt的用户名"
                      required
                    ></b-form-input>
                    </b-form-group>

                   
                      <b-form-group
                        label="password:"
                        description="mqtt password"
                      >
                    <b-form-input
                      v-model="form.password"
                      placeholder="输入mqtt的密码"
                      required
                    ></b-form-input>
                    </b-form-group>
                </div>

                <b-button  variant="primary">保存</b-button>
                <b-button  class="ml-2" variant="danger">测试</b-button>
              </b-form>
            </b-col>
          </b-row>
        
        </b-tab>
        <b-tab title="推送日志">
          推送日志
        </b-tab>
      </b-tabs>
    </div>
</template>

<script>
export default {
  name:"Hook",
  data(){
    return {
      form:{
      },
      selected:null,
      options:[
          { value: null, text: '请选择推送' },
          { value: 'http', text: 'http推送' },
          { value: 'mqtt', text: 'mqtt 推送' },
      ]
    }
  }
}
</script>