<script setup>
import { computed } from 'vue'
import IconMarket from '../icons/IconMarket.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconCall from '../icons/IconCall.vue'
import IconClock from '../icons/IconClock.vue'
import IconLocalisation from '../icons/IconLocalisation.vue'
import IconFavori from '../icons/IconFavori.vue'

const props = defineProps({
  name: String,
  background: String,
  color: String,
  size: String,
})
const getIcon = computed(() => {
  switch (props.name) {
  case 'Market':
    return IconMarket
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

  default:
    return IconMarket
  }
})

const className = computed(() => ({
  ' -black': props.background === 'black',
  ' -primary': props.background === 'primary',
  ' -white': props.background === 'white',
  ' -secondary': props.background === 'secondary',
  ' -none': props.background === 'none',

  ' -sblack': props.color === 'black',
  ' -sprimary': props.color === 'primary',
  ' -swhite': props.color === 'white',
  ' -ssecondary': props.color === 'secondary',
 
 
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

  &.-none {
    background: none;
    box-shadow: none;
  }

  //color

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


  //size

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
