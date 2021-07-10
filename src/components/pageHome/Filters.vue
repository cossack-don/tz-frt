<template>
  <div class="filters pa-5">
    <!-- title -->
    <h6 class="filters__title">Фильтры</h6>

    <!-- start wrapper -->
    <div class="filters__checkboxs-wrapper">
      <!-- left -->
      <div class="mt-5 filters__checkboxs-wrapper-left">
        <v-checkbox
          class="filters__checkbox-item ma-0 pa-0"
          color="#1ABC9C"
          value="red"
          hide-details
          v-for="(item, index) in 4"
          :key="index"
        ></v-checkbox>
      </div>

      <!-- right -->
      <div class="mt-5 filters__checkboxs-wrapper-right">
        <v-checkbox
          class="filters__checkbox-item ma-0 pa-0"
          color="#1ABC9C"
          value="red"
          hide-details
          v-for="(item, index) in 4"
          :key="index"
        ></v-checkbox>
      </div>
      <!-- end right -->
    </div>
    <!-- end wrapper -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filters {
  background: #ffffff;
  border: 1px solid #eff0f2;
  border-radius: 4px;

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #3e4956;
  }

  &__checkboxs-wrapper {
    display: flex;
  }

  &__checkboxs-wrapper-left,
  &__checkboxs-wrapper-right {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
}
</style>