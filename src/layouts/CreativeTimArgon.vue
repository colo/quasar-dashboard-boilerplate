<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="transparent">
      <q-toolbar class="full-width">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />

        </q-btn>
        <q-space />
        <!-- <q-toolbar-title>
          Quasar App
        </q-toolbar-title> -->

        <!-- <div>Quasar v{{ $q.version }}</div> -->

        <!-- <top-navbar /> -->
        <dashboard-navbar></dashboard-navbar>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      none
      :width="250"
      :breakpoint="500"
    >
    <!-- :content-style="{ backgroundColor: '#1e1e2f'}" -->
    <!-- content-class="bg-dark" -->
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}"/>
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25 text-info', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08 text-pink', path: '/register'}"/>

      </template>
    </side-bar>
    </q-drawer>

    <q-page-container>
      <q-page>
        <notifications></notifications>
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
// import TopNavbar from '@skins/creativetim/black/layout/dashboard/TopNavbar.vue'
import DashboardNavbar from '@skins/creativetim/argon/layout/DashboardNavbar.vue'
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'MyLayout',
  components: { DashboardNavbar, FadeTransition },

  data () {
    return {
      leftDrawerOpen: false,
      sidebarBackground: 'vue' // vue|blue|orange|green|red|primary
      // miniState: true
    }
  },
  methods: {
    openURL
  }
}
</script>
<style src="@skins/flatlogic/lightblue/components/Layout/Layout.scss" lang="scss" />
