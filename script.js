//問題と答えを定義
//["国名", "選択肢1", "選択肢2", "選択肢3", "選択肢4", 正解の番号]
var qa = [
  ["アメリカ", "ニューヨーク", "ワシントン", "ロサンゼルス", "サンフランシスコ", 2],
  ["ドイツ", "ミュンヘン", "ベルリン", "フランクフルト", "ブレーメン", 2],
  ["イタリア", "ミラノ", "ベネチア", "ローマ", "トリノ", 3],
  ["イギリス", "マンチェスター", "バルセロナ", "マドリード", "ロンドン", 4],
  ["オーストラリア", "シドニー", "キャンベラ", "ゴールドコースト", "メルボルン", 2]
];

var count = 0;
var correctNum = 0; //正解数
var correctAnswerRate; //正答率

window.onload = function () {
  // 最初の問題を表示
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + "問目：" + qa[count][0];
  var a1 = document.getElementById('a1');
  a1.innerHTML = qa[count][1];
  var a2 = document.getElementById('a2');
  a2.innerHTML = qa[count][2];
  var a3 = document.getElementById('a3');
  a3.innerHTML = qa[count][3];
  var a4 = document.getElementById('a4');
  a4.innerHTML = qa[count][4];
};

// クリック時の答え判定
function judgment(btnNo) {
  if (qa[count][5] == btnNo) {
    correctNum++;
  }

  if (count == qa.length - 1) { //最後の問題までやったら正解数を表示してリロードする
    correctAnswerRate = correctNum / qa.length * 100;
    alert('あなたの正解率は' + correctAnswerRate + '％です！');
    location.reload();
  }

  // 次の問題を表示
  count++;
  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + "問目：" + qa[count][0];
  var a1 = document.getElementById('a1');
  a1.innerHTML = qa[count][1];
  var a2 = document.getElementById('a2');
  a2.innerHTML = qa[count][2];
  var a3 = document.getElementById('a3');
  a3.innerHTML = qa[count][3];
  var a4 = document.getElementById('a4');
  a4.innerHTML = qa[count][4];
}