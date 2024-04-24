<template>
    <div class="cardNous">
        <div class="div1">
            <div class="soso">
                <h2>Qui sommes nous </h2>
                <p> Saori Consulting est bien plus qu'une simple entreprise de services numériques. Notre équipe dynamique est composée d'experts passionnés par l'innovation et la
                    technologie. Notre mission est de fournir des solutions numériques de pointe qui répondent aux
                    besoins de nos clients et les aident à prospérer dans un monde numérique en constante évolution.</p>
                    
            </div>
            <div class="separation"></div>
            <div class="aghi">
                <h2>Notre approche</h2>

                <p> Nous croyons fermement à la puissance de la collaboration pour atteindre vos objectifs.
                    Nos actions et nos décisions sont guidées par nos principes fondamentaux, qui sont au cœur de tout ce que nous faisons : Qualité, Intégrité, Collaboration,Innovation et Engagement envers le Client.

                </p>
                <img src="../../public/img/test_logo.png" alt="logo saori">
            </div>
        </div>
        <div class="div2">
            <p class="germe">
                "La croissance germe là ou l'on sème les graines de l'innovation et de l'investissement."
            </p>
        </div>
        <router-link @click="scrollToTop" class="item" to="/contact"><button class="boutton_contact">Nous
                contacter</button></router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
    name: "CardNousComponent",

    mounted() {
        gsap.from('.soso', {
            opacity: 1,
            x: -200,
            duration: 2,
            scrollTrigger: {
                trigger: '.soso',
                start: 'top 100%',
                end: 'bottom 50%',
                toggleActions: 'play none none none',
                once: true
            }
        });
        gsap.from('.aghi', {
            opacity: 1,
            x: 200,
            duration: 2,
            scrollTrigger: {
                trigger: '.aghi',
                start: 'top 100%',
                end: 'bottom 50%',
                toggleActions: 'play none none none',
                once: true
            }
        });
        gsap.from('.germe', {
            opacity: 1,
            y: 200,
            duration: 3,
            scale: 0.3
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
.cardNous {
    width: 100%;
    overflow: hidden;
}

.separation {
    margin: 0.5rem 0;
}

.div1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .soso,
    .aghi {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        min-height: 28rem;
        width: 25rem;
        box-shadow: 5px 5px 5px rgba(78, 77, 77, 0.194);
        margin: 8rem 0.1rem 0 0.1rem;
        padding: 0.5rem;


        h2 {
            font-size: 1.5rem;
            color: white;
            margin-top: 0.5rem;
            text-align: center;
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            width: 80%;
            margin: auto;
            color: white;
        }

        img {
            width: 100px;
            margin-bottom: 0.5rem;
        }
    }
}

.aghi {
    background: linear-gradient(to bottom, var(--primary-color), #131b4c);
}

.soso {
    background: linear-gradient(to bottom, var(--primary-color), #131b4c);
}

.div2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 1rem;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

    p {
        font-size: 1.5rem;
        color: var(--primary-color);
        text-align: center;
        font-style: italic;
    }
}

.boutton_contact {
    width: 13rem;
    height: 3rem;
    background: linear-gradient(to right, var(--primary-color), #131b4c);
    color: rgb(255, 255, 255);
    border: 0;
    font-size: 1.2rem;
    margin-bottom: 8rem;
    font-weight: 500;
    margin-left: 43%;
    cursor: pointer;

    &:hover {
        background: var(--primary-color);
        transform: scale(0.98);
    }
}

@media (max-width: 850px) {
    .div1 {
        flex-direction: column;
        margin-top: 8rem;

        .soso,
        .aghi {
            margin: 0.5rem 0;
        }
    }

    .div2 {
        width: 90%;
        margin: auto;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .boutton_contact {
        margin-left: 5%;
    }
}

@media (max-width: 450px) {
    .div1 {

        .soso,
        .aghi {
            width: 90%;
            margin: auto;

            h2 {
                font-size: 1.5rem;
            }
        }
    }

    .soso {
    background: linear-gradient(to bottom, #131b4c, var(--primary-color));
}

}
</style>