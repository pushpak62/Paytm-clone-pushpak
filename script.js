
const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const isActive = title.classList.contains("active");

    // Close all
    accordionTitles.forEach((t) => {
      t.classList.remove("active");
      if (t.nextElementSibling) t.nextElementSibling.style.maxHeight = null;
    });

   
    if (!isActive) {
      title.classList.add("active");
      const content = title.nextElementSibling;
      if (content) content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});



