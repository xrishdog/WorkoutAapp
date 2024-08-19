document.addEventListener("DOMContentLoaded", function () {
  const homeBtn = document.getElementById("home-btn");
  const accountBtn = document.getElementById("account-btn");
  const homePage = document.getElementById("home-page");
  const accountPage = document.getElementById("account-page");

  const cameraPage = document.getElementById("camera-page");
  const cameraBtn = document.getElementById("camera-btn");
  const closeCameraBtn = document.getElementById("close-camera-btn");

  const yourLifts = document.getElementById("your-lifts");
  const monthlyOuputs = document.getElementById("monthly-ouputs");
  const exercise = document.getElementById("exercise");

  homeBtn.addEventListener("click", function () {
    homePage.style.display = "block";
    accountPage.style.display = "none";
    homeBtn.classList.add("active");
    accountBtn.classList.remove("active");
  });

  accountBtn.addEventListener("click", function () {
    homePage.style.display = "none";
    accountPage.style.display = "block";
    accountBtn.classList.add("active");
    homeBtn.classList.remove("active");
  });

  yourLifts.addEventListener("click", function () {
    yourLifts.classList.add("active");
    monthlyOuputs.classList.remove("active");
    exercise.classList.remove("active");
  });
  monthlyOuputs.addEventListener("click", function () {
    yourLifts.classList.remove("active");
    monthlyOuputs.classList.add("active");
    exercise.classList.remove("active");
  });
  exercise.addEventListener("click", function () {
    yourLifts.classList.remove("active");
    monthlyOuputs.classList.remove("active");
    exercise.classList.add("active");
  });

  cameraBtn.addEventListener("click", function () {
    cameraPage.style.display = "block";
    homePage.style.display = "none";
    accountPage.style.display = "none";

    cameraBtn.classList.add("active");
    homeBtn.classList.remove("active");
    accountBtn.classList.remove("active");

    const video = document.getElementById("video");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();

          closeCameraBtn.addEventListener("click", function () {
            stream.getTracks().forEach((track) => track.stop());
            homePage.style.display = "block";
            cameraPage.style.display = "none";
            homeBtn.classList.add("active");
            cameraPage.classList.remove("active");
          });
        })
        .catch(function (err) {
          console.log("Error accessing the camera: " + err);
          alert("Unable to access the camera.");
          homePage.style.display = "block";
          cameraPage.style.display = "none";
          homeBtn.classList.add("active");
          cameraPage.classList.remove("active");
        });
    } else {
      alert("Camera not supported on this device.");
      homePage.style.display = "block";
      cameraPage.style.display = "none";
      homeBtn.classList.add("active");
      cameraPage.classList.remove("active");
    }
  });
});
