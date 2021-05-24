<template>

    <div class="py-8">

        <p class="font-bold text-sm mb-1">Buscador de productos subida con continuous deploys, hay 200, ej.: Producto 123 (hay algunos productos que tienen "styx river" en el nombre) prueba a buscar esos</p>

        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Busca en 200 productos" v-model="q">

        <div v-if="results.length" class="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-6 gap-4">

            <SearchResult v-for="(product,index) in results"
                :key="index"
                :product="product"
            />

        </div>

    </div>

</template>

<script>

    import SearchResult from '~/components/SearchResult.vue'

    export default {

        data() {

            return {

                q: null,
                focusIndex: null,
                searching: null,
                results: []

            }

        },

        components: {

            SearchResult

        },

        watch: {
            async q (q) {

                this.focusIndex = -1

                if (!q) {

                    this.searching = false
                    this.results = []
                    return

                }

                this.searching = true

                this.results = await this.$content('products')
                    .search(q)
                    .sortBy('id')
                    .fetch({ deep: true })

                this.searching = false

            }

        }

    }

</script>