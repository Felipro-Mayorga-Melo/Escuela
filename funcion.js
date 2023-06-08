//Funcion para agregar caracteristicas al display
function append(value){
    const display = document.getElementById("display")
    display.value += value;
}

//Funcion para borrar el contenido del Display
function clearDisplay(){
    const display = document.getElementById("display")
    display.value = "";
}

//Funcion para realizar el calculo
function calculate(){
    const display = document.getElementById("display")
    const expression = display.value;

    try{
        const result = eval(expression);
        display.value = result;
    } catch (error){
        display.value = "Error";
    }
}