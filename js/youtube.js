var tag = document.createElement("script");

//유튜브를 제어해주는 자바스크립트 라이브러리가 (https://www.youtube.com/iframe_api)
//자체적으로 함수의 이름을 (onYouTubeIframeAPIReady)
//찾는 것이기 때문에 저대로 작성해야 함.
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    // index.html에 id="player"인 div가 있어야 함.
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
