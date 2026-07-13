document.querySelectorAll('.bt').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 800) + "px";
    el.style.top = (Math.random() * 310) + "px";

  });
});