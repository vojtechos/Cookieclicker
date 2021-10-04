let politici = document.getElementById("politici");

var hlasy = 0;
var autoClick = 0;
var autoClick2 = 0;
var autoClick3 = 0;
var autoClick4 = 0;
var multiplier = 0;

function openmenu(){
    politici.style.display = "block";
}

function closemenu(){
    politici.style.display = "none";
}

function update(){
    document.getElementById("text").value = hlasy;
    document.title = hlasy + "hlasy";
    document.getElementById('amountAutoClicks').innerHTML = "Máš " + autoClick + " členy desinfosamuraiských stánkařů";
    document.getElementById('costAutoClick').innerHTML = "Další člen stojí " + ((autoClick+1)*12);
    document.getElementById('amountAutoClicks2').innerHTML = "Máš " + autoClick2 + " členů ideologických postav mužů";
    document.getElementById('costAutoClick2').innerHTML = "Další člen stojí " + ((autoClick2+1)*24);
    document.getElementById('amountAutoClicks3').innerHTML = "Máš " + autoClick3 + " lahví Božkov SPOLU Republika";
    document.getElementById('costAutoClick3').innerHTML = "Další Božkov stojí " + ((autoClick3+1)*48);
    document.getElementById('amountAutoClicks4').innerHTML = "Máš " + autoClick4 + " členů kapely DJ pirátů z karibiku";
    document.getElementById('costAutoClick4').innerHTML = "Další trans DJ stojí " + ((autoClick4+1)*94);

    document.getElementById('cookiesPerSecond').innerHTML = "Tuneluješ svoji stranu o " + (((autoClick)+(autoClick2*2)+(autoClick3*4)+(autoClick4*8))+multiplier) + " babiš coinů";
}
function plus() {
    hlasy = hlasy + 1;
    update();
}
function timer(){
    hlasy = hlasy + autoClick;
    hlasy = hlasy + autoClick2*2;
    update();
}
setInterval(timer, 1000)

function buyAutoClick(){
    if(hlasy >= ((autoClick+1)* 12)){
        hlasy = hlasy - ((autoClick+1)* 12);
        autoClick = autoClick + 1;
        update();
    }
}
function buyAutoClick2(){
    if(hlasy >= ((autoClick2+1)* 24)){
        hlasy = hlasy - ((autoClick2+1)* 24);
        autoClick2 = autoClick2 + 1;
        update();
    }
}
function buyAutoClick3(){
    if(hlasy >= ((autoClick3+1)* 48)){
        hlasy = hlasy - ((autoClick3+1)* 48);
        autoClick3 = autoClick3 + 1;
        update();
    }
}
function buyAutoClick4(){
    if(hlasy >= ((autoClick4+1)* 94)){
        hlasy = hlasy - ((autoClick4+1)* 94);
        autoClick4 = autoClick4 + 1;
        update();
    }
}