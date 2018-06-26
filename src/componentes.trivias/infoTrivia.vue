<template>
<div>
    <p><strong>Nombre</strong>{{nombre}}</p>
</div>
</template>
<script>
    export default{
        data(){
            return{
                nombre :''
            }
        },
        created(){
            let id= this.$route.params.id;
             this.$http.get('https://sd-rusia.firebaseio.com/trivias+'+id+'.json' ).then(respuesta=> {
                   return respuesta.json();
               }).then(respuestaJson => {
                   
                   console.log(respuestaJson);
                        for(let id in respuestaJson){
                    this.historico.push(respuestaJson[id]);
                    
                    this.size++
                   }
                   
                   
                   
               });
        }
    }
</script>