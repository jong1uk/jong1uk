
//main 슬라이드
var mainSwiper=new Swiper(".main-swiper", {

    autoplay: true, //자동 재생 여부
    loop: true,
    centeredSlides: true,
    slidesPerView: '4',
    spaceBetween : 50,
    // loopFillGroupWithBlank: true,

    slidesPerGroup: 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

    // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank: true,

    loop: true, // 무한 반복

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      depth: 100,
      slideShadows: true,
      // modifier:1,
      // stretch: 50
    },
    pagination: {
      // el: '.swiper-pagination',
      // type: 'bullets',
      // clickable: true,
    },

  });

//   function moveWhite() {
//     location.href = "main.html";

//   }

//   function selectMovie(posterSrc){
//     alert('click');
//     console.log(posterSrc);

//   }


// document.addEventListener("DOMContentLoaded", () => {
//     const modal = document.querySelector(".modal");
//     const modalOpen = document.querySelector(".open_btn");
//     const modalClose = document.querySelector(".close_btn");

//     modalOpen.addEventListener("click", function () {
//         modal.classList.add("on");
//     });

//     modalClose.addEventListener("click", function () {
//         modal.classList.remove("on");
//     });

//     window.addEventListener("click", (e) => {
//         e.target === modal ? modal.classList.remove("on") : false;
//     });
// });


//모달 생성 
const getAll = (target) => document.querySelectorAll(target);
// 이렇게 유틸 함수를 써놓고 getAll(target)으로 짧게 사용할 수 있다.
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close_btn");

// let elem = document.getElementById('first');
const buttons = getAll('.open_btn');
const clicked = () => {
    modal.classList.add("on");

    //선택한 영화 이미지 src 가져오기
    let posterSrc = document.getElementById("image1").src;
    console.log(posterSrc);

    //모달창의 이미지에 선택한 이미지 src 넣기
    document.querySelector(".selectedPoster").src= `${posterSrc}` ;
   

};
buttons.forEach((button) => {
	button.addEventListener('click', clicked);

});
modalClose.addEventListener("click", function(){
    modal.classList.remove("on");
});
window.addEventListener("click",(e)=>{
    e.target === modal ? modal.classList.remove("on") : false;
})

/*
여기서 button은 DOM에서 querySelectorAll로 가져온 buttons 들에
하나하나 접근해서 가져온 `하나의` button이다.
그래서 eventListener를 걸 때에는 buttons가 아닌 button에 걸어야 한다.
*/



//방생성
document.addEventListener("DOMContentLoaded", function () {
  const save = document.querySelector(".save-btn");
  const hiddenRoom = document.querySelector(".hidden-room");
  const inputDate = document.querySelector(".input-date");
  const inputArea = document.querySelector(".input-area");
  const swiperWrapper = document.querySelector(".swiper-wrapper2");

  // Swiper 객체 생성
  let swiper = null;

  if (save && hiddenRoom && inputDate && inputArea && swiperWrapper) {
      save.addEventListener("click", function () {
          const saveDate = inputDate.value;
          const saveArea = inputArea.value;

          // 입력된 데이터로 새로운 텍스트 박스 생성
          const textBox = document.createElement("div");
          textBox.classList.add("swiper-slide");
          textBox.innerHTML = `날짜 : ${saveDate}<br>지역 : ${saveArea}`;

          swiperWrapper.appendChild(textBox);

          // 참가 버튼 생성
          const joinButton = document.createElement("button");
          joinButton.textContent = "참가";
          joinButton.classList.add("join-btn");

          textBox.appendChild(joinButton);

          // hidden-room 숨기기
          hiddenRoom.style.display = "none";

          // Swiper 객체 갱신
          if (swiper) {
              swiper.destroy(); // 기존 Swiper 객체 제거
          }
      });
  } else {
      console.error("Failed to find necessary elements.");
  }
});

function formatDate() {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

window.onload = function () {
  const inputDate = document.querySelector('.input-date');

  inputDate.value = formatDate();
};

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add_btn");

  addButton.addEventListener("click", function () {
      toggleHiddenRoom();
  });
});

function toggleHiddenRoom() {
  // hidden-room 영역을 찾습니다.
  const hiddenRoom = document.querySelector(".hidden-room");

  // hidden-room의 현재 display 상태를 가져옵니다.
  const currentDisplay = window
      .getComputedStyle(hiddenRoom)
      .getPropertyValue("display");

  // display 상태에 따라 toggle합니다.
  if (currentDisplay === "none") {
      hiddenRoom.style.display = "flex"; // 보이도록 설정
  } else {
      hiddenRoom.style.display = "none"; // 숨기도록 설정
  }
}