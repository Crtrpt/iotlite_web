<template>
  <div class="sidebar-wrapper sidebar-theme">
    <nav id="sidebar">
      <ul class="list-unstyled menu-categories ps ps--active-y">
        <li class="menu">
          <a
            href="javascript:void(0);"
            v-b-toggle.accordion-2
            class="dropdown-toggle"
          >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-cpu"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
              <span>{{ $t("menu.device") }}</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </a>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <ul
              class="collapse submenu list-unstyled show"
              id="app"
              data-parent="#accordionExample"
            >
              <li>
                <router-link :to="{ name: 'product' }">{{
                  $t("menu.product")
                }}</router-link>
                <router-link :to="{ name: 'group' }">{{
                  $t("menu.group")
                }}</router-link>
                <router-link :to="{ name: 'device' }">{{
                  $t("menu.device")
                }}</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  mounted() {},
};
</script>

<style scoped></style>
