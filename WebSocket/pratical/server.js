const WebSocket=require("ws");

const server=new WebSocket.Server({port:3000});

server.on("connection",(socket)=>{
    console.log("Client Connected");

    socket.send("Welcome Client!");

    socket.on("message",(msg)=>{
        console.log("Recieved:",msg.toString());
        socket.send(`Server Received: ${message}`);
    });

    socket.on("close",()=>{
        console.log("Client Disconnected");
    })
})