
var cipher = function(phrase){
 var chartValue = 0;
 var cipherPhrase ='';
  
      for (var i=0; i<phrase.length ; i++){
        chartValue = phrase.charCodeAt(i);
        if (chartValue>=65 && chartValue<=90){
            chartValue = (chartValue - 65 + 33)%26+65;
            chartValue = String.fromCharCode(chartValue);
            cipherPhrase = cipherPhrase+ chartValue    
        }
        else if(chartValue>=97 && chartValue<=122){
            chartValue = (chartValue - 97 + 33)%26+97;
            chartValue = String.fromCharCode(chartValue);
            cipherPhrase = cipherPhrase+ chartValue 
        }
      }
return alert(cipherPhrase)
}

var deCipher = function(phrase2){
 var chartValue2 = 0;
 var deCipherPhrase ='';
  
      for (var i=0; i<phrase2.length ; i++){
        chartValue2 = phrase2.charCodeAt(i);
        if (chartValue2>=65 && chartValue2<=90){
            chartValue2 = (chartValue2 + 65 - 33)%26+65;
            chartValue2 = String.fromCharCode(chartValue2);
            deCipherPhrase = deCipherPhrase+ chartValue2    
        }
        else if(chartValue2>=97 && chartValue2<=122){
            chartValue2 = (chartValue2 + 97 - 45)%26+97;
            chartValue2 = String.fromCharCode(chartValue2);
            deCipherPhrase = deCipherPhrase+ chartValue2 
        }
      }
return alert(deCipherPhrase)
}

console.log(cipher(prompt()))
console.log(deCipher(prompt()))