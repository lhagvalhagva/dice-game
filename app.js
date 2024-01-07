// toglogchiin eeljiig hadgalah huwisagch , 1r toglogch 0,  2r toglogchiig 1 gej temdegley
 
var activePlayer = 1;

//Tolglogchiin tsugluulsan onoog hadgalah huwisagch

var scores = [0 ,0];

//Idewhtwei toglogchiin eeljiin onoog hadgalah huwisagch    

var roundScore = 0;

//Shoonii ali talaaraa buusniiig hadgalah huwisagch , 1-6 hurtel utgiig sanamsargvi baidlaar awah  

var dice = Math.floor(Math.random() * 6) +1;

// DOM <div class="player-score" id="score-0">43</div>

// document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').innerHTML = "<em>YES!<em>";


// Program ehlehed beltgy 
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;

document.querySelector('.dice').style.display = 'none';


console.log("Шоо : " + dice);