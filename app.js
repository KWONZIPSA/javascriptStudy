/*

// alert("hi"); // hi라는 알럿 띄움

123123; // integer
1.4; //float
("my name is jhyuk"); //string

console.log(123123); //콘솔에 로그를 출력하는 방법
console.log("hihi");

const a = 5; // 더 게을러지기 위해 variable을 사용할거야. 값을 저장하거나 유지하는 기능
const b = 2; //const는 상수라는 뜻

const myName = "jhyuk";
const veryLongVariableName = "joonghyuk"; //camel capital이라고 자바스크립트에서 통용되는 표현방법

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

let c = 5; //variable 업데이트 가능, 업데이트 하고 싶을때만 let 사용
const d = 2; // 불가능, 고정된 값이고 const가 기본적으로 사용
let yourName = "jieun";

//옛날에는 var를 썼는데 var는 고정/업데이트 개념이 없이 업데이트할 수 있음 
그래서 오류가 나도 안알려줌.//

console.log(c + d);
console.log("hello " + yourName);
yourName = "HwangJiEun"; //변수 업데이트
console.log(yourName); //변경된 변수 출력

*/

/*
//boolean

const amIFat = true; //true/false같은게 boolean임. 0과 1처럼.
console.log(amIFat);

const amISkinny = null; //데이터 값이 없음을 의도적으로 표현하는 것
console.log(amISkinny);

let amINormal;
console.log(amINormal); //undefined 변수를 인지하고 있지만 값이 없는 것
*/

//array

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, "hello", false, true, null, undefined, "jhyuk"];

console.log(dayOfWeek);

console.log(dayOfWeek[2]); //0부터 숫자 셀것 Get Item from Array

// Add one more day to the array
dayOfWeek.push("sun");

console.log(dayOfWeek);

//object
/*
const playerName = "KZS";
const playerPoints = 1213123;
const playerHandsome = true;
const playterFat = "little bit";
*/

// player[0]==name
// const player = ["KZS", 1213123, true, "little bit"];//

// 위에 것도 구림 그래서 object가 필요한 것

const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false; //const 안에 있는 object를 수정하는 것이기 때문에 오류가 안나는 것. player 자체를 업데이트하면 상수라 오류남.
player.lastName = "koo";
player.points = player.points + 15; //기존 점수에 15점 더해!
console.log(player);

//Functions part one & two

//player.points는 숫자지 func.가 아님. func.는 계속해서 쓸 수 있는 일종의 코드

function sayHeollo(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I am " + age);
}
//nameOfPerson은 해당 func.밖에서는 존재할 수 없음.

sayHeollo("Joong", 12);
sayHeollo("Hyuk", "");
sayHeollo("", 10);

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(); //NaN 출력하는데 Not a Number라는 뜻.

plus(2, 3);
divide(2, 3);

const newplayer = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello! " + otherPersonsName + " good to see you");
  },
};

console.log(newplayer.name);
newplayer.sayHello("Koo", console);
newplayer.name = "Booya"; //프로퍼티 업데이트
console.log(newplayer);
newplayer.job = "warrior"; //새로운 프로퍼티 추가
console.log(newplayer);

const toBuy = ["cookie", "potato chips", "ramen"];
console.log(toBuy);
toBuy[2] = "water"; //3번째 아이템 바꿔
console.log(toBuy);
toBuy.push("chocolate"); //어레이 추가
console.log(toBuy);

//숙제
//
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multifly: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 5); //이렇게 하면 콘솔에서 plusResult 입력하면 값을 볼 수 있어
const minusResult = calculator.minus(plusResult, 5);
const multiflyResult = calculator.multifly(2, minusResult);
const divideResult = calculator.divide(multiflyResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(powerResult);

const age = 96;
function calculateKrAge(ageOfForeinger) {
  console.log("Hello"); //이건 작동
  return ageOfForeinger + 2; //리턴하고 끝 func 종료됨
  console.log("bye"); //리턴 끝나서 미작동
}

const Krage = calculateKrAge(age);
console.log(Krage);

//conditional 조건문

const liquorAge = parseInt(prompt("How old are you?"));

parseInt(); //스트링을 넘버로 근데 문자를 넣으면 NaN 뜸

console.log(typeof parseInt(liquorAge), parseInt(liquorAge));
//데이터 입력 전까지 자바스크립트는 일시정지 근데 더이상 안써 CSS도 적용도 안되고 버튼도 못하고 팝업도 못뜸
//typeof는 타입을 볼 수 있어
