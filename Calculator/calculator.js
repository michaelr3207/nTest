console.log('testtsstst');


// this is a test comment
// this is a nother test commit
//this is a third commit again

function inputNumber1(number){
    const output = document.getElementById("output");
    output.value += number;
}

function clear1(){
    console.log('clearrr');
    document.getElementById("output").value = '';
}

function createArrays(input, arrOperators, arrNumbers){
    let numberBuilder = '';
    for(let item = 0; item < input.length; item ++){
        if(isOperator(input.charAt(item))){
            arrNumbers.push(numberBuilder);
            numberBuilder = '';
            arrOperators.push(input.charAt(item));
        }
        else{
            numberBuilder += input.charAt(item);
        }
        if(item === input.length-1){
            arrNumbers.push(numberBuilder);
        }
    }
}

function calculate(fNum, sNum, operator){
    let result;
    switch (operator.toLowerCase()){
        case '+' : result = fNum + sNum; break;
        case '-' : result =  fNum - sNum; break;
        case '/' : result =  fNum / sNum; break;
        case '%' : result =  fNum % sNum; break;
        case 'x' : result =  fNum * sNum; break;
    }
    return result;
}

function isOperator(char){
    if(char === '+'){
        return true;
    }
    if(char === '-'){
        return true;
    }
    if(char === '%'){
        return true;
    }
    if(char === '/'){
        return true;
    }
    if(char === 'X'){
        return true;
    }
    return false;
}

function generateNumbers(firstNum, secondNum, operatorFound, operator){
    const input = document.getElementById('output').value;
    let arrOfNumbers = [];
    let arrOfOp = [];
    createArrays(input, arrOfOp, arrOfNumbers);
    firstNum = parseInt(arrOfNumbers[0]);
    secondNum = parseInt(arrOfNumbers[1]);
    operator = arrOfOp[0];
   getResultOfCalculation(firstNum, secondNum, operator, arrOfOp, arrOfNumbers);
}

function getResultOfCalculation(firstNum, secondNum, operator, arrOfOp, arrOfNumbers){
    let resultOFirstPair = calculate(firstNum, secondNum, operator);
    let length = (arrOfNumbers.length + arrOfOp.length) - 3;
    let indexOperator = 1;
    let indexNumber = 2;
    for(let item = 0; item < length; item ++){
        resultOFirstPair = calculate(parseInt(resultOFirstPair), parseInt(arrOfNumbers[indexNumber]), arrOfOp[indexOperator]);
        indexOperator ++; indexNumber ++;
        if(indexNumber === arrOfNumbers.length){
            break;
        }
    }
    document.getElementById('output').value = resultOFirstPair;
}