const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noCount = 0;
let yesScale = 1;

const noPhrases = [
"Are you sure? 😳",
"Really sure? 🥺",
"Come on… please? 💞",
"Think again 😭",
"Last chance… 😤",
"You’re breaking my heart 💔",
"Ok but… YES is right there 😅"
];

noBtn.addEventListener("click", () => {
noCount++;

// make YES bigger every time she clicks NO
yesScale = Math.min(yesScale + 0.25, 4.0); // cap it so it doesn’t get ridiculous
yesBtn.style.transform = `scale(${yesScale})`;

// change the NO button text
const phrase = noPhrases[Math.min(noCount - 1, noPhrases.length - 1)];
noBtn.textContent = phrase;

message.textContent = "Just press Yes 😌💚";
});

yesBtn.addEventListener("click", () => {
// success screen
document.querySelector(".card").innerHTML = `
<h1>YAYYY!! 💖💖💖</h1>
<p class="sub">Best decision ever 😌</p>
<p class="message">Happy Valentine’s Day, my love 🥰</p>
`;
});
