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

                <b-form-select v-model="hook.protocol" :options="options"></b-form-select>
                </b-form-group>
                <div v-if="hook.protocol=='http'">
                    <b-form-group
                        label="请求url地址:"
                        description="请输入请求的url的地址 例如 http://127.0.0.1:80/push"
                      >
                    <b-form-input
                      v-model="hook.url"
                      type="url"
                      placeholder="请输入要推送的url的地址"
                      required
                    ></b-form-input>
                    </b-form-group>
                </div>

                <div v-if="hook.protocol=='mqtt'">
                    <b-form-group
                        label="broker地址:"
                        description="请输入请求的url的地址 例如 mqtt://127.0.0.1:1883"
                      >
                    <b-form-input
                      v-model="hook.broker"
                      placeholder="请输入要推送的broker地址"
                      required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="topic:"
                        description="mqtt推送的topic"
                      >
                    <b-form-input
                      v-model="hook.topic"
                      placeholder="输入mqtt推送的topic"
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="clientId:"
                        description="mqtt clientId"
                      >
                    <b-form-input
                      v-model="hook.clientId"
                      placeholder="请输入要clientId"

                    ></b-form-input>
                    </b-form-group>
                      <b-form-group
                        label="username:"
                        description="mqtt username"
                      >
                    <b-form-input
                      v-model="hook.username"
                      placeholder="输入mqtt的用户名"
                    ></b-form-input>
                    </b-form-group>

                   
                      <b-form-group
                        label="password:"
                        description="mqtt password"
                      >
                    <b-form-input
                      v-model="hook.password"
                      placeholder="输入mqtt的密码"
                    ></b-form-input>
                    </b-form-group>
                </div>

                <b-button @click="save()" variant="primary">保存</b-button>
                <b-button  @click="test()" class="ml-2" variant="danger">测试</b-button>
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
  props:{
    form:Object,
    type:String,
  },
  computed:{
    hookKey(){
      switch (this.type) {
        case "device":
          return "/"+this.form.product.sn+"/"+this.form.sn
        case "product":
           return "/"+this.form.product.sn;
        case "group":
          return "/"+this.form.id;
        default:
          break;
      }
    }
  },
  data(){
    return {
      hook:this.form.hook||{},
      options:[
          { value: null, text: '请选择推送' },
          { value: 'http', text: 'http推送' },
          { value: 'mqtt', text: 'mqtt 推送' },
      ]
    }
  },
  methods:{
    save(){
      console.log(this.hook)
    },
    test(){

    }
  }
}
</script>