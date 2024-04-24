<template>
    <div class="ConfianceComponent">
        <p>Ils nous ont fait confiance</p>
        <div class="img_entreprises">
            <img src="../../public/img/air_liquide.png" alt="">
            <img src="../../public/img/bnp.png" alt="">
            <img src="../../public/img/gdf_savelys.png" alt="">
            <img class="idkids" src="../../public/img/idkids.png" alt="">
            <img src="../../public/img/renault.png" alt="">
            <img src="../../public/img/saint-gobain.png" alt="">
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "ConfianceComponent",
};
</script>

<style lang="scss" scoped>
.ConfianceComponent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8rem 0;
    background-color: #b5afaf8f;
}

.ConfianceComponent p {
    font-size: 3rem;
    font-weight: 500;
    color: rgb(11, 11, 113);
    margin-bottom: 1rem;
}

.img_entreprises {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
}

.img_entreprises img {
    height: 3rem;
    margin: 1rem;
}

.img_entreprises .idkids {
    height: 5rem;
    margin: 1rem;
}

@media (max-width:1100px) {
    .img_entreprises {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }

    .ConfianceComponent p {
        margin-bottom: 5rem;
    }
}

@media (max-width:650px) {

    .ConfianceComponent {
        padding: 0;
        margin: 2rem 0;
    }

    .ConfianceComponent p {
        display: flex;
        text-align: center;
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 5rem;
        margin-top: 1rem;
    }

    .img_entreprises {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }

    .img_entreprises img {
        margin: 2rem 0;
    }

}
</style>