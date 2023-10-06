const screenshot = document.getElementById('screenshot');

screenshot.addEventListener('click', function () {
  console.log("Testing");
  this.classList.toggle('enlarged');
});
