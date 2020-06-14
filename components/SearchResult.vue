<template>

    <n-link :to="{ name: 'product-id', params: { id: product.id }}" >

        <div class="rounded-full h-16 w-full flex items-center justify-center overflow-hidden no-underline">

            <img class="object-cover h-64 w-full" :src="product.imagexl" />

        </div>

        <div class="rounded-full py-2 w-full bg-teal-400 text-center text-white text-xs no-underline">

            <span clasS="inline-block no-underline">{{product.name}}</span>

        </div>

    </n-link>

</template>

<script>

    export default {
        props: ['product']
    }

</script>

<style lang="scss" scoped>

</style>