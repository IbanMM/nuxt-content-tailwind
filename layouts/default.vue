<template>

    <div>

        <Header />
        <nuxt />
        <Footer />

    </div>

</template>

<script>

    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'

    export default {

        components: {

            Header,
            Footer

        }
        
    }

</script>

<style>

    .bmimg {
        opacity: 0;
		transition: opacity 400ms;
	}

	.bmimg.lazyloaded {
        opacity: 1;
	}

</style>
