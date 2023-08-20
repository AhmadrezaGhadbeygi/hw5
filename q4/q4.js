const Myfuction = function () {
  let right = prompt(" enter right position :");
  let top = prompt(" enter top position :");

  let add = document.querySelector(".show");
  add.style.visibility = "visible";
  add.style.top = top;
  add.style.right = right;

  setTimeout(function () {
    let add = document.querySelector(".show");
    add.style.visibility = "hidden";
  }, 3000);
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", Myfuction);
//