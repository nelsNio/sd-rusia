<template>
      <form>         
           <div class="form-group"> 
               <label  for="correo" > Correo Electronico</label>
            <div class="input-group"> 
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                              
                <input type="email" class="form-control" placeholder="Correo Electronico"  v-model="usuario.correo" >
            </div>
          </div>
          
          <div class="form-group"> 
               <label  for="correo" > Contraseña </label>
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input type="password" class="form-control" placeholder="Contraseña"  v-model="usuario.contrasena" >
                </div>
          <div> <hr></div>
              </div>
           <button type="submit" class="btn btn-primary" v-on:click="sigIn"  @click.prevent="enviarFormulario">Ingresar</button> 
          
          
          <button  type="submit" class="btn btn-primary" @click.prevent="sigUp" >Registrarse</button> 
          
          
    </form>
</template>

<script>
    
    import Router from 'vue-router'
    import firebase from 'firebase'
   
    export default{
        data(){
            return{
                usuario:{
                correo:'',
                contrasena:''
                              }
            }
        },
        
        methods:{
         
             enviarFormulario: function(){
                    var user=this.usuario 
    
        },
           sigIn: function() {
               
                firebase.auth().signInWithEmailAndPassword(this.usuario.correo, this.usuario.contrasena).then(
                      (usuario) => {
                          this.$router.replace('/sesionOpen');
                         
                          
                      },
                      (err) => {
                        alert('Oops. ' + err.message);
                      }
        );
           },
            sigUp :function() {
                this.$router.push('/registro');
            }
           
    }
    
    }

</script>

<style>


</style>
