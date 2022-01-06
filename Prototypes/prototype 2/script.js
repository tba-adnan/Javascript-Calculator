var aString;
var bString;
var calculatrice = new Calculatrice()



function onClickNumber(number) {

    if (calculatrice.a == undefined) {
        if (aString == undefined) {
            aString = ""
        }
        aString += number

    } else {
        if (bString == undefined) {
            bString = ""
        }
        bString += number
    }


    // if (aString == undefined) {
    //     aString = number
    // } else {
    //     bString = number
    // }

    display()
}

function display(number) {
    var display = document.getElementById("display")
    display.value = ''

    if (calculatrice.a != undefined && calculatrice.b != undefined && calculatrice.operation != undefined) {
        display.value = number
    } else {
        if (aString != undefined) {
            display.value += aString
        }
        if (calculatrice.operation != undefined) {
            display.value += calculatrice.operation
        }
        if (bString != undefined) {
            display.value += bString
        }
    }

}


function onClickOperation(operationParm) {
    if (calculatrice.operation == undefined) {
        calculatrice.operation = operationParm
        calculatrice.a = parseFloat(aString)
    }

    display()
}

function equal() {
    calculatrice.a = parseFloat(aString);
    calculatrice.b = parseFloat(bString);


    display(calculatrice.calculate())

}


function resetValues() {
    calculatrice.init()
    aString = undefined;
    bString = undefined;
    let display = document.getElementById("display");

    display.value = "";
}