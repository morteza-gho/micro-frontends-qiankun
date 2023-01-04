<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Vue.js Demo" @close="close"> </HelloWorld>
  <button @click="plus">plus</button> <span>{{$store.state.count.count}}</span>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created() {
    console.log('vue2.0 writing created');
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    close() {
      console.log('close');
    },
    plus() {
      this.$store.commit('count/increment');
      console.log(this.$store.state.count);
    }
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
