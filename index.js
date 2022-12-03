const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//const PORT = 5000;

app.use(express.static(__dirname +'/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname +'/index.html');
})
/*
io.on("connect", (socket) => {
    console.log("User connected");
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected");
    })
})
*/

io.on("connect", (socket) => {
    socket.on('newuser', (name) => { 
        let newUser = name;
        console.log(`${newUser} connected`);

        socket.on('disconnect', () => { 
            console.log('User disconnected');
            io.emit('disconnected', `${newUser} disconnected`);
        })
    })

    socket.on('chat message', (msg) => { 
        io.emit('chat message', msg);
    })

})

const port = process.env.PORT || 4044;
server.listen(port);
console.log(`Server listening on port ${port}`);

/*
server.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
})
*/




