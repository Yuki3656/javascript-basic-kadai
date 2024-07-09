//変数の宣言
let num;

//値の代入
num = 15

/*変数numの値が3であれば、３の倍数ですという文字列を出力する
5であれば、５の倍位数ですという文字列を出力する
３と５の倍位数であれば、３と５の倍位数ですという文字列を出力する
それ以外は変数(num)を出力する*/
if(num%15===0){
    console.log('3と５の倍数です');
}else if(num%3===0){
    console.log('3の倍数です');
}else if(num%5===0){
    console.log('５の倍数です');
}else {
    console.log(num);
}