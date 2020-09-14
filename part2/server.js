import express from 'express';

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.get('/', (req, resp) => {
  resp.send('Goodbye World!');
})

app.listen(PORT, HOST, () => {
  console.log(`listening on: http://${HOST}:${PORT} `)
})