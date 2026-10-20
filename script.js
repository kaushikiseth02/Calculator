const display = document.getElementById('display');
function appendvalue(value){
    display.value +=value;
}
function clearDisplay(){
    display.value = '';
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}
function calculate(){
    try{
      if (display.value === '') return;
      display.value = eval(display.value);  
    } catch (error) {
        display.value = 'Error';
        settimeout(clearDisplay, 1000);
    }
}

document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || ['+', '-', '*', '/', '.'].includes(e.key)){
        appendvalue(e.key);
    } else if (e.key==='Enter'){
        calculate();
    } else if (e.key==='Backspace'){
        deleteLast();
    } else if (e.key==='Escape'){
        clearDisplay();
    }
});