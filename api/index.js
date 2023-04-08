import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  console.log('home endpoint');
  res.status(200).send('home');
});

app.get('/api/post/:id', (req, res) => {
  const { id } = req.params;

  console.log('post endpoint');
  res.status(200).send(`post: ${id}`);
});

const PORT = process.env.PORT || 8888;

app.listen(
  PORT,
  () => console.log(`listening on port ${PORT}`)
);
