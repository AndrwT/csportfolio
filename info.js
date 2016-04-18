var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

item1.addEventListener("click", function(){
    //info showed by clicking on the LOL logo
    info1.innerHTML = "Published by Riot 'Rito' Games,Over 27 million players daily,Their are 123 different champions to play";
});
                       
item2.addEventListener("click", function(){
    //info showed by clicking on the Smite logo
    info2.innerHTML = "Developed by Hi-rez Studios,First MOBA in the third person,Characters based on various mythology";
});

item3.addEventListener("click", function(){
    //info showed by clicking on the DOTA logo
    info3.innerHTML = "Developed by Valve,DOTA's Internatianal tournament has a 18 million dollar cash pool,DOTA is trash";
});

item4.addEventListener("click", function(){
    //info showed by clicking on the HOTS logo
   info4.innerHTML = "Developed by Blizzard. Blizzard's first new game in 11 years. Only plebs play this game";
});