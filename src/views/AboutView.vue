<template>
  <div class="home">
  

        <button @click="saberNaus()">Obtenir naus</button><br>
    <ul  v-for="(item, id) of naus" :key="id">
      <li>{{item.name}}</li>
      <li>{{item.model}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions, mapState } from 'vuex'

export default {
  name: 'starships',
  components: {
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