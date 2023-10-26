<script setup>
import MyIconGlobale from './elements/MyIconGlobale.vue'

defineProps({
  imageAlt: String,
  imageSrc: String,
  imageAltPers: String,
  imageSrcPers: String,
  name: String,
  role: String,
  avis: String
})
</script>

<template>
  <div class="cardSlider">
    <div class="cardSlider__content">
      <MyIconGlobale
        class="cardSlider__content-ArrowLeft"
        name="Arrow"
        background="primary"
        color="white"
        size="small"
        position="left"
      />
      <div class="cardSlider__content-avis">
        <div class="cardSlider__content-pers">
          <img class="cardSlider__content-pers-image" :src="imageSrcPers" :alt="imageAltPers" />
          <div>
            <p class="cardSlider__content-pers-name">{{ name }}</p>
            <p class="cardSlider__content-pers-role">{{ role }}</p>
          </div>
        </div>
        <p>{{ avis }}</p>
      </div>
      <MyIconGlobale
        class="cardSlider__content-ArrowRight"
        name="Arrow"
        background="primary"
        color="white"
        size="small"
      />
    </div>
    <div class="cardSlider__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
  </div>
</template>

<style lang="scss">
.cardSlider {
  display: flex;
  flex-direction: row;
  gap: rem(20);
  max-width: 100vw;
  padding: rem(20) rem(20);

  &__content {
    border-radius: rem(20);
    border: rem(1) solid $gray;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding: rem(20) rem(10);
    max-width: 50vw;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    &-avis {
      display: flex;
      flex-direction: column;
      gap: rem(80);
    }

    > * + * {
      margin-top: rem(10);
      margin-bottom: rem(10);
    }
    &-ArrowLeft {
      position: absolute;
      left: 0;
    }
    &-ArrowRight {
      position: absolute;
      right: 0;
    }
    &-pers {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: rem(20);
      &-image {
        width: rem(60);
        height: rem(60);
        border-radius: 100%;
      }
      &-name {
        font-weight: bold;
        font-size: rem(20);
        margin-bottom: rem(5);
      }
      &-role {
        font-size: rem(15);
      }
    }
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50vw;
    img {
      width: 150%;
    }
  }
}
</style>
