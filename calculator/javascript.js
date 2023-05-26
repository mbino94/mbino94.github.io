function toScreen(Num){
    calcs = document.querySelector('.oparator');
    newNum = calcs.innerText + Num;
    calcs.innerText = newNum;
}

function clearer(){
    calcs = document.querySelector('.oparator');
    calcsResult = document.querySelector('.result');
    calcs.innerText = " ";
    resultTexts = calcsResult.innerText;
    calcsResult.innerText = " ";
}

function backSpace(){
    calcs = document.querySelector('.oparator');
    Texts = calcs.innerText;
     lastNumIndex = Texts.length - 1;
     calcs.innerText = Texts.substring(0,lastNumIndex);
}

function equal(){
    calcs = document.querySelector('.oparator');
    calcsResult = document.querySelector('.result');
    Texts = calcs.innerText;
    resultTexts = calcsResult.innerText;
    result = eval(Texts);
    calcsResult.innerText = '= ' + result;
}