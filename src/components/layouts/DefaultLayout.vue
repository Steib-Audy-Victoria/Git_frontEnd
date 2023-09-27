<template>
    <main class="layout">
        <header class="layout__header">
            <slot name="header"></slot>
        </header>
        <aside class="layout__aside">
            <slot></slot>
        </aside>
        <article class="layout__article">
            <slot name="article"></slot>
        </article>
        <footer class="layout__footer">
            <slot name="footer"></slot>
        </footer>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.layout {
    display: grid;
    grid-template: 
    "header"
    "article"
    "aside"
    "footer";

    @include medium-up {
        grid-template: 
        "header header header"
        "aside article article"
        "footer footer footer";
    }

    > * {
        padding: rem(16);
    }

    &__header{
        background: red;
        grid-area: header;
    }
    &__footer{
        background: blue;
        grid-area: footer;
    }

    &__article{
        background: purple;
        grid-area: article;
    }

    &__aside{
        background: pink;
        grid-area: aside;
    }
}
</style>