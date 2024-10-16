<template>
    <main>
        <div class="landing">
            <h2>Transform Your Body, Transform Your Life.</h2>
            <p>Join us in a journey of transformation where every workout is an opportunity to grow stronger. Together,
                we’ll build a foundation of health, resilience, and confidence that lasts a lifetime.</p>
            <div class="bttns">
                <router-link to="/" class="btn btn-first">Join us</router-link>
                <router-link to="/" class="btn btn-second">See Equipment</router-link>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
main {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.landing {
    text-align: center;
    max-width: min(80%, 500px);
    margin-inline: auto;
    text-wrap: balance;

    h2 {
        color: $text-accent;
        font-weight: 300;
        font-size: clamp(1.5rem, 0.6rem + 2.5vw, 3rem);
        line-height: clamp(1.5rem, 0.6rem + 2.5vw, 3rem);
    }

    p {
        color: $text-primary;
        font-weight: 300;
        font-size: clamp(0.8rem, 0.62rem + 1.2vw, 1.7rem);
    }

    .bttns {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .btn {
        text-transform: uppercase;
        text-decoration: none;
        font-size: clamp(0.6rem, 0.48rem + 0.5vw, 1.2rem);
        border-radius: 5px;
        padding: clamp(0.6rem, 0.48rem + 0.5vw, 1.2rem);
        color: $text-primary;
        border: 1px solid $text-primary;
        transition: all 0.25s ease-in-out;
        transition-property: color, border-color, transform;

        &:hover {
            color: $text-accent;
            border-color: $text-accent;
            transform: translateY(-5px);
        }
    }


}


@media screen and (min-width: 1024px) {
    .landing {
        max-width: 40vw;
        margin-right: 10rem;
        text-align: left;
    }
}
</style>