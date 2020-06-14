<template>

    <div v-if="product">

        <div class="container mx-auto pt-2 pb-16 mt-1 ">

            <div class="rounded-md px-6 py-2 mb-16 w-full bg-teal-400 text-white text-xs no-underline divide-x divide-white">

                <n-link to="/" class="underline pr-4">Inicio</n-link>

                <span class="px-4">{{product.name}}</span>
            
            </div>

            <h1 class="text-6xl font-bold text-teal-400">{{product.name}}</h1>

        </div>

        <div class="max-h-1/2 min-h-1/2 w-full overflow-hidden bg-gray-400">

            <img class="object-cover h-full w-full bmimg lazyload" :data-src="product.imagexl" />

        </div>

        <div class="container mx-auto mt-8 pb-24">

            <p class="mt-3 mb-3 text-gray-700 font-sans">{{product.description}}</p>

        </div>

        <div v-if="previous" class="translate-y-1/2 let-0 top-0 absolute z-20 rounded-r-lg bg-teal-400 pro-nav text-white p-4 font-bold">

            <n-link :to="{ name: 'product-id', params: { id: previous.id }}" >{{previous.name}}</n-link>

        </div>

        <div v-if="next" class="translate-y-1/2 right-0 top-0 absolute z-20 rounded-l-lg bg-teal-400 pro-nav text-white p-4 font-bold">

            <n-link :to="{ name: 'product-id', params: { id: next.id }}" >{{next.name}}</n-link>

        </div> 

    </div>

</template>

<script>

    export default {

        data () {

            return {

                product: null,
                next: null,
                previous: null,
                id: this.$route.params.id

            }

        },

        async created () {

            const query = await this.$content('products').where({id: Number(this.id)}).fetch()
            this.product = query[0]

            const sorroundings = await this.$content('products')
            .sortBy('id')
            .only(['name', 'id'])
            .surround(this.product.slug)
            .fetch()

            this.previous = sorroundings[0]
            this.next = sorroundings[1]

        }

    }

</script>

<style lang="postcss">

    .pro-nav {

        top: 50%;

    }

</style>