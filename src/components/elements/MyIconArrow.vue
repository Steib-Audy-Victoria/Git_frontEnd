<script setup>
import IconArrow from '../icons/IconArrow.vue'
import IconNext from '../icons/IconNext.vue'


import { computed } from "vue"



const props = defineProps({
    name: String,
    background: String,
    position: String,
    color: String
})

const className = computed(() => ({
    ' -orange': props.background === 'orange',
    ' -black': props.background === 'black',
    ' -none': props.background === 'none',
    ' -Left': props.position === 'Left',
    ' -colorWhite': props.color === 'white',
}))
</script>

<template>
    <i class="icon" :class="className">
        <IconArrow v-if="name === 'arrow'" />
        <IconNext v-else />
    </i>
</template>

<style lang="scss" scoped>
.icon {
    align-items: center;
    background: $white;
    border-radius: 100%;
    box-shadow: 0 0 rem(5) 0 $gray;
    display: inline-flex;
    height: rem(40);
    justify-content: center;
    width: rem(40);

    &.-orange {
    background: $primary-color;
    }

    &.-black {
    background: $black;
    }

    &.-none {
    background: none;
    box-shadow: none;
    }

    &.-Left {
    rotate: 180deg;
    }

    &.-colorWhite {
        color: white ;
    }
}
</style>
