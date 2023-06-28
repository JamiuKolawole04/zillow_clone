let change = document.querySelector("#icon__wrapper");
let open = document.querySelector(".mobile-nav-div");

icon__wrapper.addEventListener("click", function () {
  change.classList.toggle("change");
});

icon__wrapper.addEventListener("click", function () {
  open.classList.toggle("nav-closed");
});
