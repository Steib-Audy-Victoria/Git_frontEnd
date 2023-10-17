<script setup>
import MyIconGlobale from './elements/MyIconGlobale.vue'

defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  price: Number
})

function name() {
  return 'coucou'
}
name()
</script>
<template>
  <div class="cardMenu">
    <div class="cardMenu__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>

    <div class="cardMenu__content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <p><span>$</span>{{ price }}</p>
      <div class="cardMenu__button">
        <MyIconGlobale name="Arrow" background="black" color="white"></MyIconGlobale>
        <MyIconGlobale
          name="Arrow"
          position="left"
          background="white"
          color="black"
        ></MyIconGlobale>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.cardMenu {
  * {
    margin: 0;
    padding: 0;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: rem(260);
  min-width: rem(250);
  max-height: rem(340);
  min-height: rem(320);
  background: $white;
  border: rem(1) solid $gray;
  gap: rem(20);
  border-radius: rem(35);
  box-shadow: 0 0 rem(5) 0 $gray;

  &__image {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: rem(-30);
    height: 50%;
    img {
      width: 90%;
    }
  }

  &__content {
    position: absolute;
    font-family: $primary-font-family;
    padding: 0 rem(40);
    text-align: center;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    > * + * {
      margin-top: rem(20);
    }
    span {
      font-weight: 700;
      color: #ee140a;
    }
  }
  &__button {
    display: flex;
    flex-direction: row;
    gap: rem(30);
    justify-content: center;
    align-items: center;
  }
}
</style>
