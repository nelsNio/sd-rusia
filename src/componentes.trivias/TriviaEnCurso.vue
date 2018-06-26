        <template>

        <div class="container" style="background:#ddeedd">
            <encabezado> </encabezado>
            <hr>
        <form style="background:#ddeedd"   >
                
                <div class="form-group"> 
                    
                    
                    
                    <div class="panel-heading" style="background:#CEECF5">
                        
                        <label  for="nombreTrivia" > Nombre o descripcion de trivia  </label>
                        <spam  class="form-control" name="nombreTrivia" v-model="trivia.nombreTrivia" >{{trivia.nombreTrivia}}</spam> 
                        
                        
                <div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th ><spam name="fecha" class="form-group">  Fecha  trivia : {{trivia.fecha}} </spam></th>
                            <th><spam name="hora" class="form-group"> Hora {{trivia.hora}} </spam></th>
                            <th><spam name="tiempo" class="form-group">Tiempo Trivia ({{trivia.tiempo}})  minutos. </spam></th>
                        
                        </tr>
                        
                        </thead>
                    </table>
                    </div>
                    
                        <countdown v-on:countdownend="finTrivia" :time=(this.trivia.tiempo*60)*1000 ref="countdown" >
                        <template slot-scope="props"> Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                        </countdown>
                     </div>
                    
                    <div>
                        <vue-good-wizard 
                        :steps="steps"
                        :onNext="nextClicked" 
                        :onBack="backClicked">
                        <div slot="page1">
                        <div class="breadcrumb-item active" >  <li class="list-group-item active">{{this.trivia.preguntasTrivia[0].pregunta}}</li>
                        </div>
                                <!---  A -->
                                
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox"  v-model="respuestasUsuario.cero[0]"> {{this.trivia.preguntasTrivia[0].respuestasPosibles[0]}}
                                
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                          
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cero[1]"> {{this.trivia.preguntasTrivia[0].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input  class="form-check-input" type="checkbox"  v-model="respuestasUsuario.cero[2]"> {{this.trivia.preguntasTrivia[0].respuestasPosibles[2]}}
                                      
                           
        
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cero[3]"> {{this.trivia.preguntasTrivia[0].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                        </div>
                            
                        
                        <div slot="page2">
                         <!-- <countdown :time=this.trivia.preguntasTrivia[1].tiempo*1000>

                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                                        <div class="breadcrumb-item active" >  <li class="list-group-item active">{{this.trivia.preguntasTrivia[1].pregunta}}</li>
                        </div>
                                <!---  A -->
                                
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.uno[0]"> {{this.trivia.preguntasTrivia[1].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                          
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.uno[1]"> {{this.trivia.preguntasTrivia[1].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input  class="form-check-input" type="checkbox" v-model="respuestasUsuario.uno[2]"> {{this.trivia.preguntasTrivia[1].respuestasPosibles[2]}}
                                      
                           
        
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.uno[3]"> {{this.trivia.preguntasTrivia[1].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            </div>
                        <div slot="page3">

                            <!-- <countdown :time=this.trivia.preguntasTrivia[2].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->

                             <h4>Selecciona la(S) opciones correcta(s).</h4>
                                        
                            
                                        <div class="breadcrumb-item active" >  <li class="list-group-item active">{{this.trivia.preguntasTrivia[2].pregunta}}</li>
                        </div>
                                <!---  A -->
                                
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.dos[0]"> {{this.trivia.preguntasTrivia[2].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                          
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.dos[1]"> {{this.trivia.preguntasTrivia[2].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input  class="form-check-input" type="checkbox" v-model="respuestasUsuario.dos[2]"> {{this.trivia.preguntasTrivia[2].respuestasPosibles[2]}}
                                      
                           
        
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.dos[0]"> {{this.trivia.preguntasTrivia[2].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            
                           
                        </div>
                        <div slot="page4">
                            <!-- <countdown :time=this.trivia.preguntasTrivia[3].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                             <h4>Selecciona la(S) opciones correcta(s).</h4>
                                        
                            
                                        <div class="breadcrumb-item active" >  <li class="list-group-item active">{{this.trivia.preguntasTrivia[3].pregunta}}</li>
                        </div>
                                <!---  A -->
                                
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.tres[0]" > {{this.trivia.preguntasTrivia[3].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                          
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.tres[1]"> {{this.trivia.preguntasTrivia[3].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input  class="form-check-input" type="checkbox" v-model="respuestasUsuario.tres[2]"> {{this.trivia.preguntasTrivia[3].respuestasPosibles[2]}}
                                      
                           
        
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.tres[3]"> {{this.trivia.preguntasTrivia[3].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            
                           </div> 
                        <div slot="page5">
                            <!-- <countdown :time=this.trivia.preguntasTrivia[4].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                             <h4>Selecciona la(S) opciones correcta(s).</h4>
                                        
                            
                                        <div class="breadcrumb-item active" >  <li class="list-group-item active">{{this.trivia.preguntasTrivia[4].pregunta}}</li>
                        </div>
                                <!---  A -->
                                
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cuatro[0]"> {{this.trivia.preguntasTrivia[4].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                          
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cuatro[1]" > {{this.trivia.preguntasTrivia[4].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input  class="form-check-input" type="checkbox" v-model="respuestasUsuario.cuatro[2]"> {{this.trivia.preguntasTrivia[4].respuestasPosibles[2]}}
                                      
                           
        
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cuatro[3]"> {{this.trivia.preguntasTrivia[4].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            
                            
                        </div>
                        <div slot="page6">
                            <!-- <countdown :time=this.trivia.preguntasTrivia[5].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                             <h4>Selecciona la(S) opciones correcta(s).</h4>
                            
                            
                            <div class="breadcrumb-item active" >
                                <li class="list-group-item active">{{this.trivia.preguntasTrivia[5].pregunta}}</li>
                                </div>
                                <!---  A -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cinco[0]"> {{this.trivia.preguntasTrivia[5].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cinco[1]"> {{this.trivia.preguntasTrivia[5].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cinco[2]"> {{this.trivia.preguntasTrivia[5].respuestasPosibles[2]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.cinco[3]"> {{this.trivia.preguntasTrivia[5].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                        </div>
                            
                        
                        <div slot="page7">
                            <!-- <countdown :time=this.trivia.preguntasTrivia[6].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                          <h4>Selecciona la(S) opciones correcta(s).</h4>
                            
                            
                            <div class="breadcrumb-item active" >
                                <li class="list-group-item active">{{this.trivia.preguntasTrivia[6].pregunta}}</li>
                                </div>
                                <!---  A -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.seis[0]"> {{this.trivia.preguntasTrivia[6].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.seis[1]"> {{this.trivia.preguntasTrivia[6].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.seis[2]"> {{this.trivia.preguntasTrivia[6].respuestasPosibles[2]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.seis[3]"> {{this.trivia.preguntasTrivia[6].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                        </div>
                            
                        
                        <div slot="page8">
                            <!-- <countdown :time=this.trivia.preguntasTrivia[7].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                           <h4>Selecciona la(S) opciones correcta(s).</h4>
                            
                            
                            <div class="breadcrumb-item active" >
                                <li class="list-group-item active">{{this.trivia.preguntasTrivia[7].pregunta}}</li>
                                </div>
                                <!---  A -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.siete[0]"> {{this.trivia.preguntasTrivia[7].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.siete[1]"> {{this.trivia.preguntasTrivia[7].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.siete[2]"> {{this.trivia.preguntasTrivia[7].respuestasPosibles[2]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.siete[3]" > {{this.trivia.preguntasTrivia[7].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                        </div>
                            
                        
                        <div slot="page9">
                            <!-- <countdown :time=this.trivia.preguntasTrivia[8].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                             <h4>Selecciona la(S) opciones correcta(s).</h4>
                            
                            
                            <div class="breadcrumb-item active" >
                                <li class="list-group-item active">{{this.trivia.preguntasTrivia[8].pregunta}}</li>
                                </div>
                                <!---  A -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.ocho[0]"> {{this.trivia.preguntasTrivia[8].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.ocho[1]"> {{this.trivia.preguntasTrivia[8].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.ocho[2]"> {{this.trivia.preguntasTrivia[8].respuestasPosibles[2]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.ocho[3]"> {{this.trivia.preguntasTrivia[8].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                        </div>
                            
                        <div slot="page10">
                            <!-- <countdown :time=this.trivia.preguntasTrivia[9].tiempo*1000>
    
                            <template slot-scope="props">Tiempo restante： {{ props.minutes }} minutos, {{ props.seconds }} segundos.</template>
                            </countdown> -->
                        
                             <h4>Selecciona la(S) opciones correcta(s).</h4>
                            
                            
                            <div class="breadcrumb-item active" >
                                <li class="list-group-item active">{{this.trivia.preguntasTrivia[9].pregunta}}</li>
                                </div>
                                <!---  A -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.nueve[0]"> {{this.trivia.preguntasTrivia[9].respuestasPosibles[0]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!---  B-->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.nueve[1]"> {{this.trivia.preguntasTrivia[9].respuestasPosibles[1]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- C -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.nueve[2]"> {{this.trivia.preguntasTrivia[9].respuestasPosibles[2]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                            <!--- D -->
                            <hr>
                            <samp  class="form-control"  > 
                                
                                    <div class="form-group row">
                            <div class="col-sm-10">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" v-model="respuestasUsuario.nueve[3]"> {{this.trivia.preguntasTrivia[9].respuestasPosibles[3]}}
                                </label>
                            </div>
                            </div>
                        </div>
                            </samp>
                        </div>
                            
                        
                        </vue-good-wizard>
                    
                    
                    </div>
                    
                    </div>
                    
                <button type="submit"  class="btn btn-primary"   @click.prevent="jugarTrivia"  style="background:#034f84">Jugar Trivia</button> 
            </form>

            </div>
            
        </template>
        <script>
    import Encabezado from "../componentes.trivias/EncabezadoSesion.vue";
    import cronometro from"../componentes.trivias/Cronometro.vue"
    import preguntaTrivia from "../componentes.trivias/PreguntaTrivia.vue";
     import Router from 'vue-router'
    import firebase from 'firebase' 

    export default {
    name: "Simple-wizard",
    data() {
        return {
            photo: '',
              userId: '',
              name: '',
              email: '',
              user: {},
        steps: [
            {
            label: "Pregunta # 1",
            slot: "page1"
            },
            {
            label: "Pregunta # 2",
            slot: "page2"
            },
            {
            label: "Pregunta # 3",
            slot: "page3"
            },
            {
            label: "Pregunta # 4",
            slot: "page4"
            },
            {
            label: "Pregunta # 5",
            slot: "page5"
            },
            {
            label: "Pregunta # 6",
            slot: "page6"
            },
            {
            label: "Pregunta # 7",
            slot: "page7"
            },
            {
            label: "Pregunta # 8",
            slot: "page8"
            },
            {
            label: "Pregunta # 9",
            slot: "page9"
            },
            {
            label: "Pregunta # 10",
            slot: "page10"
            }
        ],
        id: this.$route.params.id,

        trivia: {
            nombreTrivia: "",
            preguntasTrivia: [],
            tiempo: "",
            fecha: "",
            hora: ""
        },
        pregunta: {
            pregunta: "",
            tiempo: "",
            respuestasPosibles: [],

            respuestasCorrectas: [false, false, false, false]
        },
        respuestasUsuario:{
            cero: [false, false, false, false],
            uno: [false, false, false, false],
            dos: [false, false, false, false],
            tres: [false, false, false, false],
            cuatro: [false, false, false, false],
            cinco: [false, false, false, false],
            seis: [false, false, false, false],
            siete: [false, false, false, false],
            ocho: [false, false, false, false],
            nueve: [false, false, false, false]
            
        },
        triviaJugada:{
            email:'',
            puntos:0,
            correctas:0,
            incorrectas:0,
            nombreTriviaJugada:'',
            tiempo:0

        },
        puntosUser:0,
        //vector con mis repuestas 
        
        preguntaNro: 1,
        tiempoCronometro:20*1000
        };
    },
    components: {
        Encabezado,
        preguntaTrivia,
        cronometro
    },

    methods: {
        nextClicked(currentPage) {
        if(currentPage===9){
            
           this.generarPuntos();
            
            this.$router.replace('/historico');
        }
        console.log("next clicked", currentPage);
       
        return true; 
        
        },
        backClicked(currentPage) {
        console.log("back clicked", currentPage);
        return true; 
        },

        jugarTrivia() {
        this.pregunta = this.trivia.preguntasTrivia;
        },
        finTrivia(){
            this.generarPuntos();
            alert("Se termino el tiempo")
            this.$router.replace('/historico');
             for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }


        },generarPuntos(){
            // Compara los resultados, son vestores con false y true
            
            
            this.recorrerList(this.respuestasUsuario.cero,this.trivia.preguntasTrivia[0].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.uno,this.trivia.preguntasTrivia[1].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.dos,this.trivia.preguntasTrivia[2].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.tres,this.trivia.preguntasTrivia[3].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.cuatro,this.trivia.preguntasTrivia[4].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.cinco,this.trivia.preguntasTrivia[5].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.seis,this.trivia.preguntasTrivia[6].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.siete,this.trivia.preguntasTrivia[7].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.ocho,this.trivia.preguntasTrivia[8].respuestasCorrectas)
            this.recorrerList(this.respuestasUsuario.nueve,this.trivia.preguntasTrivia[9].respuestasCorrectas)
            alert("Tu puntuación es : "+ this.puntosUser)
            this.triviaJugada.puntos=this.puntosUser
            this.triviaJugada.nombreTriviaJugada=this.trivia.nombreTrivia
            this.triviaJugada.email=this.user.email
            var triviaJugada=  this.triviaJugada
            this.$http.post('https://sd-rusia.firebaseio.com/triviasEstadisticas.json',{triviaJugada}).then(
                respuesta=>console.log(respuesta)); 


        },recorrerList(correctas,usuario){
            for (let index = 0; index < correctas.length; index++) {
                
                    if(correctas[index]===true&&usuario[index]===true){
                            this.puntosUser+=15;
                            this.triviaJugada.correctas+=1;
                            console.log(this.puntosUser);
                    }else if(correctas[index]===false&&usuario[index]===true){
                        this.triviaJugada.incorrectas+=1;
                    }else if(correctas[index]===true&&usuario[index]===false){
                        this.triviaJugada.incorrectas+=1;
                    }else{
                        this.triviaJugada.correctas+=1;
                    }
                    
                    
                
                
                
            }
        }
       
    },
    created() {
                var vm = this
            
            firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                vm.user = user;
                vm.name = vm.user.displayName;
                vm.email = vm.user.email;
                vm.photo = vm.user.photoURL;
                vm.userId = vm.user.uid;
                
            }
            });


        this.$http
        .get("https://sd-rusia.firebaseio.com/trivias.json")
        .then(respuesta => {
            return respuesta.json();
        })
        .then(respuestaJson => {
            for (var [key, value] of Object.entries(respuestaJson)) {
            if (key == this.$route.params.id) {
                this.trivia = value.trivia;
                this.$refs.countdown.start();

            }
            }
        });
    }
    };
    </script>
        <style>
    #rcorners {
    border-width: 10px;
    border-style: solid;

    padding: 20px;
    width: 20px;
    height: 20px;
    column-fill: auto;
    }
    </style>