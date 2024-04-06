const images = ["01.webp", "02.webp", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const imagePostion = document.querySelector("#clock");

bgImage.src = `img/${chosenImage}`;

document.body.insertBefore(bgImage, imagePostion); //appendChild는 맨 뒤에 prepend는 맨 앞에 insertBefore(삽입하려는 노드, 삽입 기준 노드)
