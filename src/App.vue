<template>

  <NavigationBar/>
  <router-view/>
  <TheLoader v-if="showLoader"/>
</template>


<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavigationBar from './components/NavigationBar.vue';
import TheLoader from './components/TheLoader.vue';
export default{
  name: 'App',
  components: {
    NavigationBar,
    TheLoader
  },
  setup()
  
  {
    const store = useStore();
    const showLoader = computed(() => {
      return store.state.showLoader
    })
    return{
      showLoader
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blue;
}

/* nav {
  padding: 40px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
