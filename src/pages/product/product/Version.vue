<template>
  <div>
     <b-row>
      <Toolbar :form=form :query=query @refresh="getList"/>
     </b-row>
      <b-table hover :items="items" :fields="fields"
      @row-contextmenu="(item, index, event)=>{event.preventDefault();$refs.menu.open(event,item)}" 
      @row-dblclicked="gotoVersion"
      selectable>
          <template #cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
          
            <template v-slot:cell(version)="data">
               {{data.item.releaseType}}{{data.item.version}}
          </template>
           <template v-slot:cell(createdAt)="data">
                  {{timestamp2Str(data.item.createdAt)||"暂无"}}
          </template>
          
      </b-table>
        <div style="box-sizing: border-box;">
        <vue-context ref="menu" v-slot="{ data }">
              <li>  <a href="javascript:void(0);" @click="gotoMap(data)" >关于</a> </li>
        </vue-context>
      </div>
      <b-row class="mt-2" v-if="helper.total>10">
          <b-col> <b-pagination 
            v-model="query.pageNum"
            :per-page="query.pageSize"
            :total-rows="helper.total"
          ></b-pagination></b-col>
      </b-row>
  </div>
</template>

<script>
import VueContext from 'vue-context';
import {product} from "../../../api/product";
import {device} from "../../../api/device";
import Tag from '../../../components/tags/Tag.vue';
import Toolbar from "./version/VerToolBar.vue";
import DeviceGroup from '../../../components/tags/DeviceGroup.vue';

import 'vue-context/dist/css/vue-context.css';

export default {
    name:"Device",
    components:{Toolbar,Tag,VueContext,DeviceGroup},
    props:{
        form:Object
    },
    data(){
        return {
            helper:{total:0},
            query:{
                date:{},
                words:"",
                pageNum:1,
                pageSize:10,
            },

            fields: [
                {
                    key: 'createdAt',
                    label: '创建时间',
                    sortable: true
                },
                {
                    key: 'version',
                    label: '软件版本',
                    sortable: true
                },
                {
                    key: 'minHdVersion',
                    label: '硬件版本',
                    sortable: true
                },
                {
                    key: 'verDescription',
                    label: '更新内容简介',
                    sortable: true
                },
                {
                    key: 'deviceCount',
                    label: '设备数量',
                    sortable: true
                },
                {
                    key: 'startAt',
                    label: '支持开始时间',
                    sortable: true
                },
                {
                    key: 'endAt',
                    label: '支持结束时间',
                    sortable: true
                },
                {
                    key: 'op',
                    label: '操作',
                    sortable: true
                }
            ],
            items: [
         
            ]
        };
    },
    watch:{
        "form":{
            handler(){
                this.getList();
            },
            deep:true
        },
        "query":{
            handler(){
                this.getList();
            },
            deep:true
        }
    },
    mounted(){
        this.getList();
    },
    methods:{
        gotoVersion(item,idx,e){
            console.log(item);
            this.$router.push({name: 'version',params: { sn: this.form.sn ,version:item.version }});
        },
        getList(){
            var _this=this;
            product.versionList(Object.assign(
                {
                    productSn:this.form.sn,
                },this.query
            )).then((res)=>{
                _this.items=res.data.list;
                _this.helper.total=res.data.total;
            });
        },
    }
};
</script>

<style scoped>

</style>