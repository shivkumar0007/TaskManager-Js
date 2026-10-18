const addBtn = document.querySelector(".addBtn");
const ticketCreateContainer = document.querySelector(".ticketCreateContainer");
const createColorContainer = document.querySelector(".createColorContainer");
const ticketTextArea = document.querySelector(".ticketTextArea");






createColorContainer.addEventListener("click", (e) => {
  const activeColor = document.querySelector(".activeColor");
  if (activeColor) {
    activeColor.classList.remove("activeColor");
  }
  e.target.classList.add("activeColor");
  console.log(e.target.classList);
});

addBtn.addEventListener("click", () => {
  ticketCreateContainer.classList.toggle("hide");
});

ticketTextArea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const activeColor = document.querySelector(".activeColor"); 
  }
}
)
