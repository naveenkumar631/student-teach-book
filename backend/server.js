const fastify = require('fastify')({ logger: true });
fastify.listen(3000, '0.0.0.0', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:3000`);
});
