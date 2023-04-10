// 問題と正解の配列qaを定義
const qa = [
    ["アメリカ", "ニューヨーク", "ワシントン", "ロサンゼルス", "サンフランシスコ", 2],
    ["ドイツ", "ミュンヘン", "ベルリン", "フランクフルト", "ブレーメン", 2],
    ["イタリア", "ミラノ", "ベネチア", "ローマ", "トリノ", 3],
    ["イギリス", "マンチェスター", "バルセロナ", "マドリード", "ロンドン", 4],
    ["オーストラリア", "シドニー", "キャンベラ", "ゴールドコースト", "メルボルン", 2]
];

// カウント変数と正答数変数を初期化
let count = 0;
let correctNum = 0;
let correctAnswerRate;

// HTML要素を取得
const questionEl = document.getElementById('question');
const choiceEl = document.getElementById('choice');
const restartBtn = document.getElementById('restart-btn');

// 問題を表示する関数
function showQuestion() {
    // 問題文と選択肢を表示
    questionEl.textContent = `${count + 1}問目：${qa[count][0]}の首都は？`;
    choiceEl.innerHTML = `
      <button class="button choice" id="a1" onclick="judgment(1)">${qa[count][1]}</button>
      <button class="button choice" id="a2" onclick="judgment(2)">${qa[count][2]}</button>
      <button class="button choice" id="a3" onclick="judgment(3)">${qa[count][3]}</button>
      <button class="button choice" id="a4" onclick="judgment(4)">${qa[count][4]}</button>
    `;
    // 選択肢ボタンにクリックイベントを追加
    const answerBtns = document.querySelectorAll('.choice button');
    answerBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            judgment(index + 1);
        });
    });
}

// 結果を表示する関数
function showResult() {
    // 正答率を算出してアラートで表示し、ページをリロード
    correctAnswerRate = Math.round(correctNum / qa.length * 100);
    alert(`あなたの正解率は${correctAnswerRate}%です！`);
    location.reload();
}

// 回答を判定する関数
function judgment(btnNo) {
    if (qa[count][5] == btnNo) {
        // 正解だった場合は正答数を増やす
        correctNum++;
    }

    if (count == qa.length - 1) {
        // 最後の問題だった場合は結果を表示
        showResult();
    } else {
        // 次の問題を表示
        count++;
        showQuestion();
    }
}

// 再開ボタンにクリックイベントを追加
restartBtn.addEventListener('click', () => {
    location.reload();
});

// ページ読み込み時に最初の問題を表示
window.onload = function () {
    showQuestion();
};
