<template>
          <form >
          <h2 style="text-align:center" > Registrate Ahora</h2>
            <div class="form-group"> 
                <label  for="nombre" > Nombre</label>
                <input type="text" class="form-control" placeholder="Nombre"  v-model="usuario.nombre" >
            </div>
            <div class="form-group"> 
                <label  for="correo" > Correo Electronico</label>
                <input type="email" class="form-control" placeholder="Correo Electronico"  v-model="usuario.correo" >
            </div>
            <div class="form-group"> 
                <label  for="consatrena" > Contraseña</label>
                <input type="password" class="form-control" placeholder="Contraseña"  v-model="usuario.contrasena" >
                </div>
            <div class="form-group"> 
                <label  for="edad" > Edad</label>
                <input type="text" class="form-control" placeholder="Edad"  v-model.number="usuario.edad" >                 
            </div>  
            
        <fieldset class="form-group">
            <legend>Genero</legend>
         <div class="form-check">
        <label class="form-check-label">
            
            <input type="radio" class="form-check-imput" name="optionsRadios" value="Mujer" v-model="usuario.genero"> Mujer<br>
            </label>
        </div>
            
             <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-imput" name="optionsRadios" value="Hombre" v-model="usuario.genero"> Hombre<br>
        </label>   
    </div>
    </fieldset>
        
            <!--<fotouser class="form-group" ></fotouser> -->
            
            <div class="form-check">
                <label class="form-check-label">
            <input type="checkbox" class="form-check-imput" value="Acepto" v-model="usuario.condiciones"> Acepto Terminos<br>
                    
    </label>
    </div>
            
           <button type="submit" class="btn btn-primary" v-on:click="signUp" @click.prevent="enviarFormulario">Registrar</button> 
             <button type="submit" class="btn btn-primary"  v-on:click="inicioSesion" >Inicio Sesion </button>
    </form>
</template>

<script>
    import firebase from 'firebase'
    import fotouser from './AdminFiles.vue'
    
    export default{
        
        data(){
            return{
                usuario:{
                nombre:'',
                correo:'',
                contrasena:'',
                edad:'',
                genero:'',
//                foto:'',
                condiciones:[]
                },
                mostrar:false,
                
            }
        },
        components: {
            fotouser
          },
        created(){
               this.$http.get('https://console.firebase.google.com/project/sd-rusia/authentication/users.json').then(respuesta=> {
                   return respuesta.json();
               }).then(respuestaJson => {
                   
                   console.log(respuestaJson);
                
                   
               });
                
            },
        methods:{
            enviarFormulario: function(){
                    var user=this.usuario 
                 
        }, 
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.usuario.correo, this.usuario.contrasena).then(
                      (usuario) => {
                          this.$router.replace('/sesionOpen')
                this.$http.post('https://sd-rusia.firebaseio.com/usuario.json',{usuario }).then(respuesta=>console.log(respuesta));   
                 }, (err) => {
                        alert('Oops. ' + err.message)
                      });
            },
            inicioSesion :function() {
                this.$router.replace('/*') 
                },
            
            }
    }

</script>

<style>


</style>
