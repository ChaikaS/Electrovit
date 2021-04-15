window.onload = function () {
  let imgArr = document.getElementsByClassName("my__img");
  let modalWindow = document.getElementById("my__modal");
  let modalImg = document.getElementById("img01");
  let caption = document.getElementById("caption");
  let closes = document.getElementById("close");
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
