<template>

<div>
    <encabezado>{{actual}} </encabezado>
    <div class="container" style="background:#ddeedd">
   
        <div>
        <table class="table">
            <thead >
                <tr >
                   
                    <th style="text-align:center">Nombre </th>
                    <th style="text-align:center">Tiempo</th>
                    <th style="text-align:center">Fecha</th>
                    <th style="text-align:center">Hora</th>
                    <th style="text-align:center">Estado</th>
                </tr>
                <tr>
                    <td> <li   v-for="(value, key, index) in historico"  @click="selection(value[0])" style="text-align:left" class="list-group-item" >  {{ value[1].trivia.nombreTrivia }} </li > 
                            </td>
                            
                    
                      <td> 
                        <li   v-for="(value,  index) in historico" @click="selection(value[0])"  class="list-group-item" style="text-align:center" >  {{ value[1].trivia.tiempo }}</li >
                    </td>
                    
                    <td> <ol><ul class="list-group">
                        <li   v-for="(value, key, index) in historico"  class="list-group-item"  style="text-align:center"> {{value[1].trivia.fecha }}</li >
                            </ul></ol> </td>
                     <td> <ol><ul class="list-group">
                        <li   v-for="(value, key, index) in historico"   class="list-group-item"  style="text-align:center"> {{value[1].trivia.hora }}</li >
                            </ul></ol> </td> 
                    <td><li v-for="(value, key, index) in historico" > <span class="badge"> Vencido   
                    <button  @click="selection(value[0])"  type="submit" class="btn btn-primary">
                    <span class="glyphicon glyphicon-play-circle"></span>&nbsp;<span>Jugar</span>
                </button></span> </li></td>
                </tr>
               
            </thead>

        </table>
    </div>
       
    </div>
    </div>
</template>
<script>
import Encabezado from "../componentes.trivias/EncabezadoSesion.vue";

import { bus } from '../componentes.trivias/TriviaEnCurso.vue'
import Router from 'vue-router'

export default {
  data() {
    return {
      historico: [],
      disponibilidad:false,
      id:'',
	actual:null,
      size: 0,
      
    };
  },

  components: {
    Encabezado,
    
  },
  methods:{

	  
	  selection : function(id) {
        
		this.$router.replace('/triviaEnCurso/'+id) 
    }
  },  created() {
    this.$http
      .get("https://sd-rusia.firebaseio.com/trivias.json")
      .then(respuesta => {
        return respuesta.json();
      })
      .then(respuestaJson => {
        // console.log(respuestaJson);

        this.historico=Object.entries(respuestaJson);
       
      });
  }
};
</script>