const net = require('net');

let sockets = [];

net.Server((socket) => {
  sockets.push(socket);

  socket.on('data', (d) => {
    for (let i = 0; i < sockets.length; i++) {
      if (sockets[i] == socket) continue;
      sockets[i].write(d);
    }
  });

  socket.on('end', () => {
    let i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  })
}).listen(8000);


// run
// use multiple terminal windows to chat as more concurrent request
// node simplestChatServer.js
//
