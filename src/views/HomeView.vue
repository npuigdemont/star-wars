<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

        <button @click="saberNaus()">Obtenir naus</button><br>
    <ul  v-for="(item, id) of naus" :key="id">
      <li>{{item.name}}</li>
      <li>{{item.model}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(['saberNaus']),
  },
  computed: {
    ...mapState(['naus'])
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>