const server = require('./server');

const port = process.env.API_PORT || 8580;
server.listen({ port }, () => {
  console.log(`Running at http://localhost:${port}`)
});

