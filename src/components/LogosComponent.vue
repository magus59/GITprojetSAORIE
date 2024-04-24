<template>
  <h2 id="nos_expertises">Nos expertises</h2>
  <div class="logosComponent">
    <div class="data">
      <div class="container_logo">
        <img src="../../public/img/data.png" alt="">
      </div>
      <p>Data/ BI
        <button class="button_data">+</button>
      </p>
      <div class="liste_commun liste1" id="liste1">
        <ul>
          <li>Data Architect</li>
          <li>Data Scientist</li>
          <li>Data Engineer</li>
          <li>Data Analyst</li>
          <li>Consultant BI</li>
          <li>Business Analyst </li>
        </ul>
      </div>
    </div>
    <div class="ia">
      <div class="container_logo">
        <img src="../../public/img/ia.png" alt="">
      </div>
      <p>IA
        <button class="button_ia">+</button>
      </p>
      <div class="liste_commun liste5" id="liste5">
        <ul>
          <li>Développeur IA</li>
          <li>Consultant IA</li>
        </ul>
      </div>
    </div>
    <div class="cloud">
      <div class="container_logo">
        <img src="../../public/img/cloud.png" alt="">
      </div>
      <p>Cloud
        <button class="button_cloud">+</button>
      </p>
      <div class="liste_commun liste2" id="liste2">
        <ul>
          <li>Architecte Cloud</li>
          <li>Ingénieur Cloud Computing</li>
          <li>Technicien Cloud</li>
          <li>Devops</li>
        </ul>
      </div>
    </div>
    <div class="Sécurité">
      <div class="container_logo">
        <img src="../../public/img/cyber.png" alt="">
      </div>
      <p>Sécurité
        <button class="button_securite">+</button>
      </p>
      <div class="liste_commun liste3" id="liste3">
        <ul>
          <li>Ingénieur Cybersécurité</li>
          <li>Pentester</li>
          <li>Consultant en Cybersécurité</li>
          <li>Architecte Cybersécurité </li>
          <li>Responsable de la sécurité des systèmes d'information (RSSI)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogosComponent',
  props: {
    name: String,
    text: String,
  },
  mounted() {
    const images = document.querySelectorAll('.logosComponent p');

    images.forEach((image) => {
      const parent = image.parentElement;
      if (parent) {
        const liste = parent.querySelector('.liste_commun') as HTMLElement;

        image.addEventListener('click', () => {
          document.querySelectorAll('.liste_commun').forEach((openedList) => {
            if (openedList !== liste) {
              (openedList as HTMLElement).style.display = 'none';
            }
          });

          if (liste.style.display === 'none' || liste.style.display === '') {
            liste.style.display = 'flex';
          } else {
            liste.style.display = 'none';
          }
        });
      }
    });

    document.addEventListener('click', (event) => {
      let targetElement = event.target as HTMLElement | null;
      while (targetElement) {
        if (targetElement.classList.contains('logosComponent')) {
          return;
        }
        targetElement = targetElement.parentElement;
      }

      document.querySelectorAll('.liste_commun').forEach((openedList) => {
        (openedList as HTMLElement).style.display = 'none';
      });
    });
  },
});
</script>





<style lang="scss" scoped>
h2 {
  text-align: center;
  padding-top: 5rem;
  font-size: 3rem;
  font-weight: 500;
  color: var(--primary-color);
}

.logosComponent {
  padding: 8rem 0;
  width: 100%;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);

  button {
    border-radius: 50%;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    height: 25px;
    width: 25px;
    margin: 0 0 0 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      border: 0px solid var(--primary-color);
      background-color: var(--primary-color);
      color: white;
    }
  }

  .data,
  .cloud,
  .ia,
  .Sécurité {
    .container_logo {
      min-height: 6.2rem;
    }
  }

  .data img,
  .cloud img,
  .ia img,
  .Sécurité img {
    width: 5rem;
  }

  .data p,
  .ia p,
  .cloud p,
  .Sécurité p {
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .liste_commun {
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;

    ul {
      display: flex;
      flex-direction: column;
      top: 12rem;
    }

    li {
      list-style-type: none;
      color: var(--primary-color);
      font-weight: bold;
      margin: 0.5rem 0;
      font-size: 1rem;
      font-weight: 400;
    }
  }

}

@media (max-width:650px) {

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  .logosComponent {
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem 0;

    .data img,
    .cloud img,
    .Sécurité img,
    .ia img {
      width: 8rem;
    }

    .data,
    .cloud,
    .Sécurité,
    .ia {
      margin-bottom: 4rem;
    }

  }

}

@media (max-width:410px) {

  .logosComponent {

    .data img,
    .cloud img,
    .Sécurité img,
    .ia img {
      width: 5rem;
    }

  }

}
</style>