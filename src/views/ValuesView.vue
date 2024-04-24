<template>
  <div class="global_valeur">
    <h1>
      Nos valeurs
    </h1>
    <p>
      Chez Saori Consulting, nous sommes guidés par cinq valeurs fondamentales qui définissent notre culture et notre
      engagement envers nos clients et partenaires. Nous nous engageons à fournir des solutions de la plus haute
      qualité, à agir avec intégrité et transparence, à promouvoir la collaboration pour des résultats exceptionnels, à
      stimuler l'innovation et la créativité pour rester à la pointe de notre industrie, et à placer nos clients au
      centre de nos préoccupations en répondant à leurs besoins et attentes avec professionnalisme et dévouement. Ces
      valeurs sont le fondement de tout ce que nous faisons et incarnent notre engagement envers l'excellence et la
      satisfaction de nos clients.
    </p>
    <div class="valeurs">
      <div class="soso" @mouseover="rotate">
        <h2>Qualité </h2>
        <p>
          Nous nous engageons à fournir des solutions de la plus haute qualité à nos clients, en veillant à ce que chaque produit ou service réponde aux normes les plus élevées.
        </p>
      </div>
      <div class="soso2" @mouseover="rotate2">
        <h2>Intégrité </h2>
        <p>
          Nous agissons avec intégrité, transparence et éthique dans toutes nos interactions, en maintenant la confiance et la crédibilité.
        </p>
      </div>
      <div class="soso3" @mouseover="rotate">
        <h2>Collaboration </h2>
        <p>
          Nous croyons au pouvoir de la collaboration et de la coopération, en travaillant en partenariat avec nos clients pour atteindre les résultats escomptés.
        </p>
      </div>
      <div class="soso4" @mouseover="rotate2">
        <h2>Innovation </h2>
        <p>
          Nous sommes constamment à la recherche de nouvelles idées et de nouvelles approches pour stimuler l'innovation et la créativité, en restant à la pointe de la technologie.
        </p>
      </div>
      <div class="soso5" @mouseover="rotate">
        <h2>Engagements</h2>
        <p>
          Nous plaçons nos clients au centre de nos préoccupations et nous nous engageons à répondre à leurs besoins et à leurs attentes avec professionnalisme, confidentatialité et dévouement.
        </p>
      </div>
    </div>
    <div class="footer3d">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: 'ValuesView',
  components: {
    FooterComponent
  },

  mounted() {
    gsap.from('.soso', {
      opacity: 1,
      y: 200,
      duration: 2,
      scrollTrigger: {
        trigger: '.soso',
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
        once: true
      }
    });
    gsap.from('.soso2', {
      opacity: 1,
      duration: 2,
      x: -300,
      scrollTrigger: {
        trigger: '.soso2',
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
        once: true
      }
    });
    gsap.from('.soso3', {
      opacity: 1,
      duration: 2,
      scale: 2,
      scrollTrigger: {
        trigger: '.soso3',
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
        once: true
      }
    });
    gsap.from('.soso4', {
      opacity: 1,
      x: 300,
      duration: 2,
      scrollTrigger: {
        trigger: '.soso4',
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
        once: true
      }
    });
    gsap.from('.soso5', {
      opacity: 1,
      y: 200,
      duration: 2,
      scrollTrigger: {
        trigger: '.soso5',
        start: 'top 100%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
        once: true
      }
    });
  },

});
</script>

<style lang="scss" scoped>
.global_valeur {
  padding-top: 8rem;
  overflow: hidden;

  h1 {
    height: 2rem;
    color: var(--primary-color);
    font-weight: bold;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 2rem;
  }

  p {
    width: 80%;
    margin-left: 10%;
    font-size: 1.2rem;
    color: var(--primary-color);
  }
}

.valeurs {
  display: grid;
  place-content: center;
  place-items: center;
  min-height: 80vh;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: -2rem;
  z-index: -99;
}

.soso,
.soso2,
.soso3,
.soso4,
.soso5 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
  margin: 1rem;
  width: 200px;
  min-height: 20rem;
  padding: 1rem;
  box-shadow: 5px 5px 5px  rgba(78, 77, 77, 0.194);
  background: linear-gradient(to bottom, #09109c84, #131b4c7c);

  &:hover {
    background: linear-gradient(to bottom, #09109c, #131b4c);
    color: white;
    width: auto;
    min-width: 350px;
    z-index: 2;

    h2 {
      color: white;
    }

    p {
      display: block;
    }
  }

  h2 {
    font-size: 1.7rem;
    color: rgb(255, 255, 255);
    margin-top: 1rem;
    text-align: center;
  }

  p {
    display: none;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
    padding: 1rem;
  }
}

@media (max-width: 1500px) {
  .valeurs {
    grid-template-columns: repeat(3, 1fr);
    min-height: 150vh;
  }
}

@media (max-width: 850px) {
  .soso,
.soso2,
.soso3,
.soso4,
.soso5 {

  &:hover {
    min-width: 0;
  }
  &:active {
    background: linear-gradient(to bottom, #09109c, #131b4c);
    color: white;
    width: auto;
    min-width: 0;
    z-index: 2;

    h2 {
      color: white;
    }

    p {
      display: block;
    }
  }
}
.valeurs {
    grid-template-columns: repeat(2, 1fr);
    min-height: 210vh;
  }
}

@media (max-width: 650px) {
  .soso,
.soso2,
.soso3,
.soso4,
.soso5 {

  &:hover {
    max-width: 250px;
  }
  &:active {
    background: linear-gradient(to bottom, #09109c, #131b4c);
    color: white;
    width: auto;
    min-width: 0;
    z-index: 2;
  }
}
  .valeurs {
    margin-top: 6rem;
  }
}

@media (max-width: 560px) {
  .valeurs {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
