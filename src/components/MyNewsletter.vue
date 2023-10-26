<script setup>
import MyButton from './elements/MyButton.vue'
</script>

<template>
  <div class="Newsletter">
    <img class="Newsletter__img" src="../../public/burger_sandwich.png" alt="Burger" />

    <div class="Newsletter__content">
      <h3>Subcribe To Our Newsletter</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna
        venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.
      </p>
      <div class="Newsletter__content-form">
        <input type="text" placeholder="Type your email....." />
        <MyButton size="small">SUBCRIBE</MyButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Newsletter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: $black;
  border-radius: rem(25);
  padding: rem(25);
  max-width: rem(1000);
  min-width: rem(900);
  max-height: rem(300);
  min-height: rem(280);
  color: $white;
  position: relative;
  align-items: center;

  &__img {
    object-fit: contain;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(30);
    & h3 {
      font-family: $primary-font-family;
      font-size: rem(20);
      font-weight: 700;
    }

    & p {
      font-family: $primary-font-family;
      font-size: rem(14);
      font-weight: 400;
    }

    &-form {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background: $white;
      border-radius: rem(10);
      padding: rem(10) 0;
      & input {
        border: none;
        outline: none;
        font-family: $primary-font-family;
        font-size: rem(14);
        font-weight: 400;
      }
    }
  }
}
</style>
