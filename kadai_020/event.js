//idを使用して要素を選択
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {

    //文字列の表示を変える
text.textContent='ボタンをクリックしました';
})

