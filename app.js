const btn = document.getElementById("btn");
const message = document.getElementById("message");

let count = 0;

btn.addEventListener("click", () => {
  count += 1;
  message.textContent = `${count} 回クリックしました`;
});
