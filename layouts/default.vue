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
		-webkit-filter: blur(5px);
		filter: blur(5px);
        opacity: 0;
		transition: filter 400ms, -webkit-filter 400ms, opacity 400ms;
	}

	.bmimg.lazyloaded {
		-webkit-filter: blur(0);
		filter: blur(0);
        opacity: 1;
	}

</style>
