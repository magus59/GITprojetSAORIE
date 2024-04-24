<template>
  <div>
    <nav class="nav_desktop">
      <div class="nav_items">
        <router-link @click="scrollToTop" to="/"><img class="logo_nav" src="../public/img/test_logo.png"
            alt="logo"></router-link>
        <router-link @click="scrollToTop" class="item" to="/about">Qui sommes nous?</router-link>
        <router-link @click="scrollToTop" class="item" to="/expertise">
          Nos expertises
        </router-link>
        <router-link @click="scrollToTop" class="item" to="/values">Nos valeurs</router-link>
        <router-link @click="scrollToTop" class="item" to="/contact">Contact</router-link>
      </div>
    </nav>
    <nav class="nav_mobile" v-show="isMenuVisible" @click="hideMenu">
      <img class="item_logo" src="../public/img/croix.png" alt="logo" @click="hideMenu">
      <div class="nav_items">
        <router-link @click="scrollToTop" to="/"><img class="logo_nav" src="../public/img/test_logo.png"
            alt="logo"></router-link>
        <router-link @click="scrollToTop" class="item" to="/about">Qui sommes nous?</router-link>
        <router-link @click="scrollToTop" class="item" to="/expertise">
          Nos expertises
        </router-link>
        <router-link @click="scrollToTop" class="item" to="/values">Nos valeurs</router-link>
        <router-link @click="scrollToTop" class="item" to="/contact">Contact</router-link>
      </div>
    </nav>
    <router-link @click="scrollToTop" to="/">
    </router-link>
    <router-link @click="scrollToTop" to="/">
      <img class="mobile_logo" :src="getImagePath($route)" alt="logo">
    </router-link>
    <img class="menu_burger" @click="toggleMenu" :src="getImagePath2($route)" alt="menu burger">
    <router-view />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationNormalized } from 'vue-router';

export default defineComponent({
  data() {
    return {
      isMenuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
      if (this.isMenuVisible) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    },
    hideMenu() {
      this.isMenuVisible = false;
      document.body.classList.remove('no-scroll');
    },
    isHome(): boolean {
      return (this.$route as RouteLocationNormalized).name === 'expertise' || (this.$route as RouteLocationNormalized).name === 'home' ;
    },
    getImagePath(route: RouteLocationNormalized): string {
      return this.isHome() ? require('../../site_aghi_soso/public/img/test_logo.png') : require('../../site_aghi_soso/public/img/test_logo_bleu.png');
    },
    isHomeBurger(): boolean {
      return (this.$route as RouteLocationNormalized).name === 'expertise' 
      || (this.$route as RouteLocationNormalized).name === 'home'
      ;
    },
    getImagePath2(route: RouteLocationNormalized): string {
      return this.isHomeBurger() ? require('../../site_aghi_soso/public/img/burger_blanc.svg') : require('../../site_aghi_soso/public/img/blue_burger.svg');
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
  }
});
</script>


<style lang="scss">
:root {
  --primary-color: #09109c;
  --backroud-light: rgb(240, 240, 241);
}

*,
html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Prompt", sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.4;
  overflow: hidden;
}

body{
  z-index: -8;
  background-color: var(--backroud-light);
}

canvas{
  width: 100%;
  height: 100%;
}

.nav_mobile {
  display: none;
}

.mobile_logo {
  display: none;
}

.no-scroll {
  overflow: hidden;
}

.sub-menu {
  display: none;
  position: absolute;
  flex-direction: column;
  top: 100%;
  width: 100%;
  left: 0;
  background: linear-gradient(to bottom, #09109c, #131b4c);
  padding: 10px;
  z-index: 4;
}

.sub-menu a {
  color: white;
  text-align: left;
  margin: 1rem;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;

  &:hover {
    color: #b61919;
  }
}

.nos-expertises {
  position: relative;
  flex-direction: column;
}

.nos-expertises:hover .sub-menu {
  display: flex;
}

.sub-menu router-link {
  display: flex;
}

.item_logo {
  display: none;
}

nav {
  background-image: linear-gradient(to bottom, #131b4c, #09109c);
  opacity: 0.7;
  position: fixed;
  width: 100%;
  z-index: 4;

  .nav_items {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .item {
      font-weight: 400;
      color: #ffffff;
      text-decoration: none;
      padding: 1rem;

      &:hover {
        background-color: #aaaaaa23;
      }
    }

    .logo_nav {
      padding: 0 1rem;
    }

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 7rem;
    }
  }

  &:hover {
    opacity: 1;
  }
}

.menu_burger {
  display: none;
}

@media (max-width:650px) {

  .nav_desktop {
    display: none;
  }

  .nav_mobile {
    display: block;
  }

  .mobile_logo {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 130px;
  }

  nav {
    height: 100vh;
    opacity: 1;
    display: block;
    padding: 10rem 0;

    .nav_items {
      .logo_nav {
        width: 180px;
      }
    }

    .nav_items {
      flex-direction: column;
      text-align: center;

      .item {
        font-size: 1.8rem;
        width: 100%;

        &:hover {
          background-color: #aaaaaa23;
        }
      }
    }
  }

  .menu_burger {
    position: absolute;
    display: block;
    position: absolute;
    width: 3rem;
    right: 1rem;
    top: 1rem;
  }

  .item_logo {
    position: absolute;
    display: block;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    z-index: 6;
  }

}
</style>
