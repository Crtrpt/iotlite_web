<template>
  <div>
    <b-row class="mt-2 mb-2">
      <b-col>
        <b-button-toolbar>
          <b-button-group>
            <b-button :variant="!isConnect ? 'primary' : 'outline-primary'" @click="online"
              >上线</b-button
            >
            <b-button :variant="isConnect ? 'primary' : 'outline-primary'" @click="offline"
              >下线</b-button
            >
          </b-button-group>
          <p class="ml-2 mt-2">{{ isConnect ? '设备已经上线' : '设备还没有上线' }}</p>
        </b-button-toolbar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-tabs>
          <b-tab title="属性" active>
            <b-button-group class="mt-2 mb-2">
              <b-button variant="primary" @click="batchSave">批量提交</b-button>
            </b-button-group>
            <b-table-simple hover caption-top responsive>
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>属性</b-th>
                  <b-th>描述</b-th>
                  <b-th>当前值</b-th>
                  <b-th>修改值</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="(p, i) in form.spec.property" :key="i">
                  <b-td>{{ p.name }}</b-td>
                  <b-td>{{ p.desc }}</b-td>
                  <b-td>{{ form.snap[p.name] || 'null' }}</b-td>
                  <b-td style="padding:0px;pading-top:2px;padding-bottom:0px">
                    <b-input-group size="sm">
                      <template #append>
                        <b-button variant="primary" @click="action(p)">修改</b-button>
                      </template>
                      <b-form-input v-model="p.newValue"></b-form-input>
                    </b-input-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-tab>

          <b-tab title="topic">
            <b-form>
              <b-form-group label="Topic:" description="">
                <b-form-input v-model="topic" placeholder="发送的topic"></b-form-input>
              </b-form-group>

              <b-form-group label="Payload:">
                <b-form-textarea
                  style="height:200px"
                  v-model="raw"
                  placeholder="发送的内容"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group>
                <b-button variant="primary" @click="sendRaw">发送 </b-button>
              </b-form-group>
            </b-form>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col cols="6">
        <b-list-group>
          <b-list-group-item v-for="(l, i) in logs" :key="i">
            {{ l }}
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DateTimePicker from '../../../components/date/DateTimePicker'

import mqtt from 'mqtt'
import { device } from '../../../api/device'
import { json } from 'd3-fetch'
export default {
  name: 'Debug',
  components: { DateTimePicker },
  props: {
    form: Object,
  },
  data() {
    return {
      helper: { total: 0 },
      client: null,
      isConnect: false,
      raw_topic: '',
      logs: [],
      raw: '',
    }
  },
  computed: {
    topic() {
      if (this.form.proxy == undefined) {
        return '/default/' + this.form.product.sn + '/' + this.form.sn
      } else {
        return '/default/' + this.form.proxy.product.sn + '/' + this.form.proxy.sn
      }
    },
  },
  methods: {
    online() {
      var _this = this
      _this.logs.push('启动设备')
      var client = (this.client = mqtt.connect(process.env.VUE_APP_MQTT, { port: 4203 }))
      client.on('connect', function() {
        _this.isConnect = true
        _this.logs.push('连接成功')
      })
      client.on('disconnect', function() {
        _this.isConnect = false
        _this.logs.push('断开连接')
      })
      client.on('message', function() {
        console.log(message.toString())
        _this.logs.push('收到消息')
      })
    },
    offline() {
      console.log(this.client)
      this.logs.push('设备下线')
      this.client.end(true)
    },
    action(p) {
      var name = p.name
      var payload = new Map()
      payload[p.name] = p.newValue
      var payload = {
        action: 'property',
        payload: payload,
      }
      payload = JSON.stringify(payload)
      this.logs.push('topic: ' + this.topic + ' payload:' + payload)
      this.client.publish(this.topic, payload)
    },
    batchSave() {
      var payload = new Map()
      this.form.spec.property.forEach((e) => {
        if (e.newValue !== e.value) {
          payload[e.name] = e.newValue
        }
      })
      var payload = {
        action: 'property',
        payload: payload,
      }
      payload = JSON.stringify(payload)
      this.logs.push('topic: ' + this.topic + ' payload:' + payload)
      this.client.publish(this.topic, payload)
    },
    sendRaw() {
      this.logs.push('topic: ' + this.raw_topic + ' payload:' + this.raw)
      this.client.publish(this.topic, this.raw)
    },
  },
}
</script>

<style scoped></style>