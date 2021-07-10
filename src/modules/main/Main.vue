<template>
  <v-main class="main-content grey lighten-2">
    <LeftSideBarStatic />

    <!-- main-router-links -->
    <router-view class="main" />
  </v-main>
</template>

<script>
import LeftSideBarStatic from "@/modules/left-sidebar/LeftSideBarStatic.vue";

export default {
  components: {
    LeftSideBarStatic,
  },
};
</script>

<style>
</style>