window.onload = function () {
  let imgArr = document.getElementsByClassName("img-window");
  let modalWindow = document.getElementById("modal-window");
  let modalImg = document.getElementById("img-modal-window");
  let caption = document.getElementById("caption-modal-window");
  let closes = document.getElementById("close-modal-window");
  let modalBlock = document.getElementById("modal__block");

  for (i = 0; i < imgArr.length; i++) {
    let picture = imgArr[i];
    picture.onclick = function () {
      openImg(this);
    };
  }
  function openImg(pic) {
    modalWindow.style.display = "block";
    modalBlock.style.transform = "translateY(0%)";
    modalImg.src = pic.src;
    modalImg.alt = pic.alt;
    caption.innerHTML = modalImg.alt;
  }

  function close() {
    modalWindow.style.display = "none";
  }
  closes.onclick = function () {
    modalBlock.style.transform = "translateY(-500%)";
    setTimeout(close, 500);
  };
  modalBlock.onclick = function () {
    modalBlock.style.transform = "translateY(-500%)";
    setTimeout(close, 500);
  };
};
;
document.querySelector(".main__sending-form-button-button").onclick = function () {
  window.open("http://google.com");
};
document.querySelector(".main__sending-form-email-button").onclick = function () {
  window.open("http://kvn.ru");
};
document.querySelector(".main__history-of-agency-info-button").onclick = function () {
  window.open("https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D0%B8'");
};
;
