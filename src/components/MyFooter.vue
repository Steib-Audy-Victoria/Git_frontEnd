<script setup>
import MyIconGlobale from './elements/MyIconGlobale.vue'
</script>

<template>
  <div class="Footer">
    <div class="Footer__content">
      <img src="../../public/logo.png" alt="Logo de la maquette" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio
        sit malesuada in quis. Arcu tristique elementum viverra integer id.
      </p>
      <div class="Footer__content-icon">
        <MyIconGlobale
          name="Facebook"
          background="secondary"
          color="primary"
          fill="primary"
          size="small"
        />
        <MyIconGlobale
          name="Twitter"
          background="secondary"
          color="primary"
          fill="primary"
          size="small"
        />
        <MyIconGlobale
          name="Linkedin"
          background="secondary"
          color="primary"
          fill="primary"
          size="small"
        />
        <MyIconGlobale name="Instagram" background="secondary" color="primary" size="small" />
      </div>
    </div>

    <div class="Footer__open">
      <h3>Opening Restaurant</h3>
      <ul>
        <li>
          <p>Sat-Wet: 09:00am-10:00PM</p>
        </li>
        <li>
          <p>Thursdayt: 09:00am-11:00PM</p>
        </li>
        <li>
          <p>Friday: 09:00am-8:00PM</p>
        </li>
      </ul>
    </div>

    <div class="Footer__link">
      <h3>User Link</h3>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Order Delivery</a></li>
        <li><a href="#">Payment & Tex</a></li>
        <li><a href="#">Terms of Services</a></li>
      </ul>
    </div>

    <div class="Footer__contact">
      <h3>Contact Us</h3>
      <ul>
        <li>
          <p>1234 Country Club Ave</p>
        </li>
        <li>
          <p>NC 123456, London, UK</p>
        </li>
        <li>
          <p>+0123 456 7891</p>
        </li>
      </ul>
      <div class="Footer__contact-news">
        <input type="text" placeholder="Enter your email...." />
        <MyIconGlobale name="Next" size="small" background="primary" color="white" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: rem(20);
  padding: rem(20);
  margin: rem(-10);
  background: #fafaff;
  max-width: 100vw;

  &__content {
    display: flex;
    flex-direction: column;
    gap: rem(20);

    img {
      width: rem(100);
    }

    p {
      font-size: rem(14);
      font-weight: 400;
      font-family: $primary-font-family;
      color: $gray;
    }

    &-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: rem(20);
    }
  }

  &__open {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: rem(20);
      font-weight: 700;
      font-family: $primary-font-family;
      color: $black;
    }

    ul {
      list-style: none;
      gap: rem(10);

      li {
        text-align: left;
        p {
          font-size: rem(14);
          font-weight: 400;
          font-family: $primary-font-family;
          color: $gray;
        }
      }
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: rem(20);
      font-weight: 700;
      font-family: $primary-font-family;
      color: $black;
    }

    ul {
      list-style: none;
      gap: rem(10);

      li {
        text-align: left;
        a {
          text-decoration: none;
          font-size: rem(14);
          font-weight: 400;
          font-family: $primary-font-family;
          color: $gray;

          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: rem(20);
      font-weight: 700;
      font-family: $primary-font-family;
      color: $black;
    }

    ul {
      list-style: none;
      gap: rem(10);

      li {
        text-align: left;
        p {
          font-size: rem(14);
          font-weight: 400;
          font-family: $primary-font-family;
          color: $gray;
        }
      }
    }

    &-news {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: rem(10);
      border: rem(1) solid $white;
      border-radius: rem(50);
      padding: rem(5);
      background: $white;

      input {
        border: none;
        border-radius: rem(10);
        padding: rem(10);
        width: rem(200);
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
