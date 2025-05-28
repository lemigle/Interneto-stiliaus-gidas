    const tooltip = document.getElementById("tooltip");
    const tooltipText = document.getElementById("tooltipText");
  
    const targets = [
      {
        id: "RobotoAtsisiusti",
        html: `Atsisiųsti <span class="roboto">ROBOTO</span>`
      },
      {
        id: "LexendAtsisiusti",
        html: `Atsisiųsti <span class="lexend">Lexend</span>`
      },
      {
        id: "mssAtsisiusti",
        html: `Atsisiųsti <span class="mss">MS šriftą</span>`
      }
    ];
  
    targets.forEach(({ id, html }) => {
      const el = document.getElementById(id);
  
      el.addEventListener("mousemove", (e) => {
        tooltipText.innerHTML = html;
        tooltip.style.left = `${e.clientX + 15}px`;
        tooltip.style.top = `${e.clientY + 15}px`;
        tooltip.classList.add("show");
      });
  
      el.addEventListener("mouseleave", () => {
        tooltip.classList.remove("show");
      });
    });
  