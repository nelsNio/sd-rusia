<template>
 
  <div  id="app"  class="container" >
    <div class="jumbotron"> 
    <router-view ></router-view>
        <!--<h1 style="text-align:center" > <titulo :titulo="titulo"></titulo></h1>-->
        
    </div>
    
    </div>
    
   
  
</template>


<script>
    import Titulo from './componentes.inicio/Titulo.vue'    
    import Login from './componentes.inicio/Login.vue'
    
    export default{
        components: {
            Titulo,
            Login
          },
        data(){
            return{
                titulo : 'Bienvenido a Rusia 2018',
                
            }
        }
        
    }
    

</script>

<style>


</style>
