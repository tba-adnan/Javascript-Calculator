let a,b;
let aString,bString;
let typeOperation;
let result;

function OnclickNumber(number){
    if (a==undefined){
        if(aString==undefined) aString='';
        aString +=number
    }else{
        if(bString==undefined) bString='';
        bString +=number
    }
    display();

}


function display (number){
    let afficheur = document.getElementById("afficheur")
    afficheur .value="";


    if(a !=undefined && b!=undefined && typeOperation !=undefined ){
        afficheur.value=number
    }else{
        if(aString!=undefined)
        afficheur.value += aString
        
        if(typeOperation != undefined)
        afficheur.value += typeOperation 

        if(bString!=undefined)
        afficheur.value += bString
    }
}




function Operation(operationParam){
    if(typeOperation == undefined){
        typeOperation = operationParam
        a=parseFloat(aString)
        display();

    }else{
        alert("Vous avez déjà choisi l'opération " + typeOperation);
    }
}

function Calculer(a,b,typeOperation){
    let _solution=undefined;
    switch(typeOperation){
        case'+':
        _solution=a+b;
        break;
        case '-':
          _solution=a-b;
        break;
        default:
        break;

    }

return _solution;
}


function Equal(){
    a= parseFloat(aString);
    b=parseFloat(bString);
    result =Calculer(a,b,typeOperation);

    display(result);
}

function claire(){
    a =undefined
    b=undefined
    aString=undefined
    bString=undefined
    typeOperation=undefined
    afficheur= document.getElementById("afficheur")
afficheur.value=''
}