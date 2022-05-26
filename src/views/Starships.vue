<<template>
  <div>
    <ul class="starshipList">
      <li class="starship" v-for="(starship, index) in $store.state.starships" :key="index">
        <router-link :to="{path:'starshipfile', query: {id: starship.id}}">
         <b class="text-uppercase"> {{starship.name}}</b> <br>
          {{starship.model}}
        </router-link> 
      </li>
    </ul>
    <button v-if="$store.state.nextPageUrl" :disabled="$store.state.loading" @click="$store.dispatch('fetchStarships')">View More</button>
  </div>
</template>

<script>
export default {
    name:"Starships",
    mounted(){
        this.$store.commit('resetStarshipList')
        this.$store.dispatch('fetchStarships')
    },
}
</script>
<style scoped>
.starshipList{
    padding:0;
    list-style: none;
    text-decoration: none;
}
.starship{
    background-color: #202020;
    padding:10px;
    margin:10px;
    cursor:pointer;
    list-style: none;
    text-decoration: none;
    color: white;
}
.starship:hover{
  background-color: grey;
  color:white;
}
button{
  padding:15px;
  margin:20px;
  cursor:pointer;
  background-color:#494847;
  color:rgb(211, 210, 210);
  border:none;
  border-radius:10px;
}
button:hover{
  background-color: grey;
  border-color:grey;
  color:white;
}

</style>