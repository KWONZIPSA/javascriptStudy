console.dir(document);
console.log(document.title);
document.title = "good"; //html의 타이틀을 바꿈

console.log(document.location); //파일위치 등등
/*
document.getElementById("title");

const title = document.getElementById("title"); //html의 id 정보 가져오기

console.dir(title);
title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);
*/
const hellos = document.getElementsByClassName("hello"); //클래스가 여러개라 어레이로 불러옴

console.log(hellos);

const hi = document.getElementsByTagName("h1"); //태그이름으로 가져오기

console.log(hi);

const queryHi = document.querySelector(".hi h1:first-child"); // CSS Selector 기준으로 가져오기

console.log(queryHi);

const queryHello = document.querySelector(".hello"); // 첫번째 것만 가져옴

console.log(queryHello);

const queryHellos = document.querySelectorAll(".hello");

console.log(queryHellos);

// document.querySelector("#id")와 ducument.getElementsById("id")는 같은 작동

queryHi.innerText = "Hey"; //텍스트 바꿈
