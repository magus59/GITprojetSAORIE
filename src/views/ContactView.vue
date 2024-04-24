<template>
    <div id="top">
      <FormComponent />
  </div>
</template>

<script lang="ts">
import FormComponent from '@/components/FormComponent.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    FormComponent,
  },
});
</script>

<style lang="scss" scoped>

</style>