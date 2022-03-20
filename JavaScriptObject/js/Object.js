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
  const score = [80, 90, 40, 70];
  score.splice(1, 1, 40, 50);

  for (let i = 0; i < score.length; i++) {
    console.log(`Score ${i}: ${score[i]}`);
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

// #07 分割代入を使ってみよう
{
  const scores = [80, 90, 40, 70];
  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, ...others] = scores;
  // console.log(others);

  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}

//#08 forEach()を使ってみよう
{
  const scores = [80, 90, 40, 70];
  scores.forEach((hikisu, index) => {
    console.log(`Score ${index}: ${hikisu}`);
  });
}

// #09 map()を使ってみよう
{
  const prices = [180, 190, 200];
  // const updatedPrices = prices.map((price) => {
  //   return price + 20;
  // });
  const updatedPrices = prices.map(price => price + 20);
  console.log(updatedPrices);
}

// #10 filter()を使ってみよう
{
  const numbers = [1, 4, 7, 8, 10];
  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  console.log(evenNumbers);
}

// #11 オブジェクトを作ってみよう
{
  // const point = [100, 180];
  // const point = {x: 100, y: 180};
  const point = {
    x: 100,
    y: 180,
  };
  console.log(point);
}

// #12 プロパティを操作してみよう
{
  const point = {
    x: 100,
    y: 180,
  };

  // point['x'] = 150;
  // console.log(point['y']);
  point.z = 90;
  delete point.y;
  console.log(point);
}

//  #13 オブジェクトを操作してみよう
{
  const otherProps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x: 100,
    y: 180,
    ...otherProps,
  };
  // console.log(point);
  const {x, r, ...others} = point;
  console.log(x);
  console.log(r);
  console.log(others);
}

//#14 Object.keys()を使ってみよう
{
  const point = {
    x: 100,
    y: 180,
  };

  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`Key: ${key} Value: ${point[key]}`);
  });

  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ];
  console.log(points[1].y);
}

//  #15 変数を代入してみよう
{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x);
  // console.log(y);

  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x);
  console.log(y);
}

//  #16 変数の挙動を理解しよう
{
  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x);
  console.log(y);
}

// #17 文字列を操作してみよう
{
  const str = 'hello';
  console.log(str.length);
  console.log(str.substring(2, 4));
  // str.substring(開始位置, 終了位置);
  console.log(str[0]);
}

//  #18 join()､split()を使ってみよう
{
  const d = [2019, 11, 14];
  console.log(d.join('/'));
  console.log(d.join(''));

  const t = '17:08:24';
  // console.log(t.split(':'));
  const [hour, minute, second] = t.split(':');
  console.log(minute);
}

//  #19 数値を操作してみよう
{
  const score = [10, 3, 9];

  let sum = 0;

  score.forEach(score => {
    sum +=score;
  });

  const avg = sum / score.length;
  console.log(sum);
  console.log(avg);
  console.log(Math.floor(avg));
  console.log(Math.ceil(avg));
  console.log(Math.round(avg));
  console.log(avg.toFixed(3));
  console.log(Math.random());
}

// #20 ランダムな整数値を作ってみよう
{
  console.log(Math.random());

  // 0, 1, 2
  // Math.floor(Math.random() * 3)
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // min, ..., max
  // Math.floor(Math.random() * (max + 1 - min)) + min

  console.log(Math.floor(Math.random() *6) +1);
}

// #21 現在日時を扱ってみよう
{
  const d = new Date();
    console.log(d);
  console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
}

// #22 特定の日時を扱ってみよう
{
  const d = new Date(2019, 10);
  d.setHours(10, 20, 30);
  d.setDate(31);
  d.setDate(d.getDate() + 3);
  console.log(d);
}

//  #23 alert()､confirm()を使ってみよう
{
  alert('hello');
  const answer = confirm('削除しますか？');
  if (answer) {
    console.log('削除しました');
  } else {
    console.log('キャンセルしました');
  }
}

//#24 setInterval()を使ってみよう
{
  // let i = 0;

  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(intervalId);
  //   }
  // }

  // const intervalId = setInterval(showTime, 1000);
}

//#25 setTimeout()を使ってみよう
{
  // let i = 0;
  // function showTime() {
  //   console.log(new Date());
  //   const timeoutId = setTimeout(showTime, 1000);
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timeoutId);
  //   }
  // }
  // showTime();
}

//  #26 タイマー処理の違いを理解しよう
{

}

// #27 例外処理を使ってみよう
{
  const name = 'komai';

  try {
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }
  console.log('Finish!');
}

// #28 オブジェクトが複数ある場合を考えよう
{
  const posts = [
    {
      text: 'JavaScriptの勉強中です',
      likeCount: 0,
    },
    {
      text: 'プログラミング楽しいです',
      likeCount: 0,
    },
  ];

  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  show(posts[1]);
}

// #29 メソッドを使ってみよう
{
  const posts = [
    {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];
  posts[0].show();
  posts[1].show();
}

// #30 クラスの概念を理解しよう
{

}

//#31 クラスを作ってみよう
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
  }

  const posts = [
    new Post('javaScriptの勉強中です！'),
    new Post('プログラミング楽しいです!'),
  ];

  posts[0].show();
  posts[1].show();
}

//#32 カプセル化を理解しよう
{
  class Post {
    constructor(text){
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.likeCount++;
      this.show();
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中!'),
    new Post('プログラミング楽しいです！')
  ];

  posts[0].like();
  // posts[0].likeCount++;

  // posts[0].show();
  // posts[1].show();
}
// #33 静的メソッドを使ってみよう
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
    static showInfo(){
      console.log('Post class version 1.0');
    }
  }

  const posts = [
    new Post('JavaScript勉強中です！'),
    new Post('プログラミング楽しいです！')
  ];

  Post.showInfo();//静的メソッド：インスタンスを介さずに呼び出す
}

// #34 クラスを拡張したい場合を考えよう
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost {
    constructor(text, sponsor) {
      this.text = text;
      this.likeCount = 0;
      this.sponsor = sponsor;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
      console.log(`... sponsored by ${this.sponsor}`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'hope_lab.work'),
  ];

  posts[2].show();
  posts[2].like();
}


//#35 クラスを継承してみよう
{
  class Post { // 親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post {//子クラス
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'hope_lab.work'),
  ];

  posts[2].show();
  posts[2].like();

}
