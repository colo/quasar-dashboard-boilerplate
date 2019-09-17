<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="transparent">
      <q-toolbar class="full-width">
        <q-btn
          flat
          dense
          round
          @click="left = !left"
          aria-label="Menu"
        >
          <q-icon name="menu" />

        </q-btn>
        <q-space />
        <!-- <q-toolbar-title>
          Quasar App
        </q-toolbar-title> -->

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <flat-logic-sing-app-helper-helper />
        <flat-logic-sing-app-header-header />
        <!-- <q-btn
          flat
          dense
          round
          @click="right = !right"
          aria-label="Menu"
        >
          <q-icon name="menu" />

        </q-btn> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      show-if-above
      none
      :width="250"
      :breakpoint="500"
      content-class="transparent"
      class="transparent"
    >
    <!-- <q-drawer
        v-model="left"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        content-class="transparent"
      > -->
      <flat-logic-sing-app-sidebar-sidebar />

    </q-drawer>

    <q-drawer
      :value="right" side="right"
      none
      :width="250"
      :breakpoint="500"
      content-class="transparent"
      class="transparent"
    >
      <flat-logic-sing-app-chat-chat />
    </q-drawer>

    <q-page-container>
      <q-page>
      <!-- <div class="content animated fadeInUp">
        <transition name="router-animation">
          <router-view />
        </transition>
      </div> -->
      <!-- <div class="wrap"> -->
        <!-- <Header /> -->

        <v-touch class="content" @swipeleft="handleSwipe" @swiperight="handleSwipe" :swipe-options="{direction: 'horizontal', threshold: 100}">
          <router-view />
          <!-- <footer class="contentFooter">
            Sing Vue Version - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
          </footer> -->
        </v-touch>
      <!-- </div> -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// import { openURL } from 'quasar'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MyLayout',
  data () {
    return {
      left: false
      // right: false
      // miniState: true
    }
  },
  // methods: {
  //   openURL
  // },
  methods: {
    ...mapActions(
      'layout', ['switchSidebar', 'handleSwipe', 'changeSidebarActive']
    )
  },
  computed: {
    ...mapState('layout', {
      sidebarClose: state => state.sidebarClose,
      sidebarStatic: state => state.sidebarStatic,
      right: state => state.chatOpen
    })
  },
  created () {
    const staticSidebar = JSON.parse(localStorage.getItem('sidebarStatic'))

    if (staticSidebar) {
      this.$store.state.layout.sidebarStatic = true
    } else if (!this.sidebarClose) {
      setTimeout(() => {
        this.switchSidebar(true)
        this.changeSidebarActive(null)
      }, 2500)
    }
  }
}
</script>
<style src="@skins/flatlogic/singapp/components/Layout/Layout.scss" lang="scss" />
