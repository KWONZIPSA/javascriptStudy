//html 전체에서 #login-form 아이디 찾고 밑에서는 그 찾은 데에서 내부내용 찾기

/*
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //JS가 오류나면 알려줌. 그래서 변수로 저장하는 것

/* html 기능인 required, maxlength 안쓰고 자바스크립트에서 하면 아래와 같이.
function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name.");
  } else if (username.length > 15) { //.length : 길이 측정
    alert("Your name is too long.");
  }
}
*/

function onLoginSubmit(event) {
  event.preventDefault(); // 첫번째 argument의 기본 실행을 막아주는 것. 첫번째 argument는 브라우저가 항상 정보를 제공함.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //백틱으로 하는거 쿼트 아님
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault(); //a태그의 링크 이동이 미작동하게 됨.
  alert("clicked");
  console.log(event);
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  //show the greetings
}
