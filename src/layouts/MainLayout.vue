<template>
  <q-layout class="glb">
    <header>
      <h1 class="logo"><router-link class="logo-text" to="/">Buckle<span class="logo-second">UP</span></router-link>
      </h1>
      <nav v-if="!$q.screen.lt.md">
        <ul class="menu">
          <li>
            <q-icon class="icon" name="home" />
            <router-link to="/" class="subpage-link">Home</router-link>
          </li>
          <li>
            <q-icon class="icon" name="star" />
            <router-link to="classes" class="subpage-link">Classes</router-link>
          </li>
          <li>
            <q-icon class="icon" name="credit_card" />
            <router-link to="membership" class="subpage-link">Membership</router-link>
          </li>
          <li>
            <q-icon class="icon" name="fitness_center" />
            <router-link to="showcase" class="subpage-link">Showcase</router-link>
          </li>
          <li>
            <q-icon class="icon" name="pin_drop" />
            <router-link to="location" class="subpage-link">Location</router-link>
          </li>
        </ul>
      </nav>
      <nav v-else>
        <q-icon class="hamburger" name="menu" @click="changeDrawerState" :class="isDrawerOpen ? 'text-accent' : ''" />
        <q-drawer side="right" v-model="isDrawerOpen" class="drawer bg-primary">
          <ul class="menu menu__drawer">
            <li>
              <q-icon class="icon" name="home" />
              <router-link to="/" class="subpage-link">Home</router-link>
            </li>
            <li>
              <q-icon class="icon" name="star" />
              <router-link to="classes" class="subpage-link">Classes</router-link>
            </li>
            <li>
              <q-icon class="icon" name="credit_card" />
              <router-link to="membership" class="subpage-link">Membership</router-link>
            </li>
            <li>
              <q-icon class="icon" name="fitness_center" />
              <router-link to="showcase" class="subpage-link">Showcase</router-link>
            </li>
            <li>
              <q-icon class="icon" name="pin_drop" />
              <router-link to="location" class="subpage-link">Location</router-link>
            </li>
          </ul>
        </q-drawer>
      </nav>
    </header>

    <q-page-container class="content">
      <router-view />
    </q-page-container>

    <footer>

    </footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar()
const isDrawerOpen = ref(false)

const changeDrawerState = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

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

  &__drawer {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    li {
      width: 100%;
      height: 100%;
      margin-inline: auto;
      justify-content: center;
    }

    li+li {
      border-top: 2px solid grey;
    }
  }


  li {
    padding-inline: 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 10;
    transition: all 0.25s ease-in-out;
  }

  .subpage-link {
    color: $text-primary;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
  }

  li:hover {
    transform: translateY(-5px);
    z-index: 9;

    .subpage-link {
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
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

header::before {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.45);
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}

.logo {
  font-family: Obrazec;
  color: $text-primary;
  font-size: clamp(2rem, 1.2rem + 4vw, 4rem);
  line-height: normal;
}

.logo-text {
  color: $text-primary;
  text-decoration: none;
}

.logo-second {
  color: $text-accent;
}

.glb {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  min-height: 100%;
  flex: 1;
  display: flex;
}
</style>