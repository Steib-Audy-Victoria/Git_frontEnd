<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

import MyCardMenu from '@/components/MyCardMenu.vue'
import MyBigCardMenu from '@/components/MyBigCardMenu.vue'
import MyCardFood from '@/components/MyCardFood.vue'

import MyIconGlobale from '../components/elements/MyIconGlobale.vue'

import MyNewsletter from '@/components/MyNewsletter.vue'
</script>

<template>
  <MyHeader />

  <section class="Hero">
    <div class="Hero__left">
      <p>Icon Back Delivery</p>
      <h1 class="Hero__title">The Fastest Delivery In <span>Your City</span></h1>
      <p class="Hero__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a
        vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
      </p>
      <div class="Hero__button">
        <p>button</p>
      </div>
    </div>
    <div class="Hero__right">
      <MyCardMenu
        title="Burger"
        description="Mushroom Sauce"
        price="5.15"
        imageSrc="burger.png"
        imageAlt="Burger"
      />
      <MyCardMenu
        title="Food Combo"
        description="Mushroom Sauce"
        price="9.15"
        imageSrc="FoodCombo.png"
        imageAlt="Foode combo"
      />
      <MyCardMenu
        title="Pizza"
        description="Mushroom Sauce"
        price="6.15"
        imageSrc="pizza.png"
        imageAlt="Pizza"
      />
      <MyCardMenu
        title="Cake"
        description="Mushroom Sauce"
        price="5.15"
        imageSrc="cake.png"
        imageAlt="Cake"
      />
    </div>
  </section>

  <section class="Information">
    <div class="Information__div">
      <MyIconGlobale class="Information__icon" name="Clock" background="primary" color="white" />
      <h4 class="Information__title">Today 10:00am - 10:00pm</h4>
      <p class="Information__text">Working time</p>
    </div>
    <div class="Information__div">
      <MyIconGlobale
        class="Information__icon"
        name="Localisation"
        background="primary"
        color="white"
      />
      <h4 class="Information__title">Washington, D.C., DC,USA</h4>
      <p class="Information__text">Our Location</p>
    </div>
    <div class="Information__div">
      <MyIconGlobale class="Information__icon" name="Call" background="primary" color="white" />
      <h4 class="Information__title">+0123 456 7891</h4>
      <p class="Information__text">Phone Number</p>
    </div>
  </section>

  <section class="Product">
    <p class="Product__subTitle">Product</p>
    <h2 class="Product__title">Most Popular Items</h2>
    <div class="Product__card">
      <MyBigCardMenu
        title="Gyro Sandwhic"
        imageSrc=""
        imageAlt=""
        buttonLabel="Add to cart"
        note="4.9"
        price="15.00"
      />
      <MyBigCardMenu
        title="Enchilade"
        imageSrc=""
        imageAlt=""
        buttonLabel="Add to cart"
        note="5.0"
        price="25.50"
      />
      <MyBigCardMenu
        title="Green Beans"
        imageSrc=""
        imageAlt=""
        buttonLabel="Add to cart"
        note="4.9"
        price="12.00"
      />
      <MyBigCardMenu
        title="Pizza"
        imageSrc=""
        imageAlt=""
        buttonLabel="Add to cart"
        note="5.0"
        price="18.50"
      />
      <MyBigCardMenu
        title="Chicken Pot Pie"
        imageSrc=""
        imageAlt=""
        buttonLabel="Add to cart"
        note="4.9"
        price="25.00"
      />
      <MyBigCardMenu
        title="Green Salad"
        imageSrc=""
        imageAlt=""
        buttonLabel="Add to cart"
        note="4.9"
        price="15.00"
      />
    </div>
    <p>button</p>
  </section>
  <section class="Services">
    <p class="Services__subTitle">Services</p>
    <h2 class="Services__title">Why Choose Our Favorite Food</h2>
    <div class="Services__card">
      <MyCardFood
        title="Qualityfull Food"
        description="But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        classIcon="Repas"
      />
      <MyCardFood
        title="Healthy Food"
        description="But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
      />
      <MyCardFood
        title="Fast Delivery"
        description="But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        classIcon="Livraison"
      />
    </div>
  </section>
  <section class="Work"></section>
  <section class="Testimonials"></section>

  <section class="Contact">
    <MyNewsletter />
  </section>

  <MyFooter />
</template>

<style lang="scss">
.Hero {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  padding: rem(50) rem(100);

  &__left {
    display: flex;
    flex-direction: column;
    gap: rem(20);
    max-width: rem(500);

    h1 {
      font-size: rem(90);
      font-weight: 700;
      font-family: $primary-font-family;

      span {
        color: $primary-color;
      }
    }

    &__text {
      color: $black;
      font-size: rem(20);
      font-weight: 500;
      font-family: $primary-font-family;
    }

    &__button {
      display: flex;
      flex-direction: row;
      gap: rem(20);
    }
  }

  &__right {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: rem(40);
  }
}

.Contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: rem(30);
  padding-bottom: rem(50);
}

.Information {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  padding: rem(50) rem(100);
  gap: rem(50);
  box-shadow: 0 0 rem(5) 0 $gray;

  &__div {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    align-items: center;
  }

  &__icon {
    width: rem(100);
    height: rem(100);
  }

  &__title {
    font-size: rem(20);
    font-weight: 700;
    font-family: $primary-font-family;
  }

  &__text {
    font-size: rem(14);
    font-weight: 400;
    font-family: $primary-font-family;
  }
}

.Product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  padding: rem(50) rem(100);

  &__subTitle {
    font-size: rem(15);
    font-family: $primary-font-family;
    color: $primary-color;
  }

  &__title {
    font-size: rem(30);
    font-weight: 700;
    font-family: $primary-font-family;
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: rem(40);
  }
}

.Services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  padding: rem(50) rem(100);

  &__subTitle {
    font-size: rem(15);
    font-family: $primary-font-family;
    color: $primary-color;
  }

  &__title {
    font-size: rem(30);
    font-weight: 700;
    font-family: $primary-font-family;
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: rem(40);
  }
}
</style>
