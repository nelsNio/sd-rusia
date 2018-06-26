<template>
  <div>
    <h2>{{ tituloMayusculas() }}</h2>
  </div>
</template>


<script>
export default {
  props: ['titulo'],
  
  methods: {
    tituloMayusculas(){
      return this.titulo.LowerCase();
    }
  }
  
}
</script>