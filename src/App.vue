<template>
  <v-app id="inspire">
    <Header />
    <LeftSidebar />
    <Main />
  </v-app>
</template>

<script>
import LeftSidebar from "@/modules/left-sidebar/LeftSidebar.vue";
import Header from "@/modules/header/Header.vue";
import Main from "@/modules/main/Main.vue";

export default {
  components: {
    LeftSidebar,
    Header,
    Main,
  },
};
</script>

<style>
/* resets and main style vuetify */
* {
  outline: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

.v-application ul,
.v-application ol {
  padding-left: 0 !important;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v-main__wrap {
  display: flex;
  width: 60px;
}
</style>