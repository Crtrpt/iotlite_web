<template>
    <div>
      <b-row>
              <b-col xl="3" lg="4" md="4" sm="6"  v-for="p in items" :key="p.id">
                <b-card   class="mt-2 product_card" >
                    <template>
                      <h5  @click="detail(p)" class="mb-1">{{p.name}}</h5>
                    </template>
                  <b-card-text>
                    {{p.description}} 
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>

        <b-row class="mt-2" v-if="helper.total>10">
          <b-col> <b-pagination  v-model="query.page_num"  :total-rows="helper.total"></b-pagination></b-col>
        </b-row>
    </div>
</template>

<script>
import {team} from "../../../api/team";

export default {
    name:"Team",
    components:{},
    data(){
        return {
            total:0,
            helper:{
                total:0,
            },
            query:{
                date:{},
                organizationId:0,
                words:"",
                pageNum:1,
                pageSize:10,
            },
            items:[        
            ],
        };
    },
    mounted(){
        this.getList();
    },
    methods:{
        getList(){
            var _this=this;
            team.listOfOwner(this.query).then((res)=>{
                _this.items=res.data.list;
                _this.helper.total=res.data.total;
            });
        },
        detail(row){
            this.$router.push({name: 'teamDetail',params: { sn: row.sn }});
        }
    }
};
</script>

<style scoped>
.product_card {
  cursor: pointer;
}
</style>