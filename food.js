let studentObject = {
  "강지민":"마라탕",
  "곽윤호":"조개",
  "권예준":"가지",
  "김동주":"버섯",
  "김은아":"굴",
  "김종윤":"오이",
  "김지섭":"술",
  "김형진":"독버섯",
  "노수민":"다리많은거",
  "류은이":"피망",
  "박달재":"벌레",
  "박수연":"삼결살",
  "박준형":"생간",
  "성해경":"우엉",
  "이경택":"홍어",
  "이세민":"짜장면",
  "이재권":"가지",
  "임지성":"단무지",
  "장루빈":"김치",
  "정성철":"고수",
  "정지은":"버섯",
  "정희은":"술",
  "최대건":"뼈많은생선",
  "한유진":"양파",
  "허진":"딸기",
  };
  // 객체는 배열과 다르게 순서가 없어서 for문을 통해 조회가 불가능하다> 아래와 같은 태그로 배열의 키값들을 조회가 가능하다
let keys = Object.keys(studentObject);
// object.values를 사용하면 밸류값들도 조회 가능!
console.log(keys)

// studentObject의 value값을 조회하기위해 배열을 가진 value라는 변수를 선언해줬다 그리고 for 문을 활용해 밸류값 조회도 가능하다
const value = [];
for(let i =0; i<keys.length;i++) {
  const key = keys[i]
  value[i] = studentObject[key];
}
console.log(value);

// const fruit = [];
// fruit.apple='사과';
// fruit.banana='바나나';
// console.log(fruit)
  // 반복문 돌려서 몇명이 버섯 싫어하는지. 실헝하는 사람의 이름은 무엇인지 찾자
  // for(let m in studentObject) {
  //   console.log(studentObject);
  //   if(m===studentObject)
  // }