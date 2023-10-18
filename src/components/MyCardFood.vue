<script setup>
import MyIconGlobale from './elements/MyIconGlobale.vue'

defineProps({
  title: String,
  description: String,
  classIcon: String
})

function name() {
  return 'coucou'
}
name()
</script>
<template>
  <div class="cardFood">
    <div class="cardFood__icon">
      <MyIconGlobale
        v-if="classIcon === 'Livraison'"
        name="Livraison"
        background="secondary"
        color="primary"
        size="big"
      />
      <MyIconGlobale
        v-else-if="classIcon === 'Repas'"
        name="Repas"
        background="secondary"
        color="primary"
        size="big"
      />
      <MyIconGlobale v-else name="Fourchette" background="secondary" color="primary" size="big" />
    </div>

    <div class="cardFood__content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.cardFood {
  max-width: rem(320);
  min-width: rem(300);
  max-height: rem(320);
  min-height: rem(300);
  border-radius: rem(20);
  border: rem(1) solid $gray;
  overflow: hidden;
  padding: rem(20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    text-align: center;
    padding: rem(20) rem(10);
    > * + * {
      margin-top: rem(20);
    }
  }
}
</style>
