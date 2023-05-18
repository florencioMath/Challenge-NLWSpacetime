import '@fastify/jwt';
import { string } from 'zod';

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string;
      name: string;
      avatarURL: string;
    };
  }
}
