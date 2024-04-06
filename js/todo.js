const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input")과 같음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = []; //array 만들기

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify()는 스트링으로 바꿔줌
}

function deleteToDO(event) {
  //console.log(event.target.parentElement);
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 삭제한 li의 id를 불러와서 그 id를 제외한 새로운 array를 생성함.
  // li.id는 string타입이고, toDO.id는 number타입이라 parseInt로 숫자로 변환해줘야함.
  saveToDos();
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDO);
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // toDos.push(newTodo); //localstorage는 배열을 저장하지 못하고 텍스트만 저장할 수 있음, 텍스트를 저장하지 않고 object 푸시하고 싶음
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(); // localstorage에 값 넣기
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item) {
  console.log("this is the turn of", item);
}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse()는 스트링을 어레이로 변경해줌.
  //arsedToDos.forEach(sayhello); // 배열 안의 글자를 넣어 한나씩 하나씩 생성하는 것
  //parsedToDos.forEach((item) => console.log("this is the your turn", item)); // 따로 만들어도 좋지만 ...
  toDos = parsedToDos; // toDos에 리스토어해주는 것.
  parsedToDos.forEach(paintToDo); // 따로 만들어도 좋지만 ...
}

function sexyFilter() {
  //true를 반드시 리턴할거야. false면 리턴하지 않음
}

[1, 2, 3, 4].filter(sexyFilter);
