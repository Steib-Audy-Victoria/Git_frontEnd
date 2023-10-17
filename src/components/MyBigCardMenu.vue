<script setup>
import MyButton from './elements/MyButton.vue'
import MyIconGlobale from './elements/MyIconGlobale.vue'

defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  buttonLabel: String,
  note: Number,
  price: Number
})

function name() {
  return 'coucou'
}
name()
</script>
<template>
  <div class="BcardMenu">
    <div class="BcardMenu__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>

    <div class="BcardMenu__content">
      <div class="BcardMenu__row1">
        <h2 size="small">{{ title }}</h2>
        <div class="BcardMenu__note">
          <MyIconGlobale
            name="Favori"
            background="none"
            color="primary"
            fill="primary"
            size="small"
          />
          <p>{{ note }}</p>
        </div>
      </div>

      <div class="BcardMenu__row2">
        <div class="BcardMenu__button">
          <MyButton variant="rounded" size="small">{{ buttonLabel }}</MyButton>
        </div>
        <p><span>$</span>{{ price }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.BcardMenu {
  max-width: rem(360);
  min-width: rem(300);
  max-height: rem(340);
  min-height: rem(320);
  border-radius: rem(20);
  border: rem(1) solid $gray;
  overflow: hidden;
  &__content {
    display: flex;
    flex-direction: column;
    padding: rem(10);
  }
  &__image {
    width: 100%;
    height: rem(200);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__row1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__row2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__note {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
