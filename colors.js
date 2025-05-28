
// nustatomi norimi aukščiai iki kurių bus animuojami stačiakampiai
const barConfigs = {
  barSVG_W: { height: 2616 },
  barSVG_Y: { height: 1900 },
  barSVG_B: { height: 1000 },
  barSVG_R: { height: 1000 },
  barSVG_BL: { height: 2616 }
};

const scrollBars = Object.keys(barConfigs).map(id => ({
  svg: document.getElementById(id),
  rect: document.getElementById(id.replace("barSVG", "Rvuoliukostaciakampis")),
  group: document.getElementById(id.replace("barSVG", "Rvuoliukas")),
  height: barConfigs[id].height
}));

// Kai svg yra matomam plote, tuomet stačiakampis juda nuo 0 iki nustatyto aukščio
scrollBars.forEach(({ svg, rect, group, height }) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        rect.setAttribute("height", height);
        group.setAttribute("transform", `translate(0, ${height})`);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 }); // vykdyti iš karto kai yra matomas elementas
  observer.observe(svg);
});

// tooltip ir kopijavimo logika
const tooltip = document.getElementById("tooltip");

function setupTooltipCopy(selector, getColor, showActualColor = false) {
  document.querySelectorAll(selector).forEach(el => {
    el.style.cursor = "pointer";

    el.addEventListener("click", () => {
      const color = getColor(el);
      if (color) {
        navigator.clipboard.writeText(color)
          .then(() => showToast(`Spalvos kodas nukopijuotas: ${color}`))
          .catch(err => console.error("Kopijavimas nepavyko:", err));
      }
    });

    el.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.clientX + 15 + "px";
      tooltip.style.top = e.clientY + 15 + "px";
      tooltip.textContent = showActualColor ? getColor(el) : "Kopijuoti kodą";
      tooltip.style.opacity = 1;
    });

    el.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  });
}

// Toast. Laikinai atsirandantis informacijos langas, kad kopijavimas pavyko
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Logikos taikymas desktop, mobile juostoms
setupTooltipCopy("svg[id^='barSVG_']", el => el.getAttribute("data-color"));
setupTooltipCopy(".mobile-voleliai svg g", el => el.getAttribute("data-color"));

setupTooltipCopy("#colors1 rect[data-color]", el => {
  tooltip.classList.add("colors1-tooltip");
  el.classList.add("colors1");
  return el.getAttribute("data-color");
}, true);

// Remove .colors1-tooltip class on mouseleave
document.querySelectorAll("#colors1 rect[data-color]").forEach(rect => {
  rect.addEventListener("mouseleave", () => {
    tooltip.classList.remove("colors1-tooltip");
  });
});


