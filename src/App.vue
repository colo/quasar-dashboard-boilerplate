<template>
  <div id="q-app">
    <!-- creativetim.argon -->
    <!-- <notifications></notifications> -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!-- <style src="@skins/flatlogic/singapp/styles/theme.scss" lang="scss" /> -->
<style src="@skins/flatlogic/lightblue/styles/theme.scss" lang="scss" />
