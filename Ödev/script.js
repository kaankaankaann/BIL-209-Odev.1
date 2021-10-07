function topla(){
    let sayi1= parseInt(document.getElementById("textbox1").value);
    let sayi2= parseInt(document.getElementById("textbox2").value);  
    document.getElementById("sonuc").textContent = `(${sayi1}) + (${sayi2}) = ${sayi1+sayi2}`;
}
function cikar(){
    let sayi1= parseInt(document.getElementById("textbox1").value);
    let sayi2= parseInt(document.getElementById("textbox2").value);            
    document.getElementById("sonuc").textContent = `(${sayi1}) - (${sayi2}) = ${sayi1-sayi2}`;
}
function carp(){
    let sayi1= parseInt(document.getElementById("textbox1").value);
    let sayi2= parseInt(document.getElementById("textbox2").value);             
    document.getElementById("sonuc").textContent = `(${sayi1}) x (${sayi2}) = ${sayi1*sayi2}`;
}
function bol(){
    let sayi1= parseInt(document.getElementById("textbox1").value);
    let sayi2= parseInt(document.getElementById("textbox2").value);           
    document.getElementById("sonuc").textContent = `(${sayi1}) / (${sayi2}) = ${sayi1/sayi2}`;
}