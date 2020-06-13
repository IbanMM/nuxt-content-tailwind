<template>

    <div>

        <div class="container mx-auto mt-16 textbbdd">

            <nuxt-content :document="page" />

            <Search />
        
        </div>

        <div class="bg-gray-200">

            <div class="container mx-auto mt-16 bg-color-">

                <last-products
                    :products="products"
                />

            </div>

        </div>

    </div>

</template>

<script>

import LastProducts from '~/components/LastProducts.vue'
import Search from '~/components/Search.vue'

export default {

    components: {

        LastProducts,
        Search

    },

    data() {

        return {

            page: false,
            products: false

        }

    },

    async fetch(){

        this.page =  await this.$content('index').fetch()
        this.products = await this.$content('products').sortBy('id').limit(8).fetch()

    },

}
</script>

<style lang="postcss">

    @tailwind base;

    .textbbdd h1 {
        @apply text-2xl;
        @apply font-tit;
    }

    .textbbdd h2 {
        @apply text-xl;
        @apply font-tit;
        @apply mt-8;
        @apply pb-4;
    }

    .textbbdd h3 {
        @apply text-lg;
        @apply font-tit;
        @apply mt-8;
        @apply pb-4;
    }

    .textbbdd a {
        @apply text-teal-600;
    }
  
</style>
