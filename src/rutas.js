import InicioComponent from './componentes.inicio/inicio.vue'
import Registro from './componentes.inicio/Registro.vue'
import Login from './componentes.inicio/Login.vue'


import nuevasTrivias from './componentes.inicio/Trivias.vue'
import HistoricoTrivias from './componentes.trivias/HistoricoTrivias.vue'
import JugarTrivias from './componentes.trivias/JugarTrivias.vue'
import nuevaTrivia from './componentes.trivias/NuevaTrivia.vue'
import cronometro from './componentes.trivias/Cronometro.vue'
import triviaEnCurso from './componentes.trivias/TriviaEnCurso.vue'


import EncabezadoSesion from './componentes.trivias/EncabezadoSesion.vue'

export const rutas=[
    {path:'', component : InicioComponent},
     
     {path:'/login', component : Login},
    {path:'/historico' , component : HistoricoTrivias, meta: {
        requiresAuth: true
      }},
    {path:'*', component : InicioComponent},
    {path:'/registro', name: 'Registro', component : Registro},
    {path:'/sesionOpen', component : EncabezadoSesion, meta: {
        requiresAuth: true
      }},
    {path:'/jugar', component : JugarTrivias, meta: {
        requiresAuth: true
      }},
    
    {path:'/nuevasTrivias', name: 'nuevasTrivias', component : nuevasTrivias,
      meta: {
        requiresAuth: true
      }},
      {path:'/cronometro', name: 'cronometro', component : cronometro,
      meta: {
        requiresAuth: true
      }},
      
    {path:'/triviaEnCurso/:id', name: 'triviaEnCurso', component : triviaEnCurso,
      meta: {
        requiresAuth: true
      }}
    

]

