<template>
  <div class="message-full">
    <img
      class="message-full__image"
      src="@/assets/imgs/img-bg.svg"
      alt="image-bg"
    />
    <h3 class="mt-3">Тут будет подробное сообщение</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.message-full {
  height: 700px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #eff0f2;
  border-radius: 4px;

  &__image {
    margin-top: 15%;
  }
}
</style>