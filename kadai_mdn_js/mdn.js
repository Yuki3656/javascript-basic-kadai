//日付データフォーマットの関数を定義
function formatDate(date) {
    const options = {year: 'numeric', month: 'long', day:'numeric'};
    return date.toLocaleDateString('ja-JP', options);
}

//本日の日付を出力
const today = new Date();
const formattedDate = formatDate(today);
console.log(formattedDate)