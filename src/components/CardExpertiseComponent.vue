<template>
    <ul>
        <a @click="toggleSection('data2')">
            <li>Data</li>
        </a>
        <a @click="toggleSection('cloud2')">
            <li>Cloud</li>
        </a>
        <a @click="toggleSection('securite2')">
            <li>Sécurité</li>
        </a>
        <a @click="toggleSection('ia2')">
            <li>IA</li>
        </a>
        <!-- <a id="close" href="#ia3" @click="toggleSection('ia3')">
            <li>X</li>
        </a> -->
    </ul>
    <div id="data2"></div>
    <div class="global" v-show="activeSection === 'data2'">
        <div class="card-expertise">
            <div class="h2">
                <h2>DATA</h2>
            </div>
        </div>
        <div class="card-expertise__image">
        </div>
        <div class="card-expertise__content">
            <div id="data" class="data_p">
                <div class="background1">
                    Dans un univers où les données redéfinissent sans cesse les règles économiques, contraignant les
                    entreprises à se réinventer quotidiennement, nous offrons des solutions qui exploitent pleinement
                    les montagnes de données collectées. Ces solutions permettent à nos clients de piloter leur
                    entreprise avec assurance et de prendre des décisions éclairées, grâce à une analyse approfondie des
                    données à leur disposition.
                </div>
            </div>
        </div>
        <div class="metiers">
            <p>Data Architect</p>
            <p>Data Scientist</p>
            <p>Data Data Engineer</p>
            <p>Data Analyst</p>
            <p>Consultant BI</p>
            <p>Business Analyst</p>
        </div>
    </div>

    <div id="cloud2"></div>
    <div class="global2" v-show="activeSection === 'cloud2'">
        <div class="card-expertise">
            <div class="h2">
                <h2>CLOUD</h2>
            </div>
        </div>
        <div class="card-expertise__image2">
        </div>
        <div class="card-expertise__content">
            <div id="cloud">
                <div class="background1">
                    Dans le domaine du cloud computing, nous mettons à votre disposition notre savoir-faire pour migrer
                    vos infrastructures vers le cloud, que ce soit public, privé ou hybride. Nos architectes cloud
                    conçoivent des architectures hautement disponibles et évolutives, utilisant des services tels que
                    les conteneurs, les microservices et le serverless computing. Nos ingénieurs en DevOps automatisent
                    le déploiement et la gestion des applications dans le cloud, en utilisant des outils comme Docker,
                    Kubernetes et Terraform, garantissant ainsi une infrastructure fiable et flexible.
                </div>
            </div>
        </div>
        <div class="metiers">
            <p>Architecte Cloud
            </p>
            <p>Ingénieur Cloud Computing
            </p>
            <p>Technicien Cloud
            </p>
            <p>Devops</p>
        </div>
    </div>

    <div id="securite2"></div>
    <div class="global3" v-show="activeSection === 'securite2'">
        <div class="card-expertise">
            <div class="h2">
                <h2>SÉCURITÉ</h2>
            </div>
        </div>
        <div class="card-expertise__image3">
        </div>
        <div class="card-expertise__content">
            <div id="securite">
                <div class="background1">
                    La sécurité des systèmes d'information est au cœur de nos préoccupations. Nos spécialistes en
                    sécurité informatique mettent en place des stratégies et des solutions pour protéger vos données,
                    vos réseaux et vos applications contre les menaces internes et externes.
                </div>
            </div>
        </div>
        <div class="metiers">
            <p>Ingénieur Cybersécurité
            </p>
            <p>Pentester</p>
            <p>Consultant en Cybersécurité
            </p>
            <p>Architecte Cybersécurité
            </p>
            <p>RSSI
            </p>
        </div>
    </div>

    <div id="ia2"></div>
    <div class="global4" v-show="activeSection === 'ia2'">
        <div class="card-expertise">
            <div class="h2">
                <h2>IA</h2>
            </div>
        </div>
        <div class="card-expertise__image4">
        </div>
        <div class="card-expertise__content">
            <div id="ia">
                <div class="background1">
                    Dans un écosystème où la révolution technologique redéfinit les interactions humaines et les modes
                    de travail, notre expertise en intelligence artificielle ouvre des horizons inédits pour nos
                    clients. En intégrant des solutions d'IA à leurs processus métier, nous les aidons à automatiser des
                    tâches, à analyser des données complexes et à prendre des décisions. Nos solutions personnalisées
                    d'intelligence artificielle les positionnent à la pointe de l'innovation, leur permettant de saisir
                    pleinement les opportunités de cet univers numérique en mutation.
                </div>
            </div>
        </div>
        <div class="metiers">
            <p>Développeur IA</p>
            <p>Consultant IA</p>
        </div>
    </div>
    <p id="paragraph_expertise" v-show="activeSection === ''">
        Saori Consulting est une ESN innovante spécialisée dans la fourniture de solutions numériques sur mesure pour
        les
        entreprises de toutes tailles. <br>
        Fortement ancrés dans l'univers technologique, notre équipe d'experts techniques hautement qualifiés combine son
        savoir-faire spécialisé pour offrir des solutions informatiques de pointe. Notre parcours témoigne de notre
        engagement envers l'excellence et notre passion partagée pour la transformation numérique.
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
    data() {
        return {
            activeSection: ''
        };
    },
    methods: {
        toggleSection(sectionId: string) {
            this.activeSection = sectionId === this.activeSection ? '' : sectionId;
        }
    },

});
</script>


<style lang="scss" scoped>
ul {
    position: absolute;
    top: 20rem;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    font-size: 1.3rem;
    background-image: linear-gradient(to bottom, #ffffff, #d3def8);
    z-index: 3;

    a {
        text-decoration: none;
    }

    #close li {
        color: rgb(226, 30, 30);
        text-align: center;
    }

    li {
        list-style-type: none;
        text-decoration: none;
        font-weight: 500;
        margin: 0 1rem;
        color: var(--primary-color);
        padding: 0.5rem;
        background-image: linear-gradient(to bottom, #ffffff, #d3def8);
        border-radius: 20%;
        cursor: pointer;

        &:hover {
            background-image: linear-gradient(to bottom, #d3def8, #d3def8);
        }
    }

}

.global,
.global2,
.global3,
.global4 {
    display: flex;
    overflow: hidden;
    flex-direction: row;
    margin: 0 0 2rem 0;
    width: 90%;
    min-height: 250px;
    margin-left: 5%;
    background: linear-gradient(to bottom, var(--primary-color), #1780eac4);


    p {
        width: 70%;
        color: white;
    }
}

.card-expertise {
    display: flex;
    justify-content: left;
    align-items: center;
    // overflow: hidden;
    height: auto;
    width: 100px;
    margin-right: -100px;
    background: linear-gradient(to bottom, var(--primary-color), #1780eac4);
    opacity: 0.7;

    .h2 {
        text-align-last: left;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        padding: 1rem;
        font-weight: bold;
        color: #ffffff;
        z-index: 1;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        min-height: 10rem;
    }
}


.card-expertise__image,
.card-expertise__image2,
.card-expertise__image3,
.card-expertise__image4 {
    justify-content: center;
    align-items: center;
    width: 15%;
    min-width: 20rem;
    background-size: cover;
    background-position: center;
    overflow: hidden;
}

.card-expertise__image {
    background-image: url(https://media.istockphoto.com/id/956247164/fr/photo/couloir-de-la-salle-des-serveurs-avec-des-racks-de-serveurs-dans-le-datacenter-illustration-3d.jpg?s=2048x2048&w=is&k=20&c=Z4BHDNGb4hCsZWzZUWUPGZtYO9h9jLJ_VtwTFcdbLuY=);
}

.card-expertise__image2 {
    background-image: url(https://media.istockphoto.com/id/1651039452/fr/photo/concept-de-transfert-de-donn%C3%A9es-de-technologie-cloud-et-edge-computing-une-grande-ic%C3%B4ne-de.jpg?s=2048x2048&w=is&k=20&c=P615-ZKdJWO0KvMO5mWjywrgMQcXYNz8sJYket_oXOo=);
}

.card-expertise__image4 {
    background-image: url(https://media.istockphoto.com/id/1393651004/fr/photo/femme-daffaires-attrayante-avec-un-visage-de-robot-sur-fond-blanc.jpg?s=2048x2048&w=is&k=20&c=6PAUQribOLMEbHlmKn7Vp-8jRqVFShFkxaK1in1RkiY=);
}

.card-expertise__image3 {
    background-image: url(https://media.istockphoto.com/id/1325214557/fr/photo/mains-prot%C3%A9geant-les-informations-de-donn%C3%A9es-personnelles-sur-la-tablette-concept-de-services.jpg?s=2048x2048&w=is&k=20&c=DW4wTPGia-4IO2oJDz6OvcKDiXubtnCjesQfdXe8S2E=);
}

.card-expertise__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    color: rgb(255, 255, 255);
    padding: 1rem;
    font-size: 1.2rem;

    .background1,
    .background2,
    .background3,
    .background4,
    .background5,
    .background6,
    .background7 {

        transition: background-position 0.9s linear;


        // &:hover {
        //     background: linear-gradient(to left, rgb(13, 182, 197) 0%, rgba(13, 182, 197, 0) 100%, transparent 0%, transparent 0%);
        //     background-size: 200% 100%;
        //     background-position: -100% 0;
        // }
    }

    .gras {
        font-weight: 500;
        color: #ffffff;
    }

}

#paragraph_expertise {
    color: var(--primary-color);
    font-size: 1.2rem;
    width: 60%;
    margin: 0 auto;
}

.metiers {
    width: 30%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.metiers p{
    margin: 4px;
}

@media (max-width: 1000px) {

    .global,
    .global2,
    .global3,
    .global4 {
        display: flex;
        flex-direction: column;
        margin: 4rem 0;
        width: 95%;
        margin-left: 2.5%;

        p {
            width: 100%;
        }
    }

    .card-expertise {
        justify-content: center;
        height: 5rem;
        width: 100%;
        margin-bottom: -30%;
        opacity: 0.7;

        .h2 {
            writing-mode: horizontal-tb;
            transform: rotate(360deg);
            font-size: 1.8rem;
        }
    }

    .card-expertise__image,
    .card-expertise__image2,
    .card-expertise__image3,
    .card-expertise__image4 {
        width: 100%;
        min-height: 30rem;
        max-height: 30rem;
        background-position: center;
    }

    .metiers {
    width: 100%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

}

@media (max-width: 650px) {

    .global,
    .global2,
    .global3,
    .global4 {
        background-color: #eaeaea;
    }

    .card-expertise__image,
    .card-expertise__image2,
    .card-expertise__image3,
    .card-expertise__image4 {
        width: 100%;
        margin-left: 0;
        max-height:17rem;
        min-height: 17rem;
    }

    .card-expertise {
        justify-content: center;
        width: 100%;
        margin-left: 0;
        margin-bottom: -100px;
        opacity: 0.7;
    }

    a {
        margin: 0;

        li {
            font-size: 1rem;
            margin: 0;
        }
    }

}
</style>