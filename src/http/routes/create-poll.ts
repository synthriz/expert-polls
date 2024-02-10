import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

// precisa ser assincrona senao o fastify entra em loop
export async function createPoll(app: FastifyInstance) {
  //localhost:3333/polls
  app.post("/polls", async (request, reply) => {
    //estrutura que espero que o request body tenha
    const createPollBody = z.object({
      title: z.string(),
      options: z.array(z.string()),
    });

    // confere se o request.body esta na mesma estrutura que declarado anteriormente, caso nao, dá erro
    const { title, options } = createPollBody.parse(request.body);

    const poll = await prisma.poll.create({
      data: {
        title,
        options: {
          createMany: {
            //array de opções, pra cada opção retorna um objeto com os seguintes parametros que o banco espera
            data: options.map((option) => {
              return { title: option };
            }),
          },
        },
      },
    });

    return reply.status(201).send({ pollId: poll.id });
  });
}
