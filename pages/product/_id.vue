<template>

    <div v-if="product">

        <div class="container mx-auto pt-2 pb-16 mt-1 ">

            <div class="rounded-md px-6 py-2 mb-16 w-full bg-teal-400 text-white text-xs no-underline divide-x divide-white">

                <n-link to="/" class="underline pr-4">Inicio</n-link>

                <span class="px-4">{{product.name}}</span>
            
            </div>

            <h1 class="text-6xl font-bold text-teal-400">{{product.name}}</h1>

        </div>

        <div class="max-h-1/2 min-h-1/2 w-full overflow-hidden">

            <img class="object-cover h-full w-full" :src="product.image" />

        </div>

        <div class="container mx-auto mt-8 pb-24">

            <p class="mt-3 mb-3 text-gray-700 font-sans">{{product.description}}</p>

        </div>

    </div>

</template>

<script>

    export default {

        data () {

            return {

                product: null,
                id: this.$route.params.id

            }

        },

        async created () {

            const query = await this.$content('products').where({id: Number(this.id)}).fetch()
            this.product = query[0]

        }

    }

</script>