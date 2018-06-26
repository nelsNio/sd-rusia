<template>
    
    <div> <h4>Selecciona la(S) opciones correcta(s).</h4>
                  <h1>{{preguntaActual}} -- {{algo}}</h1>          
                            
    
    
    </div>
</template>
<script>
export default {
     data() {
               return{
               
          preguntaActual:'',
          algo:[],
                   
               size:0
                   }
        },
    
     props: ['preguntaActual',this.algo] ,
     post: {
  id: 1,
  title: 'My Journey with Vue'
},

  template: '<span> My Journey with Vue {{ preguntaActual }}</span>'
  
}
</script>
