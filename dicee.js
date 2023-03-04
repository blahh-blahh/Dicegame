var state="initial";
state=prompt("Wanna play. Write YO if yes");
if(state=="YO"){
var randomVar1=Math.floor(Math.random(3)*6)+1;
var randomVar2=Math.floor(Math.random(3)*6)+1;
var randomDiceImg1="images/dice"+randomVar1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImg1);
var randomDiceImg2="images/dice"+randomVar2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);
if(randomVar1>randomVar2)
document.querySelector("h1").innerHTML="Player1 wins";
else if(randomVar1<randomVar2)
document.querySelector("h1").innerHTML="Player2 wins";
else
document.querySelector("h1").innerHTML="It's a tie.";}
