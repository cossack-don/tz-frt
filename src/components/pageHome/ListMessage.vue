<template>
  <div class="message pa-5 mt-5">
    <!-- title -->
    <h3 class="message__title mb-5">Cписок сообщений</h3>
    <!-- gray line -->
    <div class="line-gray"></div>
    <!-- wrapper-card -->
    <div class="card-wrapper">
      <div v-for="item in objectCardItems" :key="item.id">
        <!-- шаблон карточки -->
        <TemplateCardInListMessage
          :textInCard="`${item.text}`"
          :imageInCard="`${item.image}`"
          :socialNetworks="`${item.socialNetworks}`"
          :category="`${item.category}`"
        />
      </div>
    </div>
    <!-- end wrapper - card -->
    <button class="d-flex ml-auto global-button-green mt-7">Обновить</button>
  </div>
</template>

<script>
import TemplateCardInListMessage from "@/components/pageHome/TemplateCardInListMessage.vue";
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

export default {
  components: {
    TemplateCardInListMessage,
  },
  computed: {
    ...mapState({
      objectCardItems: (state) => state.arrayItems,
    }),
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.message {
  background: #ffffff;
  border-radius: 4px;
  border: #eff0f2 solid 1px;

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #3e4956;
  }
}
//
.line-gray {
  height: 1px;
  background: #dee5ef;
}

//
.card-wrapper {
  overflow-y: scroll;
  height: 800px;
}

// скролл
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background-color: #97a4ba;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a1b6db;
}

::-webkit-scrollbar {
  width: 6px;
}
</style>