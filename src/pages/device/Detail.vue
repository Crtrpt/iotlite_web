<template>
  <b-container fluid>
    <b-row class="mb-2">
      <b-col cols="12">
        <h3>设备信息# {{ form.name }}</h3>
        <p class="small">{{ form.version || null }}</p>
        <p>
          {{ form.description }}
          <b-link class="link" href="javascript:void(0);" v-b-toggle.more>
            {{ visible ? "↑" : "↓" }}</b-link
          >
        </p>
      </b-col>
      <b-col cols="12">
        <Tag v-model="form.tags" />
      </b-col>
      <b-col cols="12">
        <DeviceGroup v-model="form.deviceGroup" />
      </b-col>
    </b-row>

    <b-collapse id="more" class="mt-2" v-model="visible">
      <b-row>
        <b-col cols="8">
          <b-table-simple responsive :bordered="true" :fixed="true">
            <b-tbody>
              <b-tr>
                <b-td variant="light" class="text-right">产品名称:</b-td>
                <b-td>
                  <a
                    class="primary"
                    href="javascript:void(0);"
                    @click="goProduct(form)"
                  >
                    {{ form.product.name }}
                  </a></b-td
                >
                <b-td variant="light" class="text-right">设备名称:</b-td>
                <b-td>{{ form.name }}</b-td>
              </b-tr>
              <b-tr>
                <b-td variant="light" class="text-right">产品序号:</b-td>
                <b-td>{{ form.product.sn }}</b-td>
                <b-td variant="light" class="text-right">设备序号:</b-td>
                <b-td>{{ form.sn }}</b-td>
              </b-tr>
              <b-tr>
                <b-td variant="light" class="text-right">硬件版本:</b-td>
                <b-td>{{ form.hdVersion || "尚未注册" }}</b-td>
                <b-td variant="light" class="text-right">软件版本:</b-td>
                <b-td
                  >{{ form.releaseType }}-{{ form.version || "尚未注册" }}</b-td
                >
              </b-tr>
              <b-tr>
                <b-td variant="light" class="text-right">创建时间:</b-td>
                <b-td>{{ form.createdAt }}</b-td>
                <b-td variant="light" class="text-right">最后活动时间:</b-td>
                <b-td>{{ timestamp2Str(form.snap.lastAt) || "暂无" }}</b-td>
              </b-tr>
              <b-tr v-if="form.proxy != null">
                <b-td variant="light" class="text-right">上级设备类型:</b-td>
                <b-td
                  ><a
                    class="primary"
                    href="javascript:void(0);"
                    @click="goProduct(form.proxy)"
                  >
                    {{ form.proxy.product.name }}
                  </a></b-td
                >
                <b-td variant="light" class="text-right">上级设备序号:</b-td>
                <b-td
                  ><a
                    class="primary"
                    href="javascript:void(0);"
                    @click="goDevice(form.proxy)"
                    >{{ form.proxy.sn }}</a
                  >
                </b-td>
              </b-tr>

              <b-tr>
                <b-td variant="light" class="text-right">更新策略:</b-td>
                <b-td> {{ form.updateStrategy }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>
    </b-collapse>
    <b-row>
      <b-col>
        <b-nav tabs>
          <b-nav-item to="base" active-class="active">基础信息</b-nav-item>
          <b-nav-item
            to="model"
            active-class="active"
            v-if="form.releaseType == 'Alpha'"
            >物模型</b-nav-item
          >
          <b-nav-item to="control" active-class="active">设备控制</b-nav-item>
          <b-nav-item to="metric" active-class="active">数据指标</b-nav-item>
          <b-nav-item
            to="log"
            active-class="active"
            v-if="form.releaseType == 'Alpha'"
            >设备日志</b-nav-item
          >
          <b-nav-item to="map" active-class="active">设备位置</b-nav-item>
          <b-nav-item to="subdevice" active-class="active">子设备</b-nav-item>
          <b-nav-item
            to="debug"
            active-class="active"
            v-if="form.releaseType == 'Alpha'"
            >设备调试</b-nav-item
          >
          <b-nav-item
            to="hook"
            active-class="active"
            v-if="form.releaseType == 'Alpha'"
            >消息推送</b-nav-item
          >
          <b-nav-item to="setting" active-class="active">设置</b-nav-item>
        </b-nav>
        <router-view
          class="content"
          :form="form"
          :type="'device'"
        ></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { device } from "../../api/device";
import Tag from "../../components/tags/Tag";
import DeviceGroup from "../../components/tags/DeviceGroup";
import mqttClient from "../../api/mqttClient";
import eventHub from "../../api/eventhub";
export default {
  name: "deviceDetail",
  components: {
    Tag,
    DeviceGroup,
  },
  destroyed() {
    var _this = this;
    mqttClient.unsubscribe(_this.topic, (err) => {
      console.log("取消订阅成功: " + _this.topic);
    });
    //取消事件订阅
    eventHub.off(_this.eventSource, (e) => {});
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    goProduct(device) {
      this.$router.push({
        name: "productDetail",
        params: { sn: device.product.sn },
      });
    },
    goDevice(device) {
      this.$router.push({ name: "deviceDetail", params: { id: device.id } });
    },
    getInfo() {
      var _this = this;
      console.log(this.$route.params.id);
      device
        .info({
          id: this.form.id,
        })
        .then((res) => {
          _this.form = res.data;

          mqttClient.subscribe(_this.topic, (err) => {
            eventHub.on(_this.eventSource, (e) => {
              var msg = JSON.parse(e);

              if (msg.action === "property") {
                for (const p in msg.payload) {
                  _this.form.snap[p] = msg.payload[p];
                }
              }
            });
          });
        });
    },
  },
  computed: {
    topic() {
      return "/device/" + this.form.product.sn + "/" + this.form.sn + "/" + "#";
    },
    eventSource() {
      return "/device/" + this.form.product.sn + "/" + this.form.sn + "/";
    },
  },
  data() {
    return {
      visible: false,
      form: {
        id: 0 || this.$route.params.id,
        product: {},
        snap: {},
      },
      list: [],
    };
  },
  watch: {
    "$route.path": function(newV, oldV) {
      console.log("获取新数据");
      this.form.id = this.$route.params.id;
      this.getInfo();
    },
  },
};
</script>

<style scoped></style>
