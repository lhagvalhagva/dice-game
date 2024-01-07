// toglogchiin eeljiig hadgalah huwisagch , 1r toglogch 0,  2r toglogchiig 1 gej temdegley
 
var activePlayer = 1;

//Tolglogchiin tsugluulsan onoog hadgalah huwisagch

var scores = [0 ,0];

//Idewhtwei toglogchiin eeljiin onoog hadgalah huwisagch    

var roundScore = 0;

//Shoonii ali talaaraa buusniiig hadgalah huwisagch , 1-6 hurtel utgiig sanamsargvi baidlaar awah  

var diceNumber = Math.floor(Math.random() * 6) +1;

// DOM <div class="player-score" id="score-0">43</div>

// document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').innerHTML = "<em>YES!<em>";


// Program ehlehed beltgy 

document.getElementById("score-0").textContent = 0;
document.getElementById('score-1').textContent = 0  ;

document.getElementById('current-1').textContent = 0;
document.getElementById('current-0').textContent = 0;

// document.querySelector('.dice').style.display = 'none';
var diceDom = document.querySelector(".dice");

document.querySelector('.btn-roll').addEventListener('click', function (){
    var diceNumber = Math.floor(Math.random() * 6) +1;

    diceDom.style.display = 'block';
    diceDom.src= 'dice-' + diceNumber +'.png';

});
