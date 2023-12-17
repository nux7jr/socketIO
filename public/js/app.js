var socket = io();

var messages = document.querySelector('.messages');
var form = document.querySelector('.form');
var input = document.querySelector('.input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function (msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

// document.querySelector('.input-file input[type=file]').on('change', function () {
//   let file = this.files[0];
//   document.querySelector(this).next().html(file.name);
// });
