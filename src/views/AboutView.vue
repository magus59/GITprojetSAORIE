<template>
  <div id="about">
    <CardNousComponent />
</div>
<div class="footer_about">
  <FooterComponent />
</div>
</template>

<script lang="ts">
import CardNousComponent  from '@/components/CardNousComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
name: 'AboutView',
components: {
  CardNousComponent,
  FooterComponent,
},
});
</script>

<style lang="scss" scoped>

</style>
