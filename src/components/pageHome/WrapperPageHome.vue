<template>
  <div class="pa-5 interface-analitics-header">
    <!-- title -->
    <h2 class="interface-analitics-header__title mb-5">Интерфейс аналитика</h2>

    <!-- WRAPPER PANEL -->
    <div class="wrapper-panels">
      <!-- LEFT PANEL -->
      <div class="wrapper-panels__left">
        <Filters />
        <ListMessage />
      </div>

      <!-- RIGHT PANEL -->
      <div class="wrapper-panels__right">
        <JobWithMessage />
        <FullMessage />
      </div>
    </div>
  </div>
</template>

<script>
// right PANEL
import JobWithMessage from "@/components/pageHome/JobWithMessage.vue";
import FullMessage from "@/components/pageHome/FullMessage.vue";

// left PANEL
import Filters from "@/components/pageHome/Filters.vue";
import ListMessage from "@/components/pageHome/ListMessage.vue";
export default {
  components: {
    Filters,
    FullMessage,
    ListMessage,
    JobWithMessage,
  },
};
</script>

<style lang="scss">
.interface-analitics-header {
  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 23px;
    line-height: 27px;
    color: #3e4956;
  }
}

.wrapper-panels {
  display: flex;

  &__left {
    width: 30%;
    margin-right: 20px;
  }

  &__right {
    width: 70%;
  }
}

/* адаптив */
@media screen and (max-width: 1200px) {
  .wrapper-panels {
    flex-wrap: wrap;
  }

  .wrapper-panels__left,
  .wrapper-panels__right {
    width: 100%;
  }

  .wrapper-panels__left {
    margin-right: 0;
  }

  .message {
    margin-bottom: 20px;
  }
}
</style>