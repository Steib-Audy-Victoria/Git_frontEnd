<script setup>
import IconCommunity from '../icons/IconCommunity.vue';
import IconDocumentation from '../icons/IconDocumentation.vue';
import IconEcosystem from '../icons/IconEcosystem.vue';
import IconSupport from '../icons/IconSupport.vue'; 
import IconTooling from '../icons/IconTooling.vue';

import { computed } from 'vue'
 
const props = defineProps({
  name: String
})

const getIcon = computed(() => {
  switch (props.name) {
  case 'community':
    return IconCommunity 
  case 'documentation':
    return IconDocumentation 
  case 'ecosystem':
    return IconEcosystem
  case 'support':
    return IconSupport
  default:
    return IconTooling
  }
})
</script>

<template>
  <i class="icon">
    <component :is='getIcon' />
  </i>
</template>

<style lang='scss' scoped>
.icon{
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