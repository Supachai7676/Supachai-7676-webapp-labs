<<<<<<< HEAD
import http from 'http'

const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
=======
import http from 'http'

const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
>>>>>>> 7609c1bad7b74476eeb19d38fda255d833d675d4
})