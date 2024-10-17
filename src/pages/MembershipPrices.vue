<template>
    <main>
        <h2>Tiers</h2>
        <div class="tiers">
            <div class="tier bronze">
                <h3><q-icon name="military_tech" class="i-bronze" />Bronze</h3>
                <p>Perfect for the busy go-getter</p>
                <ul role="list">
                    <li><q-icon name="star" class="list-icon" />8 entries a month.</li>
                    <li><q-icon name="star" class="list-icon" />Base gym access.</li>
                </ul>
                <button>39.99&dollar;</button>
            </div>
            <div class="tier silver">
                <h3><q-icon name="military_tech" class="i-silver" />Silver</h3>
                <p>For the committed fitness enthusiast</p>
                <ul role="list">
                    <li><q-icon name="star" class="list-icon" />16 entries a month.</li>
                    <li><q-icon name="star" class="list-icon" />Base Gym access.</li>
                    <li><q-icon name="star" class="list-icon" />10% discount on complimentary products.</li>
                </ul>
                <button>59.99&dollar;</button>
            </div>
            <div class="tier gold">
                <h3><q-icon name="military_tech" class="i-gold" />Gold</h3>
                <p>Unlock the ultimate fitness experience</p>
                <ul role="list">
                    <li><q-icon name="star" class="list-icon" />Unlimited entries.</li>
                    <li><q-icon name="star" class="list-icon" />Access to additional areas, including sauna climbing
                        wall and others.</li>
                    <li><q-icon name="star" class="list-icon" />20% discount on complimentary products.</li>
                    <li><q-icon name="star" class="list-icon" />15% discount on our classes.</li>
                </ul>
                <button>99.99&dollar;</button>
            </div>
        </div>
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
    color: $text-primary;
}

h2 {
    color: $text-accent;
    text-align: center;
    font-weight: 500;
    margin-block: 1rem;
}

h3 {
    font-size: clamp(1.7rem, 1.3rem + 1vw, 2.5rem);
    padding-bottom: 1rem;
}

p {
    font-weight: 500;
    font-size: clamp(0.9rem, 0.78rem + 0.6vw, 1.5rem);
    text-wrap: balance;
}

li {
    text-wrap: balance;
}

button {
    padding: 0.5rem 1.3rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
}

.tiers {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
}

.tier {
    width: min(90%, 300px);
    text-align: center;
    background-image: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
    padding-top: 2rem;
    padding-bottom: 5rem;
    border: 2px solid rgb(8, 8, 8);
    border-radius: 2rem;
    position: relative;
}

.i-bronze,
.bronze>h3 {
    color: rgb(153, 56, 0);
}

.i-silver,
.silver>h3 {
    color: silver;
}

.i-gold,
.gold>h3 {
    color: gold;
}

@media screen and (min-width: 1024px) {
    .tiers {
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        margin-top: 7rem;
    }

}
</style>