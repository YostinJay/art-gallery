const swup = new Swup();

document.addEventListener("click", function handleClick(event) {
  event.target.classList.add("new-active");

  event.target.classList.remove("new-active");
});
