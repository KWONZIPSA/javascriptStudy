const h1 = document.querySelector("div:nth-child(2) h1");

console.log(h1);

h1.innerText = "good job!";

h1.style.color = "blue"; //css에 직접 값을 전달

function handleH1Click() {
  h1.style.color = "tomato";
  h1.innerText = "don't do that!!!!";
  console.log("h1 was clicked!");
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone!!!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "teal";
}

function handleWindowCopy() {
  alert("Copied");
}

function handleWindowOffline() {
  alert("No Connection");
}

function handleWindowOnline() {
  alert("Now Online");
}

//자바스크립트가 나 대신 실행해주는거야!
h1.onclick = handleH1Click; //addEventListener랑 기능은 같음. 근데 .removeEnentListener 같이 연계해서 못써서 탈락!
h1.addEventListener("click", handleH1Click); // 클릭했을 떄 func 실행
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

console.dir(h1); //on~어쩌고는 이벤트임.

window.addEventListener("resize", handleWindowResize); //창의 내용이 바뀌면 작동 여기서는 리사이즈
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//document.body는 되고, document.div는 안돼. body,head,title 등은 허용 div, p는 querySelector, getElementByID 등으로 호출
