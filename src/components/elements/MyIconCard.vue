<script setup>
import IconFourchette from '../icons/IconFourchette.vue'
import IconLivraison from '../icons/IconLivraison.vue'
import IconRepas from '../icons/IconRepas.vue'

defineProps({
  name: String
})
</script>

<template>
  <i class="icon">
    <IconRepas v-if="name === 'Repas'" />
    <IconLivraison v-if="name === 'Livraison'" />
    <IconFourchette v-else />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  background: $primary-color;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(60);
  justify-content: center;
  width: rem(60);
}
</style>
