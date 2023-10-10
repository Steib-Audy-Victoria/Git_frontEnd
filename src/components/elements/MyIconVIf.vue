<script setup>
import IconCommunity from '../icons/IconCommunity.vue'
import IconDocumentation from '../icons/IconDocumentation.vue'
import IconEcosystem from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconTooling from '../icons/IconTooling.vue'

defineProps({
  name: String
})
</script>

<template>
  <i class="icon">
    <IconCommunity v-if="name === 'community'" />
    <IconDocumentation v-else-if="name === 'documentation'" />
    <IconSupport v-else-if="name === 'support'" />
    <IconTooling v-else-if="name === 'tooling'" />
    <IconEcosystem v-else />
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
