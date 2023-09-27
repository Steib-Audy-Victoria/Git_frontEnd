<script setup>
import MyButton from '@/components/elements/MyButtonVue3.vue'
import DefaultLayout from "../components/layouts/DefaultLayout.vue";

</script>

<template>
 <!-- <MyButton>My Button</MyButton> -->
 <!-- <MyButton size="small"  href="/about">My Small Button</MyButton> -->
 <!-- <MyButton  variant="rounded" >My Rounded Button</MyButton> -->
 <p></p>

 <DefaultLayout>
    <template v-slot:header>
        <nav>
            <ul>
                <li><a href="#">link 1</a></li>
                <li><a href="#">link 2</a></li>
                <li><a href="#">link 3</a></li>
                <!-- ul>li*3>a[href="#"]{link $}-->
            </ul>
        </nav>
    </template>

    <template v-slot:article>
        <h1>Hello world !</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Delectus commodi quisquam obcaecati atque dolor ab velit porro enim, eius reiciendis placeat, 
            quasi impedit repudiandae mollitia quidem sapiente quas molestiae beatae!</p>
    </template>
    
    <p> test aside</p>

    <template v-slot:footer>
     <MyButton size="small"  href="/about">My Button</MyButton>
    </template>
 </DefaultLayout>
</template>
