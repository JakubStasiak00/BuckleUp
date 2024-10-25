<template>
    <main>
        <section class="rooms">
            <h2>Gym Areas</h2>
            <div class="group">
                <div class="card">
                    <img src="../assets/photos/pool.jpg" alt="">
                    <h3>Swimming Pool</h3>
                    <p>A spacious indoor pool designed for lap swimming, water aerobics, and leisure. The area includes
                        lanes for serious swimmers and a shallow section for relaxed activities.</p>
                </div>
                <div class="card">
                    <img src="../assets/photos/sauna.jpg" alt="">
                    <h3>Sauna</h3>
                    <p>A cozy, heated room designed for relaxation and detoxification. The sauna provides dry heat to
                        help soothe muscles after a workout and promote overall wellness.</p>
                </div>
                <div class="card">
                    <img src="../assets/photos/climbingwall.jpg" alt="">
                    <h3>Climbing Wall</h3>
                    <p>A challenging indoor climbing area equipped with various routes for all skill levels. The wall
                        features both bouldering sections and rope climbing, perfect for strength and agility training.
                    </p>
                </div>
            </div>
        </section>

        <section class="trainers">
            <h2>Trainers</h2>
            <div class="group">
                <div class="card">
                    <img src="../assets/photos/yogateacher.jpg" alt="">
                    <h3>Lee, 27</h3>
                    <p>A warm and patient yoga teacher with a passion for helping others find inner peace. He blends his
                        deep knowledge of traditional practices with a modern, approachable style.</p>
                </div>
                <div class="card">
                    <img src="../assets/photos/strengthteacher.jpg" alt="">
                    <h3>Daniel, 31</h3>
                    <p>A driven and charismatic strength coach with a real love for helping people push past their
                        limits. In his early 30s, he's not just jacked—he’s also got a contagious energy that makes even
                        the toughest workouts feel doable.</p>
                </div>
                <div class="card">
                    <img src="../assets/photos/womanteacher.jpg" alt="">
                    <h3>Natalie, 26</h3>
                    <p>A positive and encouraging coach with a natural gift for working with those just starting their
                        fitness journey. She’s passionate about making fitness fun and accessible for beginners,
                        offering plenty of guidance and support along the way.</p>
                </div>
            </div>
        </section>

        <section class="cards">
            <h2>Accepted cards</h2>
            <div class="group">
                <div class="card">
                    <h3>Multisport</h3>
                    <img src="../assets/photos/multisport.webp" alt="">
                </div>
                <div class="card">
                    <h3>Medicover Sport</h3>
                    <img src="../assets/photos/medicover.webp" alt="">
                </div>
                <div class="card">
                    <h3>FitProfit</h3>
                    <img src="../assets/photos/fitprofit.jpg" alt="">
                </div>
            </div>
        </section>
    </main>
</template>


<script setup lang="ts">

</script>


<style lang="scss" scoped>
main {
    width: 100%;
    background-image: url('../assets/photos/classes-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: $text-secondary;
}

.rooms {
    margin-top: clamp(4rem, 4rem + 5vw, 7rem);
}

img {
    max-width: 100%;
}

.group {
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    margin-inline: 1rem;
    margin-bottom: 1rem;
}

.card {
    flex: 1;
    padding-inline: 1rem;
}

h2 {
    background-color: aliceblue;
    margin-inline: 1rem;
    padding: 1rem 0 1rem 1rem;
    font-size: clamp(2rem, 1.8rem + 1vw, 3rem);
    font-weight: 400;
}

h3 {
    font-size: 1.3rem;
    color: $text-accent;
}

.cards {
    img {
        border-radius: 2rem;
        transform: scale(1.01);
    }
}

@media screen and (min-width: 1024px) {
    .group {
        flex-direction: row;
    }

    .rooms {
        img {
            aspect-ratio: 16/10;
        }
    }

    .trainers {
        img {
            aspect-ratio: 1/1;
        }
    }

    .cards {
        img {
            width: 100%;
            aspect-ratio: 3/2;
        }
    }

}
</style>