var h1=document.createElement("h1");
h1.innerHTML="Online Digital Calculator";

var div=document.createElement("div");
div.setAttribute("class","container ");

var p=document.createElement("p");
p.innerHTML="Calc.k";

// Display creation
var dis=document.createElement("input");
dis.setAttribute("type","text");
dis.setAttribute("id","Cdisplay");

var Cdis = document.getElementById("Cdisplay");

// Memory button creation 
// var ip1 = create("input","class","btn Mbtn","type","button","value","MC","onclick","mbtn(value)");
// var ip2 = create("input","class","btn Mbtn","type","button","value","MR","onclick","mbtn(value)");
// var ip3 = create("input","class","btn Mbtn","type","button","value","M+","onclick","mbtn(value)");
// var ip4 = create("input","class","btn Mbtn","type","button","value","M-","onclick","mbtn(value)");
// var ip5 = create("input","class","btn Mbtn","type","button","value","MS","onclick","mbtn(value)");

// Operator button creation
var ip6 = create("input","class","btn Obtn","type","button","value","%","onclick","per(value)");
var ip7 = create("input","class","btn Obtn","type","button","value","√","onclick","sqrt(value)");
var ip8 = create("input","class","btn Obtn","type","button","value","^","onclick","pow(value)");
var ip9 = create("input","class","btn Obtn","type","button","value","C","onclick","cancel()");
var ip10 = create("input","class","btn Obtn","type","button","value","←","onclick","backspace()");

// Numeric & Operator button creation
var ip11 = create("input","class","btn Nbtn","type","button","value","7","onclick","nbtn(value)");
var ip12 = create("input","class","btn Nbtn","type","button","value","8","onclick","nbtn(value)");
var ip13 = create("input","class","btn Nbtn","type","button","value","9","onclick","nbtn(value)");
var ip14 = create("input","class","btn Obtn","type","button","value","*","onclick","obtn(value)");
var ip15 = create("input","class","btn Obtn","type","button","value","sin","onclick","sin(value)");

var ip16 = create("input","class","btn Nbtn","type","button","value","4","onclick","nbtn(value)");
var ip17 = create("input","class","btn Nbtn","type","button","value","5","onclick","nbtn(value)");
var ip18 = create("input","class","btn Nbtn","type","button","value","6","onclick","nbtn(value)");
var ip19 = create("input","class","btn Obtn","type","button","value","/","onclick","obtn(value)");
var ip20 = create("input","class","btn Obtn","type","button","value","cos","onclick","cos(value)");

var ip21 = create("input","class","btn Nbtn","type","button","value","1","onclick","nbtn(value)");
var ip22 = create("input","class","btn Nbtn","type","button","value","2","onclick","nbtn(value)");
var ip23 = create("input","class","btn Nbtn","type","button","value","3","onclick","nbtn(value)");
var ip24 = create("input","class","btn Obtn","type","button","value","+","onclick","obtn(value)");
var ip25 = create("input","class","btn Obtn","type","button","value","tan","onclick","tan(value)");

var ip26 = create("input","class","btn Obtn","type","button","value","±","onclick","pm(value)");
var ip27 = create("input","class","btn Nbtn","type","button","value","0","onclick","nbtn(value)");
var ip28 = create("input","class","btn Obtn","type","button","value",".","onclick","obtn(value)");
var ip29 = create("input","class","btn Obtn","type","button","value","-","onclick","obtn(value)");
var ip30 = create("input","class","btn Obtn","type","button","value","=","onclick","result()");

// Operator button creation
var ip31 = create("input","class","btn Obtn","type","button","value","1/x","onclick","divise(value)");
var ip32 = create("input","class","btn Obtn","type","button","value","x²","onclick","sq(value)");
var ip33 = create("input","class","btn Obtn","type","button","value","(","onclick","obtn(value)");
var ip34 = create("input","class","btn Obtn","type","button","value",")","onclick","obtn(value)");
var ip35 = create("input","class","btn Obtn","type","button","value","π","onclick","pi(value)");

// Break button creation
var br1 = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
var br4 = document.createElement("br");
var br5 = document.createElement("br");
var br6 = document.createElement("br");
var br7 = document.createElement("br");

// Appending part:
// div.append(p,dis,br1,ip1,ip2,ip3,ip4,ip5,br2,ip6,ip7,ip8,ip9,ip10,br3,ip11,ip12,ip13,ip14,ip15,br4,ip16,ip17,ip18,ip19,ip20,br5,ip21,ip22,ip23,ip24,ip25,br6,ip26,ip27,ip28,ip29,ip30,br7,ip31,ip32,ip33,ip34,ip35);
// document.body.append(h1,div);

div.append(p,dis,br1,br2,ip6,ip7,ip8,ip9,ip10,br3,ip11,ip12,ip13,ip14,ip15,br4,ip16,ip17,ip18,ip19,ip20,br5,ip21,ip22,ip23,ip24,ip25,br6,ip26,ip27,ip28,ip29,ip30,br7,ip31,ip32,ip33,ip34,ip35);
document.body.append(h1,div);

// Function part
function create(tag,attr1,value1,attr2,value2,attr3,value3,attr4,value4){
    var ele=document.createElement(tag);
    ele.setAttribute(attr1,value1);
    ele.setAttribute(attr2,value2);
    ele.setAttribute(attr3,value3);
    ele.setAttribute(attr4,value4);
    return ele;    
}

function nbtn(value){
    Cdisplay.value += value;
}

function obtn(value){
    Cdisplay.value += value;
}

function cancel(){
    Cdisplay.value = " ";
}

function backspace(){
    Cdisplay.value = Cdisplay.value.slice(0,-1);
}

function cos(value){
    Cdisplay.value += 'Math.cos(';
}

function sin(value){
    Cdisplay.value += 'Math.sin(';
}

function tan(value){
    Cdisplay.value += 'Math.tan(';
}

function pi(value){
    Cdisplay.value += 'Math.PI';
}

function sqrt(value){
    Cdisplay.value += 'Math.sqrt(';
}

function pow() {
    let base = prompt("Enter the base:");
    let exponent = prompt("Enter the exponent:");
    let result = Math.pow(base, exponent);
    Cdisplay.value = result;
  }

function per(value){
    Cdisplay.value = Cdisplay.value /100;
}

function pm(value){
    Cdisplay.value=(Cdisplay.value==Math.abs(Cdisplay.value)?-(Cdisplay.value):Math.abs(Cdisplay.value))
}

function divise(value){
    Cdisplay.value = 1/Cdisplay.value;
}

function sq(value){
    Cdisplay.value = Cdisplay.value*Cdisplay.value;
}

function result(){
    try{
        var res = eval(Cdisplay.value)
        Cdisplay.value = res;
    }
    catch{
        alert("Only Numbers are allowed");
    }
}
