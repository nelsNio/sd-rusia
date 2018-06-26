<template>
<div  class="header clearfix"  >
    <div class="col-md-8"><h1 class="titulo-copa-mundial">Trivias Rusia 2018</h1></div>
  <div class="col-md-4" style="background:#FA8258" >Usuario : {{email}} </div>
     <h3 class="text muted"> </h3>
        <p class="text-right"></p>
    <nav>
        <ul class="nav nav-pills pull-right">
            <router-link  tag="li" to="/historico" active-class="active" exact><a>Historico Trivias</a></router-link>
          <router-link  tag="li" to="/nuevasTrivias" active-class="active" exact><a>Nuevas Trivias</a></router-link>
            <router-link  tag="li" to="/jugar" active-class="active" exact><a>Jugar Trivias</a></router-link>
          <router-link  v-on:click="logout" tag="li" to="/" active-class="active" exact><a>Salir</a></router-link>
            
    </ul>
       
    </nav>

</div>
</template>
<script>  
    
    
import firebase from 'firebase'  


export default {
  
     
        data(){
          
            return{ 
              photo: '',
              userId: '',
              name: '',
              email: '',
              user: {}
            }
            
        },created() {
     var vm = this
     
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         vm.user = user;
         vm.name = vm.user.displayName;
         vm.email = vm.user.email;
         vm.photo = vm.user.photoURL;
         vm.userId = vm.user.uid;
         
      }
    });
  }, methods:{
                logout: function() {
                firebase.auth().signOut().then(() => {
                this.$router.replace('*')
      })
    }
    }
    
    
    
  
}

</script>