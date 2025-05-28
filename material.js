const extraTargets = [
    { id: "48", text: "Atsisiųsti rodykles" },
    { id: "49", text: "Atsisiųsti pieštukus" },
    { id: "50", text: "Atsisiųsti volelius" },
    { id: "51", text: "Atsisiųsti šviestuvus" },
    { id: "52", text: "Atsisiųsti planšetę" },
    { id: "53", text: "Atsisiųsti pelytes" },
    { id: "ikonosAtsisiusti", text: "Atsisiųsti ikonas" },
    { id: "img23", text: "Atsisiųsti fonus" },
    { id: "img23Five", text: "Atsisiųsti paveikslėlius" }
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

  