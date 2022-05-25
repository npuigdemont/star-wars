import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      starships: [],
      nextPageUrl:"https://swapi.dev/api/starships",
      loading: false, 
      modal:null,
      userObject:null,
      starshipFile:{},
      pilots: {},
    },
    mutations:{
      saveStarships(state, starshipsNextPage){
        const newStarshipsList = state.starships.concat(starshipsNextPage)
        state.starships = newStarshipsList

        starshipsNextPage.forEach(starship => {
          const id = parseInt(starship.url.slice(32,-1))
          starship.id = id
          
        });
      },
      updatePageUrl(state, link){
        state.nextPageUrl = link
      },
      resetStarshipList(state){
        state.starships = []
        state.nextPageUrl= "https://swapi.dev/api/starships"
        console.log(state.starships)
      },
      closeModal(state){
        state.modal = null
      },
      openModal(state, modal){
        state.modal = modal
      },
      signInUser(state, user){
        state.userObject = user
      },
      saveStarshipFile(state, starship){
        state.starshipFile = starship
      },
      savePilot(state, pilot){
        
        state.pilots = {...state.pilots} 
        state.pilots[pilot.url] = pilot
        console.log(pilot, state.pilots)
      }
      

    },
    actions:{
      fetchStarships(context){
        this.state.loading = true
        fetch(context.state.nextPageUrl)
        .then(response=>response.json())
        .then(response=>{
            this.state.loading =false
            context.commit('saveStarships', response.results)
            context.commit('updatePageUrl', response.next)
        })
      },
      fetchStarshipFile(context, id){
        context.commit('saveStarshipFile', {}) 
        fetch(`https://swapi.dev/api/starships/${id}`)
        .then(response=>response.json())
        .then(response=>{
          context.commit('saveStarshipFile', response)

        })
      },
      fetchPilotUrl(context, url){
        fetch(url)
        .then(response=>response.json())
        .then(response=>{
          context.commit('savePilot', response)

        })
      },
      signIn(context, [username, password]){
        const key= username
        const userJSON= (window.localStorage.getItem(key)) 
        const userObject = JSON.parse(userJSON)
  
        if(userJSON !== null && password == userObject.password){
          alert("you signed in")
          context.commit('signInUser', userObject)
          context.commit ('closeModal')
  
        }else{
          alert("unknown username or wrong password")
        }
      },
      createAccount(context, newUser){
        const key = newUser.username
        const userExists = (window.localStorage.getItem(key) !==null) 
        
        if(userExists){
          alert("user already exists")
  
        }else{
    
          window.localStorage.setItem(key, JSON.stringify(newUser))
          console.log(key)
          context.commit('openModal', 'showLogin' )
        }
      }

    },
    getters:{
      getStarshipFile(state){
        return state.starshipFile
      },
      getPilot:(state)=>(url)=>{
        return state.pilots[url]
      },
      countStarshipPilots(state){
        
        return state.starshipFile.pilots? state.starshipFile.pilots.length : 0
      }
    }

})