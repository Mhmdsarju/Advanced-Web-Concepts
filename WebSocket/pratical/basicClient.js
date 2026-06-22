// Create connection
const socket= new WebSocket("ws://localhost:3000");

// connection opened
socket.onopen=()=>{
    console.log("Connected");
    socket.send("Hello Server");
}

// Recieving message

socket.onmessage = (event)=>{
    console.log("Recieved:",event.data);
}

// Connection closed

socket.onclose=()=>{
    console.log("Disconnected");
}

socket.onerror=(err)=>{
    console.log("Error:",err)
}