var app=require('express');
var cors=require('cors')



var app = require('express')();
var http = require('http').createServer(app);
const io=require('socket.io')(http);
app.use(cors());

app.get('/', (req, res) => res.send('hello!'));
io.on('connection', (socket) => {  
    console.log('a user connected'); 
    socket.on('message',(msg)=>{
      console.log(msg);
      socket.broadcast.emit('message-broadcast',msg)
    })
 });



  http.listen(3000, () => {
  console.log('listening on *:3000');
});
