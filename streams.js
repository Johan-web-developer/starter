const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req,res) => {
    //Solution 1 
/*     fs.readFile('test-file.txt', (err, data) => {
        if (err) console.log(err);
        res.end(data);
    }); */
    //Solution 2: Streams
    const raedable = fs.createReadStream('test-file.txt');
    raedable.on('data', chunk =>{
         res.write(chunk);
    });
    raedable.on('end', () =>{
        res.end();
    });
    raedable.on('error', err =>{
        console.log(err);
        res.statusCode = 404;
        res.end('File not found!!')
    })
});


server.listen(8000, 'localhost', () =>{
    console.log("Listening .......");
})