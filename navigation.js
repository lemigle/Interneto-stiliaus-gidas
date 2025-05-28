const trikampis = document.getElementById('trikampis');
const juosta = document.getElementById('juosta');
const shouldExtend = localStorage.getItem("logoExtended", "trikampisExtended") === "true";


if (shouldExtend) {
  trikampis.setAttribute("transform", "translate(0,200)");
  juosta.setAttribute("height", "300");
} else {
  trikampis.setAttribute("transform", "translate(0,0)");
  juosta.setAttribute("height", "76");
}

trikampis.addEventListener('click', () => {
  trikampis.setAttribute("transform", "translate(0,0)");
  juosta.setAttribute("height", "76");
  localStorage.setItem("logoExtended", "false");

  // Animate all segments out
  const segments = document.querySelectorAll('.donut-segment');
  segments.forEach(seg => seg.classList.add('segment-out'));

  // Animate segment images
  const images = document.querySelectorAll('.segment-image');
  images.forEach(img => img.classList.add('out'));

  // Redirect after animation finishes
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500); // total duration of animations
});

// const segment1 = document.getElementById("segment-1");
// if (segment1) {
//     segment1.addEventListener("click", () => {
//         window.location.href = "font.html";
//     });
// }

// const segment2 = document.getElementById("segment-2");
// if (segment2) {
//     segment2.addEventListener("click", () => {
//         window.location.href = "material.html";
//     });
// }

// const segment3 = document.getElementById("segment-3");
// if (segment3) {
//     segment3.addEventListener("click", () => {
//         window.location.href = "colors.html";
//     });
// }

// const segment4 = document.getElementById("segment-4");
// if (segment4) {
//     segment4.addEventListener("click", () => {
//         window.location.href = "logo.html";
//     });
// }

// const segment5 = document.getElementById("segment-5");
// if (segment5) {
//     segment5.addEventListener("click", () => {
//         window.location.href = "examples.html";
//     });
// }

const segmentGroups = document.querySelectorAll(".donut-segment-wrapper");

segmentGroups.forEach(group => {
  group.addEventListener("mouseenter", () => {
    group.style.transform = "scale(1.1)";
  });

  group.addEventListener("mouseleave", () => {
    group.style.transform = "scale(1)";
  });
});

const segmentGroupsImages = document.querySelectorAll(".segment-image-wrapper");

segmentGroupsImages.forEach(group => {
  group.addEventListener("mouseenter", () => {
    group.style.transform = "scale(1.1)";
  });

  group.addEventListener("mouseleave", () => {
    group.style.transform = "scale(1)";
  });
});

const segment1 = document.getElementById("segment-1");

if (window.innerWidth <= 768) {
  // pakeicia segmento linka is font.html i font2.html
  const segmentLink = document.querySelector('.donut-segment-wrapper a[href="font.html"]');
  if (segmentLink) {
    segmentLink.setAttribute("href", "font2.html");
  }

  // pakeicia mobilioje versijoje paveikslelio linka is font.html i font2.html
  const imageLink = document.querySelector('.segment-image-wrapper a[href="font.html"]');
  if (imageLink) {
    imageLink.setAttribute("href", "font2.html");
  }
}