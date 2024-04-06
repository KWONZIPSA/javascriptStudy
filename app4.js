const h1 = document.querySelector("div:nth-child(2) h1");

function handleH1Click() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}

/* toggle의 기능은 아래와 같이 구현되는 것임.
function handleH1Click() {
  const clickedClass = "active"; //클래스명 수정시 여러번 수정함을 방지하고 오류가 나지 않도록 하기 위함.
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass); //제거
  } else {
    h1.classList.add(clickedClass); //추가
  }
}
*/

//className은 getter이면서 setter임
//ClassList는 클래스명의 집합

/*
function handleH1Click() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
*/

h1.addEventListener("click", handleH1Click);

/*
 private는 외부에선 접근할 수 없기때문에 꺼내는것도, 값을 넣는것도 메서드의 도움이 필요하다. 

                마치 집을 사고팔때 조심하기 위해 부동산을 중개로 해서 거래하는것과 같다. 

getter는 private를 외부로 꺼내는 메서드, setter는 private에 값을 넣는 메서드이다. 

 

Getter : 내부의 멤버변수에 저장된 값을 외부로 리턴.

          메개변수는 없고, 리턴값만 있는 메서드로 정의한다. 

          메서드명은 주로 getXXX() 메서드 형식으로 지정

          XXX은 해당 멤버변수의 변수명을 사용.

Setter : 외부로부터 데이터를 전달받아 멤버변수에 저장.

          매개변수만 있고, 리턴값은 없는 메서드로 정의.
*/
