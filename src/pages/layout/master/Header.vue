<template>
  <div class="header-container fixed-top">
        <header class="header navbar navbar-expand-sm">

            <ul class="navbar-item theme-brand flex-row  text-center">
                <li class="nav-item theme-text">
                    <a href="/" class="nav-link"> IotLite </a>
                </li>
            </ul>

            <!-- <ul class="navbar-item flex-row ml-md-0 ml-auto">
                <li class="nav-item align-self-center search-animated">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <form class="form-inline search-full form-inline search" role="search">
                        <div class="search-bar">
                            <input type="text" class="form-control search-form-control  ml-lg-auto" placeholder="搜索...">
                        </div>
                    </form>
                </li>
            </ul> -->

            

            <ul class="navbar-item flex-row ml-md-auto">


                 <!-- <b-dropdown 
                  toggle-tag="a"
                  toggle-class="nav-link dropdown-toggle"
                  variant="link"

                  menu-class="dropdown-menu position-absolute"
                  class="nav-item dropdown notification-dropdown">
                    <template #button-content >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h58s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>            
                    </template>
                    <b-dropdown-item class="dropdown-item">消息</b-dropdown-item>
                    <b-dropdown-item class="dropdown-item">消息</b-dropdown-item>
                    <b-dropdown-item class="dropdown-item">消息</b-dropdown-item>
                </b-dropdown> -->

                <b-dropdown 
                  toggle-tag="a"
                  toggle-class="nav-link dropdown-toggle user "
                  variant="link"
                  class="nav-item dropdown user-profile-dropdown ">
                    <template #button-content class="nav-link dropdown-toggle user">
                          <img src="img/profile-16.jpeg" alt="avatar">
                    </template>
                    <b-dropdown-item class="dropdown-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                      退出</b-dropdown-item>
                </b-dropdown>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
  name:"Header"
}
</script>

<style scoped>

</style>