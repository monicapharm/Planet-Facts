var planet = document.querySelector("img");
planet.addEventListener("mouseover", function() {
  planet.classList.add("pulse");
  planet.addEventListener(
    "animationend",
    function() {
      output.classList.remove("pulse");
    },
    { once: true }
  );
});
