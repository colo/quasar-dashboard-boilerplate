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

        <top-navbar />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      none
      :breakpoint="500"
    >
    <!-- :content-style="{ backgroundColor: '#1e1e2f'}" -->
    <!-- content-class="bg-dark" -->
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/icons" :name="$t('sidebar.icons')" icon="tim-icons icon-atom"/>
        <sidebar-link to="/maps" :name="$t('sidebar.maps')" icon="tim-icons icon-pin"/>
        <sidebar-link to="/notifications" :name="$t('sidebar.notifications')" icon="tim-icons icon-bell-55"/>
        <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/table-list" :name="$t('sidebar.tableList')" icon="tim-icons icon-puzzle-10"/>
        <sidebar-link to="/typography" :name="$t('sidebar.typography')" icon="tim-icons icon-align-center"/>
        <sidebar-link to="/dashboard?enableRTL=true" :name="$t('sidebar.rtlSupport')" icon="tim-icons icon-world"/>
      </template>
    </side-bar>
    </q-drawer>

    <q-page-container>
      <q-page>
        <notifications></notifications>
        <!-- <div class="content animated fadeInUp"> -->
          <!-- <transition name="router-animation"> -->
            <router-view />
          <!-- </transition> -->
        <!-- </div> -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import TopNavbar from '@skins/creativetim/black/layout/dashboard/TopNavbar.vue'
export default {
  name: 'MyLayout',
  components: { TopNavbar },

  data () {
    return {
      leftDrawerOpen: false
      // miniState: true
    }
  },
  methods: {
    openURL
  }
}
</script>
<style src="@skins/flatlogic/lightblue/components/Layout/Layout.scss" lang="scss" />
