const quotes = [
  {
    quote:
      "시간도 늦었으니 같이 돌아가자. 형아가 집까지 바래다 줄 게. 옛날처럼 같이 손잡고 가자.",
    author: "세나 이즈미",
  },
  {
    quote:
      "이상한 거? 매일 밤 꿈 속에서 유우군을 만날 수 있도록, 살짝 베개 밑에 넣어두기만 하는 걸?",
    author: "세나 이즈미",
  },
  {
    quote:
      "유우군. 난 이상하게 프라이드가 높고 고집도 세고, 폼만 잡을 뿐이야.... 그래서 내가 한심한 녀석이라는 것을 알리고 싶지 않아서 말하지 못 했었지만, 이유도 모르는 채 누가 달라 붙는다는 건, 역시 기분 나쁘겠지....",
    author: "세나 이즈미",
  },
  {
    quote:
      "어린 아이로 취급하면서, 더러운 것과 슬픈 것으로부터 멀리 떼어놓으려는 것은 어른인 나의 이기심이니까. 제대로 유우군이 듣고 싶은 것에 대해 대답할게.",
    author: "세나 이즈미",
  },
  {
    quote:
      "여기는 '보고 싶었어~ 이즈미 형!' 하면서 감동의 포옹을 해야 하는 장면이잖아?",
    author: "세나 이즈미",
  },
  {
    quote:
      "으으, 이즈미씨에게 팔고 싶지 않지만 손님이고••••••. 제발 이상한 것에는 사용하지 말아줘?",
    author: "유우키 마코토",
  },
  {
    quote:
      "이제 안심해. 이번에는 내가, 이즈미씨가 지켜준 것처럼 이즈미씨를 지킬게.",
    author: "유우키 마코토",
  },
  {
    quote:
      "이즈미씨는 내가 아니라, 이즈미 씨 안에서 지금도 울고 있 는 어린 아이를 안아줘.",
    author: "유우키 마코토",
  },
  {
    quote:
      "이즈미 씨는 언제나 가슴을 펴고, 괜찮다면서. 두려워하는 나의 머리를 쓰다듬어 주었어.",
    author: "유우키 마코토",
  },
  {
    quote: "이즈미 씨도, 나와 얘기할 때는...... 꽤, 웃는 얼굴이 귀여워.",
    author: "유우키 마코토",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0]); //배열의 첫번째 콘솔에 로그하기

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //array.length 배열의 길이(몇개짜리 배열인지), round 반올림, ceil 올림, floor 내림.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
