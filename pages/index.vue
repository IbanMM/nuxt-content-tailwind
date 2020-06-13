<template>

  <div class="container mx-auto">

    <nuxt-content :document="page" />

    <last-products
      :products="products"
    />

  </div>

</template>

<script>

import LastProducts from '~/components/LastProducts.vue'

export default {

  components: {

    LastProducts

  },

  data() {

    return {

      page: false,
      products: false

    }

  },

  async fetch(){

    this.page =  await this.$content('index').fetch();
    this.products = await this.$content('products').limit(5).fetch();
    
  },

}
</script>

<style lang="postcss">

  @tailwind base;

  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  h3 {
    @apply text-lg;
  }
  a {
    @apply text-blue-600 underline;
  }
  
</style>
