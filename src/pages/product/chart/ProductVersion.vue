<template>
  <b-card title="设备在线情况">
    <div>
      设备总数 xx 在线 01 离线 20
    </div>
  </b-card>
</template>

<script>
export default {
  name: "DeviceCount",
  props: {
    productId: Number,
  },
};
</script>
