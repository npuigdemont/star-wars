<template>
  <div class="home">
    <img alt="Starwars Logo" src="https://starwars-visualguide.com/assets/img/starships/13.jpg">
     <h1>Welcome to the Star Wars Website!</h1>
    <p>We hope you enjoy the amazingly detailed Starship List that we've prepared for you</p>
    <router-link to="/starships" class="startButton">Check Starships</router-link> 
  </div>

       
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
 
}
</script>

<style scoped>
p, h1{
  color:white;
  margin:20px;
}
.startButton{
    padding:10px;
    font-size: 20px;
    background-color:#494847;
    border-color:#494847;
    border-style:solid;
    color:rgb(211, 210, 210);
    cursor:pointer;
    text-decoration: none;
    border-radius:45px;
}
.startButton:hover{
  background-color: grey;
  border-color:grey;
  color:white;
}
img {
  width: 30%;
  height: 30%;
}
</style>