const home = document.querySelector("body > div") as HTMLDivElement;
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry): void => {
    entry.target.classList.add("show");
  });
}, {
  threshold: 1
});

export { home, intersectionObserver };