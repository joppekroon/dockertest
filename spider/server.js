import express from 'express';
import fetch from "node-fetch";

const HOST = '0.0.0.0';
const PORT = '8080';

const app = express();

app.get('/part1', async (_, resp) => {
  const message = await fetch('http://part1:8080');
  resp.send(await message.text());
})

app.get('/part2', async (_, resp) => {
  const message = await fetch('http://part2:8080');
  resp.send(await message.text());
})

app.get("/", async (req, resp) => {
  if (Math.floor(Math.random() * 10) % 2 == 1) {
    const message = await fetch('http://part1:8080');
    resp.send(`Random 1 ${await message.text()}`);
  }
  else {
    const message = await fetch('http://part2:8080');
    resp.send(`Random 2 ${await message.text()}`); 
  }
});

app.listen(PORT, HOST, () => {
  console.log(`listening on: http://${HOST}:${PORT}`);
})