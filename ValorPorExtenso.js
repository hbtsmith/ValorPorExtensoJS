var partialNumberName = {1:"um", 2:"dois", 3:"três", 4:"quatro", 5:"cinco", 6:"seis", 7:"sete", 8:"oito", 9:"nove", 10:"dez", 11:"onze", 12:"doze", 13:"treze", 14:"quatorze", 15:"quinze", 16:"dezesseis", 17:"dezessete", 18:"dezoito", 19:"dezenove", 20:"vinte", 30:"trinta", 40:"quarenta", 50:"cinquenta", 60:"sessenta", 70:"setenta", 80:"oitenta", 90:"noventa", 100:"cem", 200:"duzentos", 300:"trezentos", 400:"quatrocentos", 500:"quinhentos", 600:"seiscentos", 700:"setecentos", 800:"oitocentos", 900:"novecentos"};


function valueInFull(value){


	if (partialNumberName[value]!==undefined){
		return partialNumberName[value];
	}

	var rest = value.replace(",","").replace(".","").replace(" ","");
	var resultStr = '';

	var trilhao = 	1000000000000,
		bilhao 	= 	1000000000,
		milhao 	= 	1000000;

	if(rest >= trilhao){

		var trilhoes = Math.floor(rest / trilhao) ;
		rest = rest - (trilhoes * trilhao);
        
		if(trilhoes > 1){
			resultStr += getHundreds(trilhoes)+' trilhões';
		}else{
			resultStr += partialNumberName[trilhoes] + ' trilhão';
		}

		if(rest > 0){
			resultStr[0] += ', ';
		}

	}

	if(rest >= bilhao){

		var bilhoes = Math.floor(rest / bilhao) ;
		rest = rest - (bilhoes * bilhao);

		if(bilhoes > 1){
			resultStr += getHundreds(bilhoes) + ' bilhões';
		}else{
			resultStr += partialNumberName[bilhoes] + ' bilhão';
		}

		if(rest > 0){
			resultStr += ', ';
		}

	}

	if(rest >= milhao){

		var milhoes = Math.floor(rest / milhao) ;
		rest = rest - (milhoes * milhao);

		if(milhoes > 1){
			resultStr += getHundreds(milhoes) + ' milhões';
		}else{
			resultStr += partialNumberName[milhoes] + ' milhão';
		}

		if(rest > 0){
			resultStr += ', ';
		}

	}

	if(rest >= 1000){

		var milhas = Math.floor(rest / 1000)
		rest = rest - (milhas * 1000);
		resultStr += getHundreds(milhas) + ' mil';

		if(rest > 0){
			resultStr += ', ';
		}

	}

	resultStr += getHundreds(rest);

	return resultStr;

}

function getHundreds(rest){

	var resultStr = '';

	if(rest >= 100){
		var milhas = Math.floor(rest / 100)
		rest = rest - (milhas * 100);
		if(milhas === 1){
			resultStr += 'cento';
		}else{
			resultStr += ' '+ partialNumberName[milhas * 100];
		}

		if(rest > 0){
			resultStr += ' e';
		}
	}

	if(rest >= 10){

		var milhas = 0;

		if(rest < 21){
			milhas = rest;
		} else {
			milhas = Math.floor(rest/10)*10;
			rest = rest - milhas;
		}
		resultStr += ' ' + partialNumberName[milhas];

		if(rest > 0){
			resultStr += ' e';
		}

	}

	if(rest >= 1){
		var milhas = Math.floor(rest / 1)
		rest = rest - milhas;
		resultStr += ' '+partialNumberName[milhas];

		if(rest > 0){
			resultStr += ' e';
		}

	}

	return resultStr;

}