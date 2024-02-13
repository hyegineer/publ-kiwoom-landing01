function openModal(id) {
  $('#' + id).addClass('active');
  $('#' + id).children('.custom-modal').scrollTop(0);
}

function closeModal(id) {
  $('#' + id).removeClass('active');
}

function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}
/* =============================================== */
/* 롤링 배너 */
/* =============================================== */

// 롤링 배너 복제본 생성
let roller = document.querySelector('.logo-boxes');
roller.id = 'roller1'; // 아이디 부여

let clone = roller.cloneNode(true)
// cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
clone.id = 'roller2';
document.querySelector('.floating-logo-wrap').appendChild(clone); // wrap 하위 자식으로 부착

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.logo-boxes').offsetWidth + 'px';
// offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

roller.classList.add('original');
clone.classList.add('clone');
function pageTopMove() {
  $('html, body').animate({
    scrollTop: '0'
  }, 300);
}

$(window).on('scroll', function () {
  console.log($(this).scrollTop());

  if ($(this).scrollTop() > 100) {
    $('.fixed-btn-wrapper').addClass('active');
  } else {
    $('.fixed-btn-wrapper').removeClass('active');
  }
})