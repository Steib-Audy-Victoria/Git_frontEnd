<script setup>
import MyIconGlobale from './elements/MyIconGlobale.vue'
</script>

<template>
  <div class="Header">
    <div class="Header__image">
      <img src="../../public/logo.png" alt="Logo de la maquette" />
    </div>

    <div class="Header__menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </div>

    <div class="Header__search">
      <MyIconGlobale name="Search" background="none" />
      <input type="text" placeholder="Search" />
      <MyIconGlobale background="none" />
    </div>
  </div>
</template>

<style lang="scss">
.Header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__image {
    img {
      width: rem(100);
    }
  }

  &__menu {
    ul {
      display: flex;
      align-items: center;
      gap: rem(20);
      list-style: none;

      li {
        a {
          text-decoration: none;
          color: $black;
          font-weight: 700;
          font-family: $primary-font-family;
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }

  &__search {
    display: flex;
    align-items: center;
    gap: rem(10);
    border: rem(1) solid $gray;
    border-radius: rem(10);
    box-shadow: 0 0 rem(10) rgba(0, 0, 0, 0.1);

    input {
      border: none;
      border-right: rem(1) solid $gray;
      padding: rem(10);
      width: rem(200);
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
