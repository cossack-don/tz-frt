<template>
  <v-app-bar app height="46" color="#FFFFFF">
    <!-- icon burger -->
    <v-app-bar-nav-icon @click="changeStateMenu"></v-app-bar-nav-icon>
    <!-- right part header -->
    <div class="right-panel">
      <!-- line -->
      <div class="right-panel__line mr-3"></div>
      <!-- wrapper profile -->
      <div class="right-panel__wp-profile">
        <!-- image -->
        <img
          src="@/assets/imgs/header-icon-girl.png"
          alt=""
          class="right-panel__image"
        />
        <p class="right-panel__name mb-0 ml-2 mr-2">Adelaide Phillips</p>
        <!-- icon array -->
        <div class="right-panel__wp-icon-array">
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 7L10 0H0L5 7Z"
              fill="#3E4956"
            />
          </svg>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["ACTION_TOGGLE_BURGER_FLAG"]),
    changeStateMenu() {
      this.ACTION_TOGGLE_BURGER_FLAG();
    },
  },
};
</script>

<style lang="scss">
.right-panel {
  margin-left: auto;
  display: flex;
  align-items: center;

  &__line {
    height: 32px;
    background: #c4cfdd;
    width: 2px;
  }

  &__wp-profile {
    display: flex;
    align-items: center;
  }

  &__name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #2b343f;
  }

  &__wp-icon-array svg {
    cursor: pointer;
  }
}
</style>