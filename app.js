function myf1(){
    document.getElementById('div1').removeAttribute("class");
    document.getElementById("div1").setAttribute("class","visible");
    document.getElementById('div2').removeAttribute("class");
    document.getElementById("div2").setAttribute("class","hidden");
    document.getElementById('div3').removeAttribute("class");
    document.getElementById("div3").setAttribute("class","hidden");
    document.getElementById('blur').setAttribute("class", "onblur");


}

function myx1(){
    document.getElementById('div1').removeAttribute("class");
    document.getElementById("div1").setAttribute("class","hidden");
    document.getElementById('blur').removeAttribute("class");

}
function myf2(){
    document.getElementById('div2').removeAttribute("class");
    document.getElementById("div2").setAttribute("class","visible");
    document.getElementById('div3').removeAttribute("class");
    document.getElementById("div3").setAttribute("class","hidden");
    document.getElementById('div1').removeAttribute("class");
    document.getElementById("div1").setAttribute("class","hidden");
    document.getElementById('blur').setAttribute("class", "onblur");

}

function myx2(){
    document.getElementById('div2').removeAttribute("class");
    document.getElementById("div2").setAttribute("class","hidden");
    document.getElementById('blur').removeAttribute("class");


}
function myf3(){
    document.getElementById('div3').removeAttribute("class");
    document.getElementById("div3").setAttribute("class","visible");
    document.getElementById('div2').removeAttribute("class");
    document.getElementById("div2").setAttribute("class","hidden");
    document.getElementById('div1').removeAttribute("class");
    document.getElementById("div1").setAttribute("class","hidden");
    document.getElementById('blur').setAttribute("class", "onblur");

}

function myx3(){
    document.getElementById('div3').removeAttribute("class");
    document.getElementById("div3").setAttribute("class","hidden");
    document.getElementById('blur').removeAttribute("class");


}