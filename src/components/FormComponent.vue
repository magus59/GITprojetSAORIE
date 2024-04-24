<template>
    <div class="form_global">
        <div class="formulaire">
            <div class="form2">
                <h2>
                    Nous contacter
                </h2>
                <p>
                    Plongez dans l'avenir avec Saori Consulting. En tant qu'experts en services numériques, nous sommes
                    là pour vous aider à naviguer dans un monde en constante évolution. Découvrez comment notre
                    expertise peut transformer votre vision en réalité.
                </p>
                <div class="img_form">
                    <div class="adresse">
                        <img src="../../public/img/emplacement.png" alt="localisation">
                        <p>Lille</p>
                    </div>
                    <div class="mail">
                        <img src="../../public/img/enveloppe.png" alt="enveloppe">
                        <p>adresse.mail@gmail.com</p>
                    </div>
                    <div class="tel">
                        <img src="../../public/img/telephone-intelligent.png" alt="téléphone">
                        <p>06 50 48 12 51</p>
                    </div>
                    <div class="in">
                        <img src="../../public/img/linkedin.png" alt="linkedin">
                        <p>http:ufhzukhefuefz.com</p>
                    </div>
                </div>
            </div>
            <div class="form">
                <div class="soso">
                    <p> Les candidats intéressés par une collaboration sont priés de transmettre leur CV et leur lettre
                        de
                        motivation par mail.</p>
                        <img src="../../public/img/test_logo.png" alt="logo saori">
                </div>
            </div>
        </div>

    </div>
    <div class="footer_form">
        <FooterComponent />
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
    name: 'HomeView',
    components: {

        FooterComponent,
    },


    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log('Données du formulaire:', this.formData);

            this.resetForm();
        },
        resetForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.subject = '';
            this.formData.message = '';
        }
    }
});
</script>

<style lang="scss" scoped>
.footer_form {
    margin: 1rem 0 0 0;
}

.form_global {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    min-height: 90vh;
    overflow: hidden;
    width: 100%;
}

.formulaire {
    display: flex;
    min-height: 32rem;
    width: 90%;
    margin-left: 5%;
    flex-direction: row;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;

    p {
        width: 90%;
        font-size: 1.2rem;
        color: var(--primary-color);
    }

    .soso {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 25rem;
        max-width: 25rem;
        margin: auto;
        background: linear-gradient(to top, var(--primary-color), #131b4c);
        margin-top: 2rem;
        border-radius: 20%;

        h2 {
            font-size: 1.7rem;
            color: white;
            text-align: center;
        }

        p {
            font-size: 1rem;
            font-weight: 300;
            width: 80%;
            color: white;
            margin-bottom: 3rem;
        }

        img {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

.form2 {
    width: 50%;
    height: 35.4rem;
    padding: 1rem 0;
    margin: 3rem 0;
    margin-top: 7rem;

    h2 {
        color: var(--primary-color);
        font-size: 2rem;
        margin-left: 2rem;
        }

    p {
        color: var(--primary-color);
        font-size: 1.2rem;
        margin-top: 2rem;
        text-align: left;
        width: 90%;
        margin-left: 5%;
    }

    .adresse,
    .mail,
    .tel,
    .in {
        display: flex;
        align-items: end;
        justify-content: center;
    }

    .adresse p,
    .mail p,
    .tel p,
    .in p {
        display: flex;
        align-items: center;
    }

    .adresse img {
        height: 30px;
    }
    .mail img {
        height: 20px;
    }
    .tel img {
        height: 30px;
    }
    .in img {
        height: 20px;
    }

    .img_form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 2rem;
        margin-bottom: 1rem;
        width: 100%;
    }
}


button {
    width: 13rem;
    height: 3rem;
    background: linear-gradient(to right, var(--primary-color), #131b4c);
    color: rgb(255, 255, 255);
    border: 0;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: var(--primary-color);
        transform: scale(0.98);
    }
}

@media (max-width: 1000px) {
    .formulaire {
        flex-direction: column;
        height: auto;
        margin-top: 8rem;
    }


    .form,
    .form2 {
        width: 100%;
        margin: auto;
    }

    .form2 {
        width: 100%;
        height: auto;
        margin: 2rem 0;

        .img_form {
            margin-left: 1rem;

            p {
                font-size: 1rem;
            }
        }
    }

    .form {

        img,
        p {
            margin: auto;
            width: 80%;
        }
    }

}

@media (max-width: 450px) {
    .div1 {

        .soso {
            width: 90%;
            margin: auto;

            h2 {
                font-size: 1.5rem;
            }
        }
    }

}
</style>