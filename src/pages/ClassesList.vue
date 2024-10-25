<template>
    <main class="classes">
        <section class="class">
            <div class="class-picture">
                <img src="../assets/photos/yoga.jpg" alt="yoga">
            </div>

            <div class="class-content">
                <h3>Power Yoga</h3>
                <p>A dynamic and challenging form of yoga that focuses on building strength, flexibility, and balance
                    while calming the mind. Suitable for all levels, Power Yoga combines traditional poses with a
                    faster-paced flow.</p>
                <ul>
                    <li><q-icon name="self_improvement" /> Increases core strength and flexibility</li>
                    <li><q-icon name="self_improvement" /> Helps reduce stress and improve mental clarity</li>
                    <li><q-icon name="self_improvement" /> Suitable for beginners and advanced practitioners</li>
                </ul>
            </div>
        </section>
        <section class="class">
            <div class="class-picture">
                <img src="../assets/photos/lifting.jpg" alt="lifting weigths">
            </div>

            <div class="class-content">
                <h3>Strength & Sculpt</h3>
                <p>A class focused on building lean muscle and toning the body using resistance training and bodyweight
                    exercises. This session targets all major muscle groups, enhancing strength and definition.</p>
                <ul>
                    <li><q-icon name="bolt" /> Builds and tones muscle across the body</li>
                    <li><q-icon name="bolt" /> Boosts metabolism and promotes fat loss</li>
                    <li><q-icon name="bolt" /> Uses a variety of equipment (weights, bands, etc.) for a
                        balanced workout</li>
                </ul>
            </div>
        </section>
        <div class="class">
            <div class="class-picture">
                <img src="../assets/photos/begginer.jpg" alt="begginer">
            </div>

            <div class="class-content">
                <h3>Beginner Bootcamp</h3>
                <p>A low-impact, full-body workout designed for beginners to build strength, improve endurance, and gain
                    confidence. This class focuses on basic movements with simple exercises that are easy to follow but
                    effective.</p>
                <ul>
                    <li><q-icon name="water_drop" /> Builds foundational strength and fitness</li>
                    <li><q-icon name="water_drop" /> Easy-to-follow exercises with low impact</li>
                    <li><q-icon name="water_drop" /> Suitable for all ages and fitness levels</li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.classes {
    width: 100%;
    background-image: url('../assets/photos/classes-bg.jpg');
    color: $text-primary;
}

i {
    color: $text-accent;
}

.class {
    min-height: max-content;
}

.class-content {
    text-align: center;
    padding: min(5%, 1rem);
    text-wrap: balance;
}

p {
    font-size: clamp(0.8rem, 0.7rem + 0.5vw, 1.3rem);
}

ul {
    list-style-type: none;
}

li {
    font-size: clamp(0.8rem, 0.7rem + 0.5vw, 1.3rem);
}

h3 {
    color: $text-accent;
    font-size: clamp(2rem, 1.9rem + 0.5vw, 2.5rem);
}

@media screen and (min-width: 1024px) {
    .class {
        display: flex;
        align-items: center;
        margin-inline: 1rem;
        margin-bottom: 6rem;
        background-color: $primary;
        border-radius: 1rem;
        align-items: stretch;

        &>* {
            flex: 1;
        }
    }

    .class:nth-child(1) {
        margin-top: 7rem;
    }

    img {
        border-radius: 1rem;
        height: 100%;
    }

    .class:nth-child(even) {
        flex-direction: row-reverse;
    }

    .class-content {
        text-align: left;
        align-self: center;
    }
}
</style>