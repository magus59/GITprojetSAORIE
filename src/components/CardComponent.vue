<template>
    <div class="cardComponent">
        <p class="title_banniere">{{ text }}</p>
        <router-link @click="scrollToTop" class="item" to="/contact"><button class="button_card">Nous contacter</button></router-link>
    </div>
</template>

<script lang="ts">

export default {
    name: 'CardComponent',

    props: {
        name: String,
        text: {
            type: String,
        },
    },
    methods: {
        scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    },
    },
}
</script>


<style lang="scss" scoped>
.cardComponent {
    position: absolute;
    top: 5rem;
    height: 30rem;
    width: 30rem;
    background-image: linear-gradient(to bottom, #09109c, #0b547f);
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    & p {
        position: absolute;
        top: 6rem;
        left: 1rem;
        font-weight: 500;
        font-size: 2.2rem;
        color: rgb(255, 255, 255);
        width: 80%;
    }

    .button_card {
        position: absolute;
        top: 25rem;
        left: 1rem;
        width: 13rem;
        height: 3rem;
        background: linear-gradient(to right, #bcbdbf, #ffffff);
        color: rgb(13, 11, 142);
        border: 0;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background: #ffffff;
            transform: scale(0.98);
        }
    }
}

@media (max-width:650px) {

    .cardComponent {
        display: flex;
        justify-content: center;
        width: 80%;
        left: 10%;
        margin-top: 2rem;

        & p {
            top: 3rem;
        }

    }
}

@media (max-width:410px) {

    .cardComponent {
        width: 80%;
        left: 10%;

        & p {
            top: 3rem;
            font-size: 2rem;
        }

        .button_card {
            width: 11rem;
        }
    }
}

@media (max-width:350px) {

    .cardComponent {

        & p {
            top: 3rem;
            font-size: 1.7rem;
        }

    }
}
</style>