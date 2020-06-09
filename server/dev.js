const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(requset, response) {

    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'));

    response.end(html);
}).listen(7990);
