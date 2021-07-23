const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter a message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', chunk => body.push(chunk))
    }
    return req.on('end'), () => { 
        const paserBody = Buffer.concat(body).toString()
        const message = paserBody.trim()
    }
}