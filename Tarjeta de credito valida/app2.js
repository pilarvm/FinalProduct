var isValidCard = function(number){
    var result='No es tarjeta valida';
    var perTwo=1;

    if(number.length==16){
        var array = number.split("");
        array.reverse();
        var newArray=[];
        
        for(i=0; i<=array.length; i++){
            if (i%2!=0){
              perTwo=array[i]*2;
              newArray.push(perTwo);
              
            }
          
    }


    result= 'tarjeta valida :)'    
    }

    return alert(result);
}



console.log(isValidCard(prompt()))