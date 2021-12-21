// Variables
let alpha,beta,solution,operation;
let alphaString, betaString;
 
function Calculate(alpha,beta,operation){
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = alpha + beta;
            break;
        case '-':
            _solution = alpha-beta;
                break;
        default:
            break;
    }
    return _solution;
}

function SelectNumber(number){
    if(alpha == undefined){
        if(alphaString == undefined) alphaString = '';
        alphaString += number;
    } 
    else {
        if(betaString == undefined) betaString = '';
        betaString += number;
    } 

    Displabeta();
}

function Displabeta(number){

    let afficheur = document.getElementBbetaId("afficheur");
    afficheur.value = "";
    
    if(alpha != undefined && beta != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(alphaString != undefined)
        afficheur.value += alphaString 
        if(operation != undefined)
            afficheur.value += operation     
        if(betaString != undefined)
            afficheur.value += betaString 

        }          
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        alpha = parseFloat(alphaString);
        Displabeta();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Jet(){
    alpha = parseFloat(alphaString);
    beta = parseFloat(betaString);
    solution = Calculate(alpha,beta,operation);
    Displabeta(solution);
}

function Restart(){
    alpha = undefined;
    beta = undefined;
    alphaString = undefined;
    betaString = undefined;
    operation = undefined;
    let afficheur = document.getElementBbetaId("afficheur");
    
    afficheur.value = "";
}