const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;
let yesScale = 1;

const noTexts = [
"Are you sure? 😳",
"Really sure? 🥺",
"Think again 😭",
"Come on… 💞",
"Last chance 😤",
"You know you want to 😅"
];

noBtn.addEventListener("click", () => {
noClicks++;

yesScale = Math.min(yesScale + 0.25, 4);
yesBtn.style.transform = `scale(${yesScale})`;

noBtn.textContent = noTexts[Math.min(noClicks - 1, noTexts.length - 1)];
message.textContent = "Just press YES 😌💚";
});

yesBtn.addEventListener("click", () => {
document.querySelector(".card").innerHTML = `
<h1>YAYYYY!! 💖</h1>
<p class="sub">Best choice ever 😌</p>
<p class="message">Happy Valentine’s Day ❤️</p>
`;
});