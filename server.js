// var http = require('http');
// var fs = require('fs');

// const PORT=3000; 

// fs.readFile('./dist/index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT, () => {
//         console.log(`Server is running at port ${PORT}`);
//     });
// });


const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT ||  3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});




