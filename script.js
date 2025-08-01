// Toggle Accordion Sections (Footer)
const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const isActive = title.classList.contains("active");

    // Close all
    accordionTitles.forEach((t) => {
      t.classList.remove("active");
      if (t.nextElementSibling) t.nextElementSibling.style.maxHeight = null;
    });

    // Open clicked if not already open
    if (!isActive) {
      title.classList.add("active");
      const content = title.nextElementSibling;
      if (content) content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Optional: Toggle dark mode (for fun)
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙 Dark Mode";
darkModeToggle.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 14px;
  background: #111;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
`;
document.body.appendChild(darkModeToggle);


