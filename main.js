let i = 3;

function say_otsu(){
    const tan = "タン";
    let text = "";
    for (let x = 0; x < i; x++){
        text = text + tan;
    }
    console.log(text) 
    document.getElementById("otsu").innerText = text + "麺";
    i += 1;
}
