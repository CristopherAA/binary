function es_numero(variable){
	if(variable >= '0' && variable <= '9'){
		return true;
	}
	return false;
}
function convertir(){
	var ingreso = document.getElementById("ingreso").value;
	var escribir = document.getElementById("egreso"),
		 actual,
		 resultado = 0;
	for(let i=ingreso.length-1,j=0;i>=0;i--,j++){
		actual = 2**j;
		if(es_numero(ingreso[i])){
			resultado = resultado + actual * parseInt(ingreso[i]);
		}else{
			
			alert("🤔🤔🤔🤔🤔🤔");
			return;
		}
	}
	escribir.value = resultado;
}
