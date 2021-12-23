// Variables
let x, y, solution, operation;
let xString, yString;

function Calculate(x, y, operation) {
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = x + y;
            break;
        case '-':
            _solution = x - y;
            break;
        case '/':
            _solution = x / y;
            break;
        case '*':
            _solution = x * y;
            break;
        default:
            break;
    }
    return _solution;
}

function SelectNumber(number) {
    if (x == undefined) {
        if (xString == undefined) xString = '';
        xString += number;
    } else {
        if (yString == undefined) yString = '';
        yString += number;
    }

    Display();
}

function Display(number) {

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";

    if (x != undefined && y != undefined && operation != undefined) {

        afficheur.value = number;
    } else {
        if (xString != undefined)
            afficheur.value += xString
        if (operation != undefined)
            afficheur.value += operation
        if (yString != undefined)
            afficheur.value += yString

    }
}


function Operation(operationParam) {
    if (operation == undefined) {
        operation = operationParam;
        x = parseFloat(xString);
        Display();
    } else {
        alert("Une operation existent déjà! " + operation);
    }
}

function Jet() {
    x = parseFloat(xString);
    y = parseFloat(yString);
    solution = Calculate(x, y, operation);
    Display(solution);
}

function Restart() {
    x = undefined;
    y = undefined;
    xString = undefined;
    yString = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
}