let colorRed = document.getElementById('primero')
let colorYellow = document.getElementById('segundo')
let colorGreen = document.getElementById("tercero")

//console.log(colorRed, colorYelllow, colorGreen);

colorRed.addEventListener("click", (event) => {
    if(colorRed.classList[0] === "rojo"){
        colorRed.classList.remove("rojo")
        colorRed.classList.add("amarillo")
    }
    else{
        colorRed.classList.remove("amarillo")
        colorRed.classList.add("rojo")
    }
})
 
colorYellow.addEventListener("click" ,(event) =>{
    if(colorYellow.classList[0] === "amarillo"){
        colorYellow.classList.remove("amarillo")
        colorYellow.classList.add("verde")
    }
    else{
        colorYellow.classList.remove("verde")
        colorYellow.classList.add("amarillo")
    }
})

colorGreen.addEventListener("click", () =>{
    if(colorGreen.style.backgroundColor === "")
    colorGreen.style.backgroundColor = "red";
    else if(colorGreen.style.backgroundColor === "red"){
        colorGreen.style.backgroundColor ="yellow";
    } 
    else{
        colorGreen.style.backgroundColor ="";
    }
    console.log(colorGreen)
})
