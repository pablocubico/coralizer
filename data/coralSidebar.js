var options = document.querySelectorAll('.options button');

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener('click', function onOptionClick(event) {
    addon.port.emit("option-click", event.target.id);
  }, false);
}
