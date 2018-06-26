<style>
.tamanho{ height: 50px;	width: 80px;}
.text{ font-size: 1em; text-align: center; padding: 3px;}
.marginTop{
	margin-top: 2px;
}
</style>

<template>
    <div class="container">
      <div class="col-md-12 text-center">
        <p>Cronometro com Javascript</p>
      </div>
      <div class="col-md-12 text-center center-block">
        <div id="tempo" type="button" class="btn btn-warning tamanho text">00:00!</div>
        
      </div>
      <div class="marginTop col-md-12 text-center center-block">
         <button id="btn" onclick="cronometro(1)" type="button" class="col-md-2 col-md-offset-5 btn btn-success">Iniciar</button>
       </div>
       <div class="marginTop col-md-12 text-center center-block">
         <button id="btnPause" onclick="parar()" type="button" class="hide col-md-2 col-md-offset-5 btn btn-danger">Pause</button>
       </div>
        <div class="marginTop col-md-12 text-center center-block">
         <button id="btnStop" onclick="stop()" type="button" class="hide col-md-2 col-md-offset-5 btn btn-primary">Stop</button>
       </div>
       <div class="marginTop col-md-12 text-center center-block">
         <div class="col-md-4 col-md-offset-4">
            <div class="input-group">
              <span class="input-group-addon">Min</span>
              <input id="minutos" type="number" min="0" max="59" class="form-control" placeholder="Minutos">
            </div>
             <div class="input-group">
              <span class="input-group-addon">Seg</span>
              <input id="segundos" type="number"  min="0" max="59" class="form-control" placeholder="Segundos">
              <input id="pause" type="hidden" value="0"  class="form-control">
            </div>
          </div>
        </div>
   </div>
</template>


<script >


    var minuto 	= new Number();
var segundo = new Number();
var time 	= new Number();

var pause = 0;
var x = 0;
function parar(){
	pause = parseInt($('#pause').val());
	if(pause === 0){
		x = 0;
	}
	
	if(x===0){
		$('#pause').val('1');
		$('#btnPause').html('Play');
		$('#btn').removeClass('disabled');
		x = 1;
	}else{
		$('#pause').val('0');
		$('#btnPause').html('Pause');

		x = 0;
		cronometro(2);
	}
}



function cronometro(aux){
	if(aux == 1){
		minuto = parseInt(($('#minutos').val() === '' ? 0 : $('#minutos').val()));
		segundo = parseInt(($('#segundos').val() === '' ? 0 : $('#segundos').val()));
		
		if(segundo != 0 || minuto != 0){
			segundo = segundo +1;
			$('#pause').val('0');
			$('#btn').addClass('disabled');
			$('#btnPause').html('Pause');
			$('#btnPause').removeClass('hide');
			$('#btnStop').removeClass('hide');
		}

		if(segundo >60 || minuto > 60 || segundo< 0 || minuto < 0){
			alert("Erro! Confira o registro informado!");
			stop();
		}
		
	}
	if(aux == 2){
		
		$('#btn').addClass('disabled');
	}
	
	if(minuto > 0 && segundo === 0){
		segundo = 60;
		minuto--;
	}
	if((segundo-1)>=0){
		segundo=segundo-1;
		if(segundo == 0 && minuto == 0){
			time="00:00";
			$('#btn').removeClass('disabled');
		}else if(segundo <10 && minuto === 0){
			time="0"+segundo;
		}else if (minuto >= 1){
			time=(minuto < 10 ? '0'+minuto : minuto)+":"+(segundo < 10 ? '0'+segundo : segundo);
		}else{
			time = segundo;
		}
		pause = parseInt($('#pause').val());
		if(pause === 0){
			tempo.innerText=time;
			setTimeout('cronometro();',1000);
		}
	}
}

function stop(){
	location.reload();
}

</script>


