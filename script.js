function convertir(){
	var decimal = document.getElementById("decimal").value,
		 actual,
		 resultado = 0,
	    elemento = document.getElementById("resultado");
	for(var i=decimal.length-1,j=0;i>=0;i--,j++){
		actual = 2**j;
		if(decimal[i]!='1' && decimal[i]!='0'){
			elemento.innerHTML = "No es un número binario";
			return;
		}
		resultado = resultado + actual * parseInt(decimal[i]);
	}
	elemento.innerHTML = "El resultado es: " + resultado;
}