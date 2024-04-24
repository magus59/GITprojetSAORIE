<template>
  <div class="footer">
    <div class="div1">
      <img src="../../public/img/x_white.png" alt="">
      <img src="../../public/img/in_white.png" alt="" />
      <img src="../../public/img/facebook_white.png" alt="" />
      <img src="../../public/img/instagram_white.png" alt="" />
    </div>
    <div class="div2">Copyright © 2024 SAORI Consulting - All rights reserved</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 10rem;
  background-color: var(--primary-color);
  background: linear-gradient(to bottom, #09109c, #0b547f);
  margin-top: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 1.5rem;
    margin: 0 0.7rem;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  .div2 {
    margin-top: 3rem;
    text-align: center;
  }
}

@media (max-width:650px) {
  .footer {
    font-size: 0.8rem;
  }
}
</style>
