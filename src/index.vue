<template>
  <div id="app">
    <div id="nav">
      <navbar />
      <showcase />
      <Footer />
    </div>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  import showcase from './components/showcase.vue'
  import Footer from './components/footer.vue'

  export default {
    name: 'index',
    components: {
      navbar,
      showcase,
      Footer
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    line-height: 1.4;
    background: whitesmoke;

    color: #333;
    overflow-x: hidden;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .container {
    max-width: 1100px;
    margin: auto;
}
</style>
