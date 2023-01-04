<template>
  <div class="hello-content">
    <h1>{{ msg }}</h1>
    <p>Vue version: {{ version }}</p>
    <button @click="plus2">plus2</button>
  </div>
</template>

<script>
import {onMounted, onBeforeUpdate, getCurrentInstance, version, computed} from 'vue';
import {useStore} from "vuex";
// import $store from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  data() {
    return {
      nameColor: 'orange',
    };
  },

  setup() {
    const { ctx } = getCurrentInstance();
    const store = useStore();
    const count = computed(() => store.state.count)

    const changeGlobalState = () => {
      if (ctx.$setGlobalState) {
        console.log('The global state can be set here');
        // ctx.$setGlobalState({name: 'chaunjie'})
      }
    };

    const plus2 = () => {
      count.value ++;
      console.log(count.value);
    }

    onMounted(() => {
      console.log('mounted');
    });

    onBeforeUpdate(() => {
      console.log('beforeUpdate');
    });

    return {
      changeGlobalState,
      version,
      plus2
    };
  },
};
</script>

<style>
.name {
  color: v-bind(nameColor);
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  color: #64b587;
}
</style>
