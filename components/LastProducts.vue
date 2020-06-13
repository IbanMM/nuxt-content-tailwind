<template>

    <div class="grid-cols-4">

        <h2 class="text-5xl font-bold text-teal-400 underline">Products</h2>

        <div class="grid grid-cols-4 gap-4">
        
            <div v-for="(product,index) in products" :key="index">
                
                <h3 class="text-3xl font-bold text-teal-400">{{product.name}}</h3>

                <p class="mb-2">{{product.excerpt}}</p>

                <div class="h-64 w-full rounded-lg overflow-hidden">

                    <img class="object-cover h-64 w-full" :src="product.imagexl" />

                </div>

                <div class="flex justify-center">

                    <n-link :to="{ name: 'product-id', params: { id: product.id }}"
                            class="inline-block bg-teal-400 rounded-full mt-2 py-2 px-4 font-bold no-underline text-white cursor-pointer">
                            Ver detalle
                    </n-link>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
    export default {
        props:['products']
    }
</script>