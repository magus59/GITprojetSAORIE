<template>
  <div class="ScrollTextComponent">
    <p class="p_ScrollTextComponent">{{ currentMessage }}</p>
    <div class="fleche_scroll">
      <img class="fleche_gauche" src="../../public/img/fleche-gauche2.png" alt="" @click="scrollPrevious">
      <img class="fleche_droite" src="../../public/img/fleche-gauche2.png" alt="" @click="scrollNext">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: 'ScrollTextComponent',

  data() {
    return {
      messages: [
        'Plongez dans l\'avenir avec Saori Consulting. En tant qu\'experts en services numériques, nous sommes là pour vous aider à naviguer dans un monde en constante évolution. Découvrez comment notre expertise peut transformer votre vision en réalité.',
        'Bienvenue sur la plateforme de Saori Consulting. Nous sommes une entreprise de services numériques dédiée à fournir des solutions innovantes et personnalisées pour répondre à vos besoins en matière de transformation numérique. Découvrez comment nous pouvons vous aider à atteindre vos objectifs.',
        'En tant qu\'ESN, nous plaçons nos valeurs au cœur de chaque projet, assurant ainsi une collaboration alignée et éthique.',
      ],
      currentIndex: 0,
      isPaused: false,
      intervalId: 0,
    };
  },

  computed: {
    currentMessage(): string {
      return this.messages[this.currentIndex];
    },
  },

  methods: {
    changeText() {
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    },
    scrollPrevious() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.messages.length - 1;
      } else {
        this.currentIndex = (this.currentIndex - 1) % this.messages.length;
      }
    },
    scrollNext() {
      this.changeText();
    },

    togglePause() {
      this.isPaused = !this.isPaused;

      if (this.isPaused) {
        clearInterval(this.intervalId);
      } else {
        this.intervalId = setInterval(() => {
          this.changeText();
        }, 4000);
      }
    },


  },

  beforeUnmount() {
    clearInterval(this.intervalId);
  },

  mounted() {
    this.changeText();

    if (!this.isPaused) {
      this.intervalId = setInterval(() => {
        this.changeText();
      }, 4000);
    }

    gsap.from('.p_ScrollTextComponent', {
      opacity: 1,
      x: 200,
      duration: 2,
      scrollTrigger: {
        trigger: '.p_ScrollTextComponent',
        start: 'top 100%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        once: true,
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.ScrollTextComponent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  font-size: 2rem;
  margin-top: 8rem;
  margin-bottom: 8rem;

  p {
    color: rgb(24, 31, 98);
    width: 60%;
    margin: auto;
    font-weight: 300;
    font-style: italic;
    height: 200px;
  }

  .fleche_scroll {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    img {
      margin-top: 6rem;
      height: 40px;

      &:hover {
        opacity: 0.7;
      }
    }

    .fleche_droite {
      transform: rotate(180deg);
      cursor: pointer;
    }

    .fleche_gauche {
      cursor: pointer;
    }
  }
}



@media (max-width:1440px) {

  .ScrollTextComponent {
    font-size: 1.5rem;

    p {
      font-weight: 300;
    }
  }
}

@media (max-width:812px) {

  .ScrollTextComponent {
    font-size: 1.5rem;

    p {
      height: 250px;
    }
  }

}

@media (max-width:600px) {

  .ScrollTextComponent {
    font-size: 1.3rem;

    p {
      width: 80%;
      height: 300px;
    }
  }

}
</style>