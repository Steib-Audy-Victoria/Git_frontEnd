<script setup>
import { computed } from 'vue'
import IconArrowR from '../icons/IconArrowR.vue'
import IconArrowL from '../icons/IconArrowL.vue'
import IconMarket from '../icons/IconMarket.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconCall from '../icons/IconCall.vue'
import IconClock from '../icons/IconClock.vue'
import IconLocalisation from '../icons/IconLocalisation.vue'
import IconFavori from '../icons/IconFavori.vue'
import IconNext from '../icons/IconNext.vue'

const props = defineProps({
  name: String,
  color: String,
  stroke: String,
  size: String,
})
const getIcon = computed(() => {
  switch (props.name) {
  case 'Arrow Rigth':
    return IconArrowR
  case 'Market':
    return IconMarket
  case 'Arrow Left':
    return IconArrowL
  case 'Search':
    return IconSearch
  case 'Clock':
    return IconClock
  case 'Localisation':
    return IconLocalisation
  case 'Call':
    return IconCall
  case 'Favori':
    return IconFavori
  case 'Next':
    return IconNext

  default:
    return IconArrowR
  }
})

const className = computed(() => ({
  ' -black': props.color === 'black',
  ' -primary': props.color === 'primary',
  ' -white': props.color === 'white',
  ' -secondary': props.color === 'secondary',

  ' -sblack': props.stroke === 'black',
  ' -sprimary': props.stroke === 'primary',
  ' -swhite': props.stroke === 'white',
  ' -ssecondary': props.stroke === 'secondary',
 
 
  ' -small': props.size === 'small',
  ' -regular': props.size === 'regular',
  ' -big': props.size === 'big'
}))
</script>

<template>
  <i :class="className" class="icon">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);

  //background
  &.-primary {
    background: #f48e28;
  }
  &.-secondary {
    background: #f5ddc4;
  }

  &.-white {
    background: #fff;
  }

  &.-black {
    background: #000;
  }

  //stroke

  &.-sprimary {
    color: #f48e28;
  }
  &.-ssecondary {
    color: #f5ddc4;
  }

  &.-swhite {
    color: #fff;
  }

  &.-sblack {
    color: #000;
  }

  &.-small {
    svg {
      scale: 0.5;
    }
  }
  &.-regular {
    size: 1rem;
  }
  &.-big {
    size: 3rem;
  }
}
</style>
