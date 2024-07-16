//idを使用して要素を選択
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
//2秒の待ち時間を設定し、非同期処理を実行する
    setTimeout(() => {
    text.textContent='ボタンをクリックしました';
}, 2000);
})

