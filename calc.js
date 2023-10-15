function display(val){
    document.getElementById('display').value += val;
    return val;
}
function calculate(){
    let x = document.getElementById('display').value;
    let y = eval(x);
    document.getElementById('display').value = y;
    return y;
}
function clearDisplay(){
    document.getElementById('display').value = "";
}
