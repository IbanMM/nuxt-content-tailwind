<template>

    <header class="bg-teal-400 h-24">

        <div class="container mx-auto pt-2 flex justify-center">

            <n-link to="/" class="w-1/3 px-4 mx-auto inline-block">

                <Logo />

            </n-link>

        </div>

    </header>

</template>

<script>

    import Logo from '~/components/Logo'

    export default {

        components: {

            Logo

        }
        
    }
</script>

<style lang="scss" scoped>

</style>