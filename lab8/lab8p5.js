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
