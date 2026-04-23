import Fastify from "fastify";
import router from "./routes.js"

const fastify = Fastify({
  logger: true,
});

fastify.require(router)

// Run the server!
fastify.listen({ port: 3000, host: "0.0.0.0"});

// npm install @fastify/static
