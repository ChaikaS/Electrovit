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
;
