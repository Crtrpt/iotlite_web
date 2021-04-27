<template>
    <div class="mt-1">
    <b-row>
      <b-col cols="6">
        <b-card title="基本信息" tag="article" class="mt-2 mb-2">
          <b-card-text>
            <form>
              <b-form-group description="显示名称">
                <b-input v-model="form.name" placeholder="名称"></b-input>
              </b-form-group>
              <b-form-group description="显示的用户名称">
                <b-input
                  v-model="form.description"
                  placeholder="用户名称"
                ></b-input>
              </b-form-group>
            </form>
          </b-card-text>
          <b-button variant="primary" @click="saveBase">保存</b-button>
        </b-card>

        <b-card title="产品可见" tag="article" class="mb-2">
          <b-card-text>
            <b-form-radio-group
              v-model="access"
              :options="options"
              name="radio-validation"
            >
            </b-form-radio-group>
          </b-card-text>
          <b-button variant="primary" @click="saveAccess">保存</b-button>
        </b-card>

        <b-form> </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { user } from "../../api/user";
export default {
  name: "Profile",
  props: {
    form: Object,
  },
  data() {
    return {
      form:{

      }
    };
  },
};
</script>
