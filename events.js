const EventEmitter = require('events');
const http = require('http')

class Sales extends EventEmitter{
    constructor(){
        super()
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () =>{
    console.log('There was a new sale!');
});

myEmitter.on('newSale', () =>{
    console.log('Customer name: Johan');
});


myEmitter.on('newSale', stock =>{
    console.log(`There are now ${stock} items left in stock.`);
})

myEmitter.emit("newSale", 9);


////////////////

const server = http.createServer();

server.on('request', (req, res) =>{
    console.log('Request recevied!');
    console.log(req.url);
    res.end('Request recevied!');
})


server.on('request', (req, res) =>{
    console.log('Another Request :D!');
})


server.on('close', () =>{
    console.log("Server close");
});


server.listen(8000, "localhost", () =>{
    console.log('Waiting for request...');
})