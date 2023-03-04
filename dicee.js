var state="initial";
state=prompt("Select to be Player 1 or 2. Type 1 or 2");
if(state=="initial"){
 document.querySelector("h1").innerHTML="Saumya Always Wins";
}
else {
 document.querySelectorAll("p")[0].innerHTML="Player"+state;
  document.querySelectorAll("p")[1].innerHTML="Saumya";
var randomVar1=Math.floor(Math.random(3)*5)+1;
var randomVar2=randomVar1+1;
var randomDiceImg1="images/dice"+randomVar1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImg1);
var randomDiceImg2="images/dice"+randomVar2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);
document.querySelector("h1").innerHTML="Saumya Always Wins";
}
