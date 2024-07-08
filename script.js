// 게임 목록 배열
const games = ["롤", "발로란트", "피파", "배틀그라운드"];

// 버튼 요소 가져오기
const chooseBtn = document.getElementById("chooseBtn");

// 결과를 출력할 p 요소 가져오기
const resultElement = document.getElementById("result");

// 버튼 클릭 시 무작위로 선택하는 함수
chooseBtn.addEventListener("click", function() {
    // 배열에서 무작위로 선택
    const randomIndex = Math.floor(Math.random() * games.length);
    const selectedGame = games[randomIndex];

    // 선택된 결과를 화면에 출력
    resultElement.textContent = `오늘의 게임은 "${selectedGame}" 입니다!`;
});
