<template>
  <q-layout class="glb">
    <header>
      <h1 class="logo"><router-link class="logo-text" to="/">Buckle<span class="logo-second">UP</span></router-link>
      </h1>
      <nav v-if="!$q.screen.lt.md">
        <ul class="menu">
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
            <q-icon class="icon" name="person" />
            <router-link to="about" class="subpage-link">About</router-link>
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
              <q-icon class="icon" name="person" />
              <router-link to="about" class="subpage-link">About</router-link>
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
  position: sticky;
  top: 0;
  padding: 0.3rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(38, 38, 38);
  background: linear-gradient(0deg, rgb(14, 14, 14) 0%, rgb(29, 29, 29) 100%);
  z-index: 10;
}

.logo {
  font-family: Obrazec;
  color: $text-primary;
  font-size: clamp(2rem, 1.2rem + 4vw, 5rem);
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