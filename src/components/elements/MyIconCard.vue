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
    <IconFourchette v-if="name === 'Fourchette'" />
    <IconLivraison v-if="name === 'Livraison'" />
    <IconRepas v-else />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  background: $white;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);
}
</style>
