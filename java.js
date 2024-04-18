function addnumbers (){
    let firstNumber = parseFloat(document.getElementById("first").value);
    let secondNumber = parseFloat(document.getElementById("second").value);
    let total = firstNumber + secondNumber;
    document.getElementById("output").innerHTML= total;
    //alert(total);
}
function substractnumbers (){
    let firstNumber = parseFloat(document.getElementById("first").value);
    let secondNumber = parseFloat(document.getElementById("second").value);
    let total = firstNumber - secondNumber;
    document.getElementById("output").innerHTML= total;
    //alert(total);
}

function dividenumbers (){
    let firstNumber = parseFloat(document.getElementById("first").value);
    let secondNumber = parseFloat(document.getElementById("second").value);
    let total = firstNumber / secondNumber;
    document.getElementById("output").innerHTML= total;
    //alert(total);
}

function multiplynumbers (){
    let firstNumber = parseFloat(document.getElementById("first").value);
    let secondNumber = parseFloat(document.getElementById("second").value);
    let total = firstNumber * secondNumber;
    document.getElementById("output").innerHTML= total;
    //alert(total);
}

function remainder(){
    let firstNumber = parseFloat(document.getElementById("first").value);
    let secondNumber = parseFloat(document.getElementById("second").value);
    let remainder = firstNumber % secondNumber;
    document.getElementById("output").innerHTML= remainder;
    //alert(remainder);
}

function reset(){
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = "";
}
    
    




 /*let firstNumber = parseFloat(prompt('enter your firstNumber'));
 let secondNumber = parseFloat(prompt('enter your secondNumber'));
 let total = firstNumber + secondNumber;
 console.log(total);*/






