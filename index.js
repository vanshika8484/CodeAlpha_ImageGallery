let scrollContainer = document.querySelector(".gallery");
let leftbtn = document.querySelector("#leftbtn");
let rightbtn = document.querySelector("#rightbtn");
scrollContainer.addEventListener("wheel", (evt) => {
  // evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
rightbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 1000;
});

leftbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 1000;
});
