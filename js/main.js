var num1, operator, mathOperator = 0, total = 0;

function numbersPressed(event) {
    if (document.getElementById("result").innerHTML == "0") {
        document.getElementById("result").innerHTML = ""
    }
    var operator = event.target.value;
    if (operator == 12 || operator == 13 || operator == 14) {
        num1 = document.getElementById("result").innerHTML;
        document.getElementById("result").innerHTML = "0";
        mathOperator = operator;
    }
    else if (operator == 15) {
        switch (mathOperator) {
            case 12:
                total = parseFloat(num1) * parseFloat(document.getElementById("result").innerHTML);
                break;
            case 13:
                total = parseFloat(num1) - parseFloat(document.getElementById("result").innerHTML);
                break;
            case 14:
                total = parseFloat(num1) + parseFloat(document.getElementById("result").innerHTML);
                break;
        }
        document.getElementById("result").innerHTML = total;
    }
    else if (operator == 11) {
        document.getElementById("result").innerHTML = "0";
        mathOperator = 0;
        total = 0;
    }
    else {
        document.getElementById("result").innerHTML += event.target.value;
    }
}
