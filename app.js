// toglogchiin eeljiig hadgalah huwisagch , 1r toglogch 0,  2r toglogchiig 1 gej temdegley

var activePlayer = 0;

//Tolglogchiin tsugluulsan onoog hadgalah huwisagch

var scores = [0, 0];

//Idewhtwei toglogchiin eeljiin onoog hadgalah huwisagch

var roundScore = 0;

//Shoonii ali talaaraa buusniiig hadgalah huwisagch , 1-6 hurtel utgiig sanamsargvi baidlaar awah

var diceNumber = Math.floor(Math.random() * 6) + 1;

// DOM <div class="player-score" id="score-0">43</div>

// document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').innerHTML = "<em>YES!<em>";

// Program ehlehed beltgy

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-1").textContent = 0;
document.getElementById("current-0").textContent = 0;

// document.querySelector('.dice').style.display = 'none';
var diceDom = document.querySelector(".dice");

// shoo buulgaad buulgsn utgiig randomoor ogon delgetsend haruulah(event listener)
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //shoonii zurgiig web deer haruulah
  diceDom.style.display = "block";
  //buusan shoonii toog haruulah
  diceDom.src = "dice-" + diceNumber + ".png";
  //Buusan too ni 1s ylgaatai bol idewtei toglogchiin eeljiin toog nemegdvvlne

  if (diceNumber !== 1) {
    //1-s ylgaatai vyd idewtei toglogch shoogoo haysaar baina
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchtonextPlayer();
  }
});

//HOLD towchnii event listener

document.querySelector(".btn-hold").addEventListener("click", function () {
  //ug toglogchiin tsugluulsan onoog onoon deer ni nemeh
  scores[activePlayer] = scores[activePlayer] + roundScore;

  //delgets deer onoog oorchloh
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //toglogch hojson esehiig shalgah (onoo ni 100s ih)
  if (scores[activePlayer] >= 10) {
    //Ylagchiin nernii orond winner gargah
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document.classList.remove("active");
  } else {
    switchtonextPlayer();
  }
});
function switchtonextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //toglogchiin eeljin deer tsugluulsan onoog 0 bolgono
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Ulaan tsegiig shiljvvleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tvr alga bolgoh
  diceDom.style.display = "none";
}

// shine game ehlvvleh tobchnii event listener

document.querySelector(".btn-new").addEventListener("click", function () {
  alert("New game");
});
