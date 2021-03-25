<template>
  <div class="master_layout">
    <Header />
      <div class="main-container" id="container">
          <div class="overlay"></div>
          <div class="search-overlay"></div>
         <LeftNav  v-if="showLogin" />
          <div id="content" class="main-content" :style='{
              "marginLeft":showLogin?"212px":"0px"
          }'>
              <div class="layout-px-spacing">
                  <div class="row layout-top-spacing">
                        <router-view  ></router-view>
                  </div>
              </div>
          </div>
      </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header';
import LeftNav from './LeftNav';
import Footer from './Footer';
import SubHeader from './SubHeader.vue';

export default {
  name: 'MasterLayout',
  computed: {
    showLogin(){
       return  this.$store.getters['layout/showLeftMenu']
    }
  },
  components: { Header,Footer,LeftNav,SubHeader},
  data(){
    return {
     
    }
  }
};
</script>

<style scoped>
.master_layout {
  display: flex;
  height: 100vh;
  flex-direction: column;
}



</style>
