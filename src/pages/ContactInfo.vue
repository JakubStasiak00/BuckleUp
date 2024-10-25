<template>
    <main>
        <div class="wrap">
            <h2>Location &amp; Contact</h2>
            <section class="location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.9183911715503!2d19.28395902036898!3d51.95415878551123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb013fab44895%3A0x575a59ba6434a14c!2sPlayground%20NIVEA!5e0!3m2!1sen!2spl!4v1729812940690!5m2!1sen!2spl"
                    :width="$q.screen.lt.md ? '280px' : '540px'" :height="$q.screen.lt.md ? '280px' : '540px'"
                    style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section class="contact">
                Phone Number: +48 694 202 137 <br>
                E-mail: buckleup@noname.com
            </section>
        </div>
    </main>
</template>


<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar()

</script>


<style lang="scss" scoped>
main {
    width: 100%;
    background-image: url('../assets/photos/classes-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: $text-primary;

    .wrap {
        max-width: min(500px, 90%);
        margin-inline: auto;
        margin-top: clamp(2rem, 2rem + 5vw, 7rem);
        text-align: center;
    }

}
</style>