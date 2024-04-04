const generate = document.getElementById("generate");
const loading = document.getElementById("Loading");
const block = document.getElementById("Block");
const data = document.getElementById("Article");
const Toast = document.getElementById("Toast");
generate.addEventListener("click", () => {
  block.classList.remove("hidden");
  data.innerText =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus laudantium dicta quia? Magnam aliquam quibusdam, fugiat ratione repellendus esse dolore quos vero odio tempore inventore sit ipsum architecto eligendi?";
});
data.addEventListener("click", () => {
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = data.innerText;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);
  Toast.classList.remove("hidden");
  setInterval(() => {
    Toast.classList.add("hidden");
  }, 3000);
});
