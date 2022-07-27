/**
 * const,letなどの変数
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数の再宣言
// var val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数の上書き
// val2 = "let変数の上書き"
// console.log(val2);

// // let変数は再宣言不可
// let val2 = "let変数再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数は上書き";

// const変数は再宣言不可
// const val3 = "const変数の再宣言"；

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "miwa",
//   age : 34
// };
// val4.age = 17;
// val4.address = "Tokyo"
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("kirin");
console.log(val5);
