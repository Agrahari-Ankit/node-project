const http = require('http');
const userRoutes = require('./routes/userRoutes.js');


const hostname = 'localhost';
const port = 3000; 

const requestHandler = (req, res) => { 
    if(userRoutes(req,res)){
        return;
    }
 
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
};
 
const server = http.createServer(requestHandler);
 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
