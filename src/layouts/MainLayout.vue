<template>
  <q-layout class="glb">
    <header>
      <h1 class="logo"> Buckle<span class="logo-second">UP</span></h1>
      <nav v-if="!$q.screen.lt.md">
        <ul class="menu">
          <li>
            <q-icon class="icon" name="person" />
            <a href="#" rel="noopener noreferrer">Join</a>
          </li>
          <li>
            <q-icon class="icon" name="credit_card" />
            <a href="#" rel="noopener noreferrer">Membership</a>
          </li>
          <li>
            <q-icon class="icon" name="fitness_center" />
            <a href="#" rel="noopener noreferrer">Showcase</a>
          </li>
          <li>
            <q-icon class="icon" name="pin_drop" />
            <a href="#" rel="noopener noreferrer">Location</a>
          </li>
        </ul>
      </nav>
      <nav v-else>
        <q-icon class="hamburger" name="menu" />
      </nav>
    </header>

    <q-page-container class="content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';


const $q = useQuasar()

</script>

<style scoped lang="scss">
@font-face {
  font-family: Obrazec;
  src: url('../assets/fonts/Obrazec\ 2.0.otf');
}

.icon {
  color: white;
}

.menu {
  display: flex;
  padding-right: 1rem;

  li {
    padding-inline: 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 10;
    transition: all 0.25s ease-in-out;
  }

  a {
    color: $text-primary;
    transition: all 0.25s ease-in-out;
  }

  li:hover {
    transform: translateY(-5px);
    z-index: 9;

    a {
      color: $text-accent;
    }
  }

  li>.icon {
    color: $text-accent;
  }
}

.hamburger {
  font-size: 1.5rem;
  color: $text-primary;
}

header {
  width: 100%;
  position: relative;
  padding: 0.3rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: Obrazec;
  color: $text-primary;
  font-size: clamp(2rem, 1.2rem + 4vw, 5rem);
}

.logo-second {
  color: $text-accent;
}

.glb {
  min-height: 100vh;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0)), url('../assets/photos/landing_desktop.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.content {
  min-height: 100%;
  flex: 1;
  display: flex;
}
</style>