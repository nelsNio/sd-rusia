<template>
  <div>
<encabezado></encabezado>
      <h1 ></h1>
<nuevaTrivia ></nuevaTrivia>
      </div>
</template>

<script>
import nuevaTrivia from '../componentes.trivias/NuevaTrivia.vue'
import Encabezado from '../componentes.trivias/EncabezadoSesion.vue'

export default {

    components: {
        Encabezado,
            nuevaTrivia
          }
}

</script>
