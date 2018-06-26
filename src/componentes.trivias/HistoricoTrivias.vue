<template>
<div>
<encabezado></encabezado>
    <div class="container" style="background:#ddeedd">
        
    <h4 class="text-info" style="text-align:center"  >Lista de de trivias creadas.</h4>
        
        <ol>
        <ul class="list-group">
                <li v-for="n in historico" class="list-group-item"  > {{n.trivia.nombreTrivia.toLowerCase() }} 
                           <span class="badge" > {{n.trivia.fecha}} </span>
        </li>
            </ul>
        </ol>
         
        
    </div>
    
     <div class="container" style="background:#CEECF5">
    <h4 class="text-info" style="text-align:center" >Lista de mis trivias jugadas.</h4>
    <table class="table">
            <thead >
        <tr >
                   
                    <th style="text-align:center">Nombre </th>
                    <th style="text-align:center">Correctas</th>
                    <th style="text-align:center">Incorrectas</th>
                    <th style="text-align:center">Puntos</th>
                    <!-- <th style="text-align:center">Mi Tiempo</th>
                    <th style="text-align:center">Promedio Tiempo </th> -->
            </tr>
            <tr  v-for="mj in misJuegos" > 
                <td><li     style="text-align:left" class="list-group-item" >  {{ mj.triviaJugada.nombreTriviaJugada}} </li ></td>
                <td><li     style="text-align:left" class="list-group-item" >  {{ mj.triviaJugada.correctas}} </li ></td>
                <td><li       style="text-align:left" class="list-group-item" >   {{ mj.triviaJugada.incorrectas}}  </li ></td>
                <td><li       style="text-align:left" class="list-group-item" >   {{ mj.triviaJugada.puntos}}  </li ></td>
                
                <!-- <td><li      style="text-align:left" class="list-group-item" >  1 </li ></td>
                <td><li    style="text-align:left" class="list-group-item" >  1 </li ></td> -->
            </tr>
             </thead>

        </table>
        <ol>
        <!-- <ul class="list-group"  v-for="n in historico">
                <li  class="list-group-item" > {{n.trivia }}  -->
                           <!-- <span class="badge"> {{n.trivia}} </span> -->
        </li>
            </ul>
        </ol>
    </div>

    <div class="container" style="background:#CEECF5">
    <h4 class="text-info" style="text-align:center" >Estadisticas Generales</h4>
    <table class="table">
            <thead >
        <tr >
                   
                    <th style="text-align:center">  Usuario </th>
                    <th style="text-align:center">Promedio Correctas</th>
                    <th style="text-align:center">Promedio Incorectas</th>
                    <th style="text-align:center">Promedio Tiempo </th>
            </tr>
            <tr  v-for="m in estadisticas" > 
                <td><li     style="text-align:left" class="list-group-item" >  {{m.triviaJugada.email}} </li ></td>
                <td><li      style="text-align:left" class="list-group-item" >  {{m.triviaJugada.correctas}} </li ></td>
                <td><li       style="text-align:left" class="list-group-item" >  {{m.triviaJugada.incorrectas}}</li ></td>
                <td><li       style="text-align:left" class="list-group-item" >  {{m.triviaJugada.tiempo}}</li ></td>
                
            </tr>
             </thead>

        </table>
       
    </div>

    </div>
    
</template>

<script>

import Encabezado from '../componentes.trivias/EncabezadoSesion.vue'

import firebase from 'firebase' 

export default {
    
    
           data() {
               return{ photo: '',
              userId: '',
              name: '',
              email: '',
              user: {},
        estadisticas:[] ,
          historico:[],
          misJuegos:[],
                   
               size:0
                   }
        },
        
          methods: {

          },components: {
                Encabezado
        },
                created(){ 
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
                    
                    
                    ///--------------------------------

               this.$http.get('https://sd-rusia.firebaseio.com/trivias.json').then(respuesta=> {
                   return respuesta.json();
               }).then(respuestaJson => {
                   
                   console.log(respuestaJson);
                        for(let id in respuestaJson){
                            if(respuestaJson[id].trivia.email===this.user.email){
                                
                                this.historico.push(respuestaJson[id]);     
                                }                            
                                
                                
                                
                    
                   }
                   
                   
                   
               });
               //---------------------------------
               this.$http.get('https://sd-rusia.firebaseio.com/triviasEstadisticas.json').then(respuesta=> {
                   return respuesta.json();
               }).then(respuestaJson => {
                   
                   console.log(respuestaJson);
                        for(let id in respuestaJson){                            
                                this.estadisticas.push(respuestaJson[id]);
                                if(respuestaJson[id].triviaJugada.email===this.user.email){
                                    this.misJuegos.push(respuestaJson[id]);
                                }
                       
                   }
                   
                   
                   
               });
                
            }
}


</script>