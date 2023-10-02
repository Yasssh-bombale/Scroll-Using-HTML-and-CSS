const navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
console.log(navMenuAnchorTags);

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", (event) => {
    event.preventDefault();
    var targetSectionId = event.target.innerHTML;

    var targetSection = document.getElementById(targetSectionId);

    var interval = setInterval(() => {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 25);
  });
}
