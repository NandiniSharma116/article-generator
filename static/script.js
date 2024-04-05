const generate = document.getElementById("generate");
const query = document.getElementById('Search')
const loading = document.getElementById("Loading");
const block = document.getElementById("Block");
const data = document.getElementById("Article");
const Toast = document.getElementById("Toast");
generate.addEventListener("click", async() => {
loading.classList.remove('hidden')
  try {
        const response = await fetch("/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data:query.value})
        });
        const responseData = await response.json();
        block.classList.remove("hidden");
        data.innerText = responseData.success
        loading.classList.add('hidden')
    } catch (err) {
        console.log("There was an error:", err);
    }
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
