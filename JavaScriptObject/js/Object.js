'use strict';

//  #01 配列を作ってみよう
{
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;

  const scores = [80, 90, 40];
  console.log(scores);
}

//  #02 配列の要素にアクセスしてみよう
{
  const score = [80, 90, 40];
  console.log(score[1]);
  score[2] = 45;
  console.log(score[2]);
  // score = 10;
  console.log(score.length);
}

// #03 配列とループ処理を組み合わせよう
{
  const score2 = [80, 90, 40];
  console.log(`Score: ${score2[0]}`);
  console.log(`Score: ${score2[1]}`);
  console.log(`Score: ${score2[2]}`);

  for (let i = 0; i < score2.length; i++) {
    console.log(`Score ${i}: ${score2[i]}`);
  }
}

// #04 配列の要素を変更してみよう
{
  const score3 = [80, 90, 40, 70];
  score3.push(60, 50);
  score3.shift();

  for (let i = 0; i < score3.length; i ++) {
    console.log(`Score ${i}: ${score3[i]}`);
  }
}

//  #05 splice()で配列を変更してみよう
{
  const score4 = [80, 90, 40, 70];
  score4.splice(1, 1, 40, 50);

  for (let i = 0; i < score4.length; i++) {
    console.log(`Score ${i}: ${score4[i]}`);
  }
}

//  #06 スプレッド構文を使ってみよう
{
  const otherScore = [10, 20];
  const score = [80, 90, 40, 70, ...otherScore];
  // console.log(score);

  function sum(a, b){
    console.log(a + b);
  }

  sum(...otherScore);
}
