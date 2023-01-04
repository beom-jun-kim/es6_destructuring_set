// function getObj() {
//   const name = "crong";
//   const getName = function () {
//     return name;
//   };
//   const setName = function () {
//     name = newname;
//   };
//   const printName = function () {
//     console.log(name);
//   };

//   //새로운 obj 반환
//   return { getName, setName, name };
// }

// const obj = getObj();
// console.log(obj.getName()); /* crong */

///////////////////////////////

// // Destructuring Array
// let data = ["a", "b", "c", "d", "e"];

// // 0 , 2 이러한 이름으로 쓰겠다 (배열의 형태)
// let [a1, ,b2] = data;
// console.log(a1, b2); /* a c */

// // Destructuring Object
// let obj = {
//     name: "beomjun",
//     address:"korea",
//     age: 12,
// }

// // let {name,age} = obj;
// // console.log(name,age);

// let{name:myName,age:myAge} = obj;
// console.log(myName,myAge); /* beomun 12 */

///////////////////////////////

// // Destructuring활용 json파싱
// const news = [
//   {
//     title: "sbs",
//     url: "http://sbs.co.kr",
//     list: ["안녕?", "hi", "hello"],
//   },
//   {
//     title: "mbc",
//     url: "http://mbc.co.kr",
//     list: ["그래", "맞아", "아니야"],
//   },
// ];

// 1
// let [, mbc] = news;
// let {title, url} = mbc;
// console.log(title, url); /* mbc http://mbc.co.kr */

// 2
// let [, { title, url }] = news;
// console.log(url); /* http://mbc.co.kr */

// 3
// function getNewsData([,{list}]){
//     console.log(list); /* "그래", "맞아", "아니야" */
// }

// getNewsData(news);

///////////////////////////////

// // Destructuring활용 event객체전달
// document.querySelector("div").addEventListener("click",function({target}){
//     console.log(target.nodeName) /* div */;
// });

///////////////////////////////

// // set으로 유니크한 배열만들기
// //  중복없이 유일한 값을 저장하려고 할 때 : 이미 존재하는지 체크할 때 유용
// let mySet = new Set();

// mySet.add("hi");
// mySet.add("hello");
// mySet.add("hi");

// mySet.forEach(function(value){
//     console.log(value); /* hi hello */
// });

///////////////////////////////