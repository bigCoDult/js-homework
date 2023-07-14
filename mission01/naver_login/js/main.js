/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //여기서 정규표현식이 하는 일 :

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  //여기서 정규표현식이 하는 일 :

  return re.test(String(text).toLowerCase());
}

// input.classList.add('is-active'); // input.classList.remove('is-active');

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const input1 = document.querySelector("user-email-input");

console.log(input1);

login;

class user1 extends class1 {
  //클래스 확장으로 벨리데이션 할 id/pw부여
  constructor(name) {
    this.id = "asd@naver.com";
    this.pw = "spdlqj123!@";
  }

  // set eat(food) {
  //   this.stomach.push(food);
  // }
  // get eat() {
  //   this.stomach;
  // }
}
let mission01 {
  getId(){
    const id1 = document.querySelectorAll(#userEmail);
    return id1;
  },
  getPw(){
    const pw1 = document.querySelectorAll(#userPassword);
    return pwd1;
  },

  getinputText() {
    inputId.addEventListener('input',()⇒{ 
      
    }
    inputPw.addEventListener('input',()⇒{ 
      
    }
  }
    // function 입력있으면 트랙킹
    // function 트랙킹된 텍스트가 유의미한 양식인지 판단
    // function 판단에 따른 클래스 부여
    // function 클래스를 판단
    // function 클래스
    
  }