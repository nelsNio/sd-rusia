<template>
 <div class="container" style="background:#ddeedd">
     <hr>
 <form style="background:#ddeedd"   @submit.prevent="validateBeforeSubmit">
          
        <div class="form-group"> 
            
            
            
            <div class="panel-heading" style="background:#CEECF5">
                
                <label  for="nombreTrivia" > Nombre o descripcion de trivia : {{trivia.nombreTrivia}}  </label>
                <input type="text" class="form-control" name="nombreTrivia" placeholder="Nombre o descripcion de trivia" v-validate="'required'" v-model="trivia.nombreTrivia" >
                <i v-show="errors.has('nombreTrivia')" class="fa fa-warning"></i>
                <span v-show="errors.has('nombreTrivia')" class="help is-danger">{{ errors.first('nombreTrivia') }}</span>
                
         <div>
            <table class="table">
                <thead>
                <tr>
                    <th ><spam class="form-group">  Fecha  trivia : {{trivia.fecha}} </spam></th>
                    <th><spam class="form-group"> Hora {{trivia.hora}} </spam></th>
                    <th><spam class="form-group">Tiempo Trivia ({{trivia.tiempo}})  minutos. </spam></th>
                 
                </tr>
                <tr>
                   <td><input type="date" class="form-control" min="date" required="required"  v-model="trivia.fecha"></td>
                   <td><input type="time" class="form-control" min="00:00" max="24:00" required="required" v-model="trivia.hora"></td>
                    <td> <input type="number" class="form-control" min="1" max="59" required="required"  v-model="trivia.tiempo"></td>
                   
                </tr>
                </thead>
            </table>
            </div>
            
                
                 
                </div>
            
              <form>
            <div class="form-group"> 
                
                <div class="container">
                  <div class="panel panel-default">
                    <div class="panel-heading"> 
                         <div  class="form-group">Pregunta {{trivia.preguntasTrivia.length+1}}: {{pregunta.pregunta}}.
                        <input id="txtpregunta" type="text" class="form-control" name="pregunta" placeholder="Pregunta"  required="required" 
                               v-model="pregunta.pregunta" v-validate="'required'" >
                             
                             
                             
                             <spam class="form-group">Tiempo de pregunta ({{pregunta.tiempo}})  segundos.
                                <input type="number" class="form-control" min="1"  max="15" required="required" v-model="pregunta.tiempo" >
                            </spam>
                             
                        </div>              
                     </div>
                    
<!--                    Inicio panel respuestas-->
                     <div class="container">
                  <div class="panel panel-default">
                      
                      
                    <div class="panel-heading" >Lista de posibles respuestas.     (Marca la(s) correctas.) </div>
                      
                      
                      <label  for="pregunta1" > Respuesta a   : <span  class="badge">                 
                            <input type="checkbox" value="a"  v-model="pregunta.respuestasCorrectas[0]">
                             </span> {{pregunta.respuestasCorrectas[0] }}  </label>
                        <input type="text" class="form-control" placeholder="Respuesta a"  
                               v-model="pregunta.respuestasPosibles[0]"  >
                        
                      <label  for="pregunta1" > Respuesta b  : <span  class="badge">                 
                            <label><input type="checkbox" value="b"  v-model="pregunta.respuestasCorrectas[1]"></label>
                             </span> {{pregunta.respuestasCorrectas[1] }}</label>
                        <input type="text" class="form-control" placeholder="Respuesta b"  v-model="pregunta.respuestasPosibles[1]" >
                      <label  for="pregunta1" > Respuesta c  : <span  name="c" class="badge">                 
                            <label><input type="checkbox" value="c"  v-model="pregunta.respuestasCorrectas[2]"></label>
                             </span>{{pregunta.respuestasCorrectas[2] }}</label>
                        <input type="text" class="form-control" placeholder="Respuesta c"  v-model="pregunta.respuestasPosibles[2]" >
                      <label  for="pregunta1" > Respuesta d  :  <span  class="badge">                 
                            <input type="checkbox" value="d"  v-model="pregunta.respuestasCorrectas[3]">
                             </span> {{pregunta.respuestasCorrectas[3] }}</label>
                        <input type="text" class="form-control" placeholder="Respuesta d"  v-model="pregunta.respuestasPosibles[3]" >
                  
                      </div>
                    </div>
                    <!--                    Fin del panel respuestas-->
                    <button type="submit" class="btn btn-succes"  
                            @click.prevent="crearPregunta"  style="background:#82b74b">Agregar pregunta </button>
                  </div>
                </div>
                
                </div>
            </form>
            </div>
              
           <button type="submit"  class="btn btn-primary"   @click.prevent="crearTrivia"  style="background:#034f84">Crear Trivia</button> 
    </form>
      </div>
</template>
<script>

import { create } from 'domain';
import firebase from 'firebase'  
export default{
         
        data(){
            return{
               
                trivia:{
                nombreTrivia:'',
                preguntasTrivia:[],
                tiempo:0,
                fecha:'2018-06-05',
                hora:'19:00 pm',
                userId: '',
                email: ''
                },
                pregunta:{              
                pregunta:'',
                tiempo:0,
                respuestasPosibles:[],
                respuestasCorrectas:[false, false,false,false]                
                }
                
            }
        }
        , 
        
        methods:{
                     validateBeforeSubmit() {
              this.$validator.validateAll().then((result) => {
                if (result) {
                  // eslint-disable-next-line
                  alert('Form Submitted!');
                  return;
                }
                  
                alert('Correct them errors!');
              });
            },
            crearTrivia: function(){
                var vm = this
     
                firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    vm.user = user;
                    vm.trivia.userId=user.uid;
                    vm.trivia.email=user.email;
                    
                }
                });

                var trivia = this.trivia;     
                               
                alert("Trivia : " + trivia.nombreTrivia + " creada.");      
                console.log(trivia);           
                if(his.trivia.preguntasTrivia.length>=10){
                this.$http.post('https://sd-rusia.firebaseio.com/trivias.json',{trivia}).then(
                respuesta=>console.log(respuesta)); 
                }else{
                    alert("Minimo deben ser 10 preguntas")
                }
                
                
        },
            crearPregunta: function(){
                if (this.trivia.preguntasTrivia.length<10){
                    this.trivia.preguntasTrivia.push({pregunta:this.pregunta.pregunta,
                                    tiempo:this.pregunta.tiempo,
                                    respuestasPosibles:this.pregunta.respuestasPosibles,
                                     respuestasCorrectas:this.pregunta.respuestasCorrectas } );

                    this.pregunta={pregunta:'',
                tiempo:0,
                respuestasPosibles:[],
                respuestasCorrectas:[false, false,false,false]   };
                   
                 console.log(this.trivia.preguntasTrivia);   
                }else{
                    alert("La cantidad de preguntas permitida es 10");
                }

            },



            

                
                
            }
            
    }
    
    
</script>
<style>
#rcorners {
    border-width:10px;
    border-style:solid;
    
    padding: 20px;
    width: 20px;
    height: 20px;
    column-fill: auto;
}
</style>