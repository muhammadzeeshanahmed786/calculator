
var a="";
function getNum(num) {
    var input=document.getElementById("input")
    input.value +=num
    
}

function clearResult() {
    var input=document.getElementById("input")
    input.value =""
    // var a=document.getElementById("clear").disabled=true
    
}


function answer() {
    var input=document.getElementById("input")
    input.value = eval(input.value)
    // var a=document.getElementById("clear").disabled=false

    
}


function back() {
    var input=document.getElementById("input")
    input.value=input.slice(1,input-1                                                                                                               )
    
}