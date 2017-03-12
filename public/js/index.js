var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
 var li=jQuery('<li></li>');
 li.text('Admin : welcome to chat app.');
 li.text('user:message send');

jQuery('#messages').append(li);
});

socket.emit('createMessage', {
  from:'Frank',
  text:'Hi'
}, function(data) {
  console.log('Got it', data);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
