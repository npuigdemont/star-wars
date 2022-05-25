<template>
    <div class="pilot-card">
      <ul v-if="$store.getters.getPilot(url)">
        <li><b>Name: &nbsp; </b> {{$store.getters.getPilot(url).name}}</li> 
        <li><b>Height: &nbsp;</b> {{$store.getters.getPilot(url).height}}</li>
        <li><b>Hair Color: &nbsp;</b> {{$store.getters.getPilot(url).hair_color}}</li>
        <li><b>Skin Color: &nbsp;</b>  {{$store.getters.getPilot(url).skin_color}}</li>
        <li><b>Eye Color: &nbsp;</b> {{$store.getters.getPilot(url).eye_color}}</li>
        <li><b>Gender: &nbsp;</b> {{$store.getters.getPilot(url).gender}}</li>
      </ul>
    </div>
</template>
<script>
export default {
  name:'PilotCard',
  props:{
    url: String
  },
  mounted(){  
    this.$store.dispatch('fetchPilotUrl', this.url )
  }
}
</script>
<style scoped>

.pilot-card{
  display: flex;
  margin:20px;
  border-radius:10px;
  width:250px;
  background-color:grey;
  border-radius:10px;
}
li{
  display:flex;
  list-style-type: none;
  justify-content: flex-start;
  padding:5px;
}

</style>