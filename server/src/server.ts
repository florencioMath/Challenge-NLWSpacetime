import 'dotenv/config';

import fastify from 'fastify';
import cors from '@fastify/cors';
import { memoriesRoute } from './routes/memories';
import { authRoutes } from './routes/auth';

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(memoriesRoute);
app.register(authRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP Server running on http://localhost:3333');
  });
