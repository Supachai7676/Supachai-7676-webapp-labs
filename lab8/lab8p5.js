<<<<<<< HEAD
import express from 'express';
import axios from 'axios';

let app = express();
let port = 8082;

app.get('/ip', async (req, res) => {
    const response = await axios.get('https://httpbin.org/ip');
    const ip = response.data.origin;
    res.send({ip});
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});
=======
import express from 'express';
import axios from 'axios';

let app = express();
let port = 8082;

app.get('/ip', async (req, res) => {
    const response = await axios.get('https://httpbin.org/ip');
    const ip = response.data.origin;
    res.send({ip});
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});
>>>>>>> 7609c1bad7b74476eeb19d38fda255d833d675d4
