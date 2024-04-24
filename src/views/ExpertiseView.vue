<template>
  <div class="header">
    <h2>Nos expertises</h2>
  </div>
  <div class="expertise">
    <CardExpertiseComponent />

    <!-- <p id="paragraph_expertise">
      Saori Consulting est une ESN innovante spécialisée dans la fourniture de solutions numériques sur mesure pour les
      entreprises de toutes tailles. <br>
      Fortement ancrés dans l'univers technologique, notre équipe d'experts techniques hautement qualifiés combine son savoir-faire spécialisé pour offrir des solutions informatiques de pointe. Notre parcours témoigne de notre engagement envers l'excellence et notre passion partagée pour la transformation numérique.
    </p> -->

    <router-link @click="scrollToTop" class="item" :to="{ path: '/contact', hash: '#top' }"><button
        class="boutton_contact">Nous
        contacter</button></router-link>
  </div>
  <div class="footer">
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardExpertiseComponent from '@/components/CardExpertiseComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "ExpertiseView",

  components: {
    CardExpertiseComponent,
    FooterComponent,
  },

  mounted() {
    gsap.from('#paragraph_expertise', {
      opacity: 1,
      x: 300,
      duration: 1.5,
      scrollTrigger: {
        trigger: '#paragraph_expertise',
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
        once: true
      }
    });
  },
  methods: {
    scrollToTop() {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    },
  },
});
</script>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://images.pexels.com/photos/4623491/pexels-photo-4623491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  height: 20rem;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 4rem;
  background-position: center;

  h2 {
    color: rgb(255, 255, 255);
    font-size: 4rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }
}

.expertise {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 60vh;
  overflow: hidden;

  p {
    color: var(--primary-color);
    font-size: 1.2rem;
    width: 60%;
    margin: 0 auto;
  }

  .boutton_contact {
    width: 13rem;
    height: 3rem;
    background: linear-gradient(to right, #222ac0, #131b4c);
    color: rgb(255, 255, 255);
    border: 0;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    margin-top: 3rem;
    font-weight: 500;
    margin-left: 20%;
    cursor: pointer;

    &:hover {
      background: #222ac0;
      transform: scale(0.98);
    }
  }
}

@media (max-width:650px) {
  .header {
    h2 {
      font-size: 3rem;
    }
  }
}
</style>