'use strict';
// // #01 DOMについて理解しよう
// {

// }

// // #02 要素を操作してみよう
// {
//   function update() {
//     //  document.querySelector(h1).textContent = 'Changed!';
//     // document.querySelector('#target').textContent = 'Changed!';
//     document.getElementById('target').textContent = 'Changed!';
//   }
//   setTimeout(update, 1000);
// }

// // #03 複数の要素を取得してみよう
// {
//   function update() {
//     // document.querySelector('p').textContent = 'Changed!';
//     // document.querySelectorAll('p')[1].textContent = 'Changed!';
//     document.querySelectorAll('p').forEach((p, index) => {
//       p.textContent = `${index}番目のpです！`;
//     });
//   }
//   setTimeout(update, 1000);
// }

// // #04 要素の取得方法を理解しよう
// {

// }

// // #05 addEventListener()を使ってみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     document.getElementById('target').textContent = 'test!';
//   });
// }

// // #06 要素の属性を操作してみよう
// {
//   document.querySelector('button').addEventListener('click', ()=> {
//     const targetNode = document.getElementById('target');

//     targetNode.textContent = 'ボタンを押しました';
//     targetNode.title = 'This is title !';
//     targetNode.style.color = 'blue';
//     targetNode.style.backgroundColor = 'green';
//   });
// }

// // #07 classNameを操作してみよう
// {
//   document.querySelector('button').addEventListener('click',  () =>{
//     const targetNode = document.getElementById('target');

//     targetNode.className = 'my-color my-border';
//   });
// }

//#08 classListを使ってみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');
//     // targetNode.className = 'my-color my-border';
//     // targetNode.classList.add('my-color');
//     // if (targetNode.classList.contains('my-color') === true) {
//     //   targetNode.classList.remove('my-color');
//     // } else {
//     //   targetNode.classList.add('my-color');
//     // }
//     targetNode.classList.toggle('my-color');
//   });
// }

//#09 カスタムデータ属性を扱ってみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');
//     // targetNode.textContent = 'komainobuyuki';
//     targetNode.textContent = targetNode.dataset.translation;
//   })
// }

//#10 要素を追加してみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item2 = document.createElement('li');
//     item2.textContent = 'item 2';

//     const ul = document.querySelector('ul');
//     ul.appendChild(item2);
//   });
// }

// #11 要素の複製､ 挿入をしてみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true);

//     const ul = document.querySelector('ul');
//     const item1 = document.querySelectorAll('li')[1];
//     ul.insertBefore(copy, item1);
//   });
// }

//  #12 要素の削除をしてみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item1 = document.querySelectorAll('li')[1];
//     // item1.remove();
//     // 親Node.removeChild(削除するNode)
//     document.querySelector('ul').removeChild(item1);
//   });
// }

//  #13 input要素を操作してみよう
// {
//     document.querySelector('button').addEventListener('click', () => {
//       const li = document.createElement('li');
//       const text = document.querySelector('input');
//       li.textContent = text.value;
//       document.querySelector('ul').appendChild(li);

//       text.value = '';
//       text.focus();
//     });
// }

//  #14 セレクトボックスを操作してみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex} `;
//     document.querySelector('ul').appendChild(li);
//   });
// }

// #15 ラジオボタンを操作してみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors =document.querySelectorAll('input');
//     let selectedColor;

//     colors.forEach(color => {
//       if(color.checked === true) {
//         selectedColor = color.value;
//       }
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);
//   });
// }

//  #16 チェックボックスを操作してみよう
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     const selectedColors = [];

//     colors.forEach(color => {
//       if(color.checked === true) {
//         selectedColors.push(color.value);
//       }
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColors.join(',');
//     document.querySelector('ul').appendChild(li);
//   });
// }

//  #17 いろいろなイベントを見てみよう
// {
//   document.querySelector('button').addEventListener('dblclick', ()=> {
//     console.log('Double Clicked!');
//   });

//   document.addEventListener('mousemove', () => {
//     console.log('moved!');
//   });
// }

// #18 イベントオブジェクトを扱ってみよう
// {
//   document.querySelector('button').addEventListener('dblclick', ()=> {
//     console.log('Double Click !');
//   });

//   // document.addEventListener('mousemove', e => {
//   //   console.log('move!');
//   //   console.log(e.clientX, e.clientY);
//   // });

//   document.addEventListener('keydown', e => {
//     console.log(e.key);
//   })
// }

//  #19 フォームで使われるイベントを見てみよう
// {
//   const text = document.querySelector('textarea');
//   text.addEventListener('focus', () => {
//     console.log('focus');
//   });

//   text.addEventListener('blur', () => {
//     console.log('blur');
//   });

//   text.addEventListener('input', () => {
//     console.log(text.value.length);
//   });

//   text.addEventListener('change', () => {
//     console.log('change');
//   });
// }

//  #20 フォームを送信してみよう (02:53)
// {
//   document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('submit');
//   });
// }

// #21 イベントの伝播を理解しよう
// {
//   document.querySelector('ul').addEventListener('click', e => {
//     if(e.target.nodeName === 'LI') {
//       e.target.classList.toggle('done');
//     }
//   })
// }
