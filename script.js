// script.js

let attempts = 0;

const correctPassword = "2401";

function validatePassword() {

  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (attempts >= 3) {
    message.innerHTML = "🚫 Ya se bloqueó mi amor 😅";
    return;
  }

  if (password === correctPassword) {

    document.getElementById("loginContainer").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");

    startVanta();

  } else {

    attempts++;

    if (attempts === 1) {
      message.innerHTML = "❌ Así no 😘";
    }

    else if (attempts === 2) {
      message.innerHTML = "❌ 1 chupadita 😳";
    }

    else if (attempts === 3) {
      message.innerHTML = "❌ 2 chupaditas 😅 Ya se bloqueó";
      document.getElementById("password").disabled = true;
    }
  }
}

/* VANTA */
function startVanta() {

  VANTA.STARS({
    el: "#mainContent",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    backgroundColor: 0x000000,
    color: 0xff004c,
    speed: 1.5
  });
}

/* CLICK CORAZON */
document.addEventListener("click", function(e){

  if(e.target.id === "heart"){
    document.getElementById("loveMessage").classList.remove("hidden");
  }

});

function closeMessage(){
  document.getElementById("loveMessage").classList.add("hidden");
}