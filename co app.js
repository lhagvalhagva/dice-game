// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;

// Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;

// Хоёр тоглогчийн цуглуулсан оноонууд
var scores;

// Идэвхтэй тоглогчийн цуглуулж байгаа ээлжийн оноо.
var roundScore;

// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалъя
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ.
initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  // Тоглоом эхэллээ гэдэг төлөвт оруулна.
  isNewGame = true;

  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Програм эхлэхэд бэлтгэе
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";

    // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
      // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү");
  }
});

// HOLD товчны эвент листенер
if (isNewGame) {
  document.querySelector(".btn-hold").addEventListener("click", function () {
    // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр оноог нь өөрчилнө
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
    if (scores[activePlayer] >= 10) {
      // Тоглоомыг дууссан төлөвт оруулна
      isNewGame = false;

      // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Тоглогчийн ээлжийг солино.
      switchToNextPlayer();
    }
  });
} else {
  alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү");
}

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer() {
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
}

// New Game буюу Шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);

//----------------------------------------------------------------

var activePlayer, scores, roundScore, isNewGame;
var diceDom = document.querySelector(".dice");

initGame();

function initGame() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  isNewGame = true;
  //Shoonii ali talaaraa buusniiig hadgalah huwisagch , 1-6 hurtel utgiig sanamsargvi baidlaar awah

  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Program ehlehed beltgy

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("current-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  diceDom.style.display = "none";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".layer-1-panel").classList.remove("winner");
  document.querySelector(".layer-0-panel").classList.remove("winner");

  document.querySelector(".layer-1-panel").classList.remove("active");
  document.querySelector(".layer-0-panel").classList.remove("active");

  document.querySelector(".layer-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

// shoo buulgaad buulgsn utgiig randomoor ogon delgetsend haruulah(event listener)
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiig web deer haruulah
    diceDom.style.display = "block";
    // buusan shoonii toog haruulah
    diceDom.src = "dice-" + diceNumber + ".png";
    // Buusan too ni 1s ylgaatai bol idewtei toglogchiin eeljiin toog nemegdvvlne

    if (diceNumber !== 1) {
      // 1-s ylgaatai vyd idewtei toglogch shoogoo haysaar baina
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchtonextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна New game товчыг даран эхлүүлнэ үү");
  }
});

//HOLD towchnii event listener
if (isNewGame) {
  document.querySelector(".btn-hold").addEventListener("click", function () {
    //ug toglogchiin tsugluulsan onoog onoon deer ni nemeh
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //delgets deer onoog oorchloh
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //toglogch hojson esehiig shalgah (onoo ni 100s ih)
    if (scores[activePlayer] >= 10) {
      isNewGame = false;
      //Ylagchiin nernii orond winner gargah
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchtonextPlayer();
    }
  });
} else {
  alert("Тоглоом дууссан байна New game товчыг даран эхлүүлнэ үү");
}

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
document.querySelector(".btn-new").addEventListener("click", initGame);
