setInterval(() => {
    const iframe = document.getElementById("animation2");
    iframe.src = iframe.src; // force reload
  }, 10000); 
setInterval(() => {
const iframe = document.getElementById("animation4");
iframe.src = iframe.src; 
}, 9000); 
setInterval(() => {
  const iframe = document.getElementById("animation5");
  iframe.src = iframe.src; 
  }, 8000); 
// png keitimasis paspaudus
  const pvzImage = document.getElementById('pvz');
const imageList = [
  'images/31.png',
  'images/30.png',
  'images/32.png',
  'images/33.png',
  'images/34.png'
];
let currentIndex = 0;

pvzImage.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  pvzImage.src = imageList[currentIndex];
});

// png keitimasis paspaudus kartu su tekstu
document.addEventListener('DOMContentLoaded', () => {
  const pvz2Image = document.getElementById('pvz2');
  const text = document.querySelector('.neTekstas');

  const image2List = [
    'images/39.png',
    'images/40.png',
    'images/41.png',
    'images/42.png',
    'images/43.png'
  ];

  const textList = [
    "Papildomi efektai – didelis NE",
    "Nenaudoti logotipo ant artimos spalvos fono",
    "Nenaudoti Baltos ir geltonos spalvų derinių",
    "Logotipo dekoravimas griežtai draudžiamas",
    "Nekeisti pavadinimo pozicijos"
  ];

  let current2Index = 0;

  pvz2Image.addEventListener('click', () => {
    current2Index = (current2Index + 1) % image2List.length;
    pvz2Image.src = image2List[current2Index];
    text.textContent = textList[current2Index];
  });
});
// kai paspaudziu ant paveikslelio iššaukia animaciją wiggle
document.addEventListener("DOMContentLoaded", () => {
  const triggerNe = document.getElementById("pvz2");
  const targetNe = document.getElementById("neIkona");

  const triggerTaip = document.getElementById("pvz");
  const targetTaip = document.getElementById("taipIkona");

  function triggerWiggle(target) {
    target.classList.remove("wiggle"); // reset
    void target.offsetWidth;           // reflow to restart animation
    target.classList.add("wiggle");
  }

  triggerNe.addEventListener("click", () => triggerWiggle(targetNe));
  triggerTaip.addEventListener("click", () => triggerWiggle(targetTaip));
});

// Tooltip logotipo mygtuku atsisiuntimui
const extraTargets = [
  { id: "logoAtsisiusti", text: "Atsisiųsti logotipą" },
  { id: "logoAtsisiustiH", text: "Atsisiųsti horizontalų logotipą" },
  { id: "logoAtsisiustiV", text: "Atsisiųsti vertikalų logotipą" },
  { id: "pvz", text: "Spausk čia!" },
  { id: "pvz2", text: "O dabar čia!" }
];

extraTargets.forEach(({ id, text }) => {
  const el = document.getElementById(id);
  if (!el) return; // skip if element not found

  el.addEventListener("mousemove", (e) => {
    tooltipText.textContent = text;
    tooltip.style.left = `${e.clientX + 15}px`;
    tooltip.style.top = `${e.clientY + 15}px`;
    tooltip.classList.add("show");
  });

  el.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});

// parallax
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  const bg = document.querySelector('.fonoSluoksnis');

  bg.style.transform = `translateY(${scrollY * -0.2}px)`;
});

// sukeisti horizontalaus logotipo desktop ir mobile versiju animacijas
document.addEventListener("DOMContentLoaded", function() {
  const animation4 = document.getElementById("animation4");

  function swapAnimation() {
    if (window.innerWidth <= 768) {
      animation4.src = "svg/animationHmobile.svg"; // Mobile version
    } else {
      animation4.src = "svg/animation4.svg"; // Desktop version
    }
  }

  swapAnimation();
  window.addEventListener("resize", swapAnimation);
});