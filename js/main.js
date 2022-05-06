const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap.to(요소, 지속시간(초단위), 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //버튼숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, 시간(밀리세컨))

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, { scrollTo: 0 });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

//new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000, //기본값은 3000(3초)
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30, //사이사이의 여백
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-button-prev",
    nextEl: ".awards .swiper-button-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false; //프로모션은 현재 안 숨겨져 있으니 false값

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add("hide");
  } else {
    //보임 처리
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      //옵션
      y: size, //y축으로 움직임
      repeat: -1, //무한반복
      yoyo: true, //한번 재생된 애니메이션을 역재생 시켜줌
      ease: Power1.easeInOut, //gsap easing 구글링 greensock페이지
      delay: random(0, delay),
    }
  );
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// 특정한 섹션이 화면에 보이기 시작하면 애니메이션을 설정해 줄 수 있음
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, //뷰포트 맨위(0) - 맨 아래(1) , 중간은 0.5
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
