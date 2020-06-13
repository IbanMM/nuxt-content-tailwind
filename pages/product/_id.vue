<template>

    <div v-if="product">  

        <div class="container mx-auto py-16">

            <h1 class="text-6xl font-bold text-teal-400">{{product.name}}</h1>

        </div>

        <div class="h-64 w-full overflow-hidden">

            <img class="object-cover h-64 w-full" :src="product.image" />

        </div>

        <div class="container mx-auto mt-8">

            <p>{{product.description}}</p>

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

            console.log('bum',this.id)

            //const query = await this.$content('products').where({ id: { $eq: this.id }}).fetch()
            const query = await this.$content('products').where({id: Number(this.id)}).limit(5).fetch()
            this.product = query[0]

        }

    }

</script>