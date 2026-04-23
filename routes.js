import fastifyStatic from '@fastify/static';
import path from 'path';
import {fileURlToPath} from 'url';

import {checkPolindrome} from "./utils.js"


const __dirname = path.dirname(fileURlToPath(import.meta.url));

async function router(fastify, opts) {
  // Declare a route
  fastify.get("/", (request, reply) => {
    reply.sendFile('index.html');
  });

  fastify.post('/api', (request, reply) => {
    const text =checkPolindrome(request.body.text);

    reply.send({status:'seccess'})
    
  })

  fastify.register(fastifyStatic, router, {
    root: __dirname,
  });

}

export default router;


