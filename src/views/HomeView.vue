<template>
  <div class="home">
    <div class="img_backgrounf"></div>
    <div class="fleche_div">
      <a @click="scrollToLogoComponent" href="#logoComponent"><img class="fleche" src="../../public/img/fleche3.png"
          alt="fleche pour descendre" /></a>
    </div>
    <div class="card">
      <div class="background_opacity"></div>
      <CardComponent :text="'Créateurs de solutions digitales sur mesure : notre approche pour votre succès.'" />
    </div>
    <div class="logoComponent" id="logoComponent">
      <LogosComponent />
    </div>
    <div class="ConfianceComponent">
      <ConfianceComponent />
    </div>
    <div class="scrollTextComponent">
      <ScrollTextComponent />
    </div>
    <div class="fleche_haut" v-if="showBackToTop" @click="scrollToTop">
      <img src="../../public/img/fleche_haut_bleu.png" alt="Flèche vers le haut">
    </div>
    <div class="footer">
      <FooterComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from '@/components/CardComponent.vue';
import LogosComponent from '@/components/LogosComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ScrollTextComponent from '@/components/ScrollTextComponent.vue';
import ConfianceComponent from '@/components/ConfianceComponent.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: 'HomeView',
  components: {
    CardComponent,
    LogosComponent,
    ConfianceComponent,
    ScrollTextComponent,
    FooterComponent,
  },

  data() {
    return {
      showBackToTop: false
    };
  },

  mounted() {
    gsap.from('.logosComponent', {
      opacity: 1,
      scale: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: '.logosComponent',
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
        once: true
      }
    });
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.showBackToTop = window.scrollY > 100; 
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    },
    scrollToLogoComponent() {
      const logoComponent = document.getElementById('logoComponent');
      if (logoComponent) {
        const targetOffset = logoComponent.offsetTop;
        const scrollDuration = 1000;
        const startTime = performance.now();
        const startOffset = window.pageYOffset || document.documentElement.scrollTop;

        const scrollAnimation = (currentTime: number, startTime: number, targetOffset: number, startOffset: number) => {
          const elapsedTime = currentTime - startTime;
          const scrollProgress = Math.min(elapsedTime / scrollDuration, 1);
          const newScrollPosition = startOffset + (targetOffset - startOffset) * scrollProgress;

          window.scrollTo(0, newScrollPosition);

          if (scrollProgress < 1) {
            requestAnimationFrame((currentTime) => scrollAnimation(currentTime, startTime, targetOffset, startOffset));
          }
        };

        requestAnimationFrame((currentTime) => scrollAnimation(currentTime, startTime, targetOffset, startOffset));
      }
    }
  },
});
</script>


<style lang="scss" scoped>
.img_backgrounf {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  min-height: 40rem;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  // background-image: url(../../public/img/pourri.jpg);
  background-image: url(https://media.istockphoto.com/id/1214111373/fr/photo/dans-le-cadre-de-linstallation-de-recherche-technologique-une-femme-chef-de-projet-discute.jpg?s=2048x2048&w=is&k=20&c=8hmXXqz2dYkP7x837Jo_kGFosn0Ero1rsuOvJkQff4A=);
  background-size: cover;
  background-position: center;
  // filter: grayscale(50%);
}

.background_opacity {
  z-index: -3;
  min-height: 40rem;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  // background-color: #1b075e50;
}

.fleche_div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;

  .fleche {
    position: absolute;
    width: 80px;
    margin: auto;
    margin-top: 90vh;
    cursor: pointer;
  }

  .fleche:hover {
    opacity: 0.7;
  }
}

.scrollTextComponent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  width: 100%;
}

.fleche_haut {
  display: none;
}

@media (max-width: 650px) {

  .fleche_haut {
    display: flex;
    position: fixed;
    bottom: 5rem;
    right: 1rem;

    img {
      height: 50px;
      width: 50px;
    }
  }

  .fleche_div {
    display: none;

    .fleche {
      display: none;
    }
  }

}

@media (max-height: 500px) {

  .fleche_div {
    display: none;

    .fleche {
      display: none;
    }
  }

}
</style>