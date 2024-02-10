import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const app = fastify()

const prisma = new PrismaClient()

//localhost:3333/polls
app.post('/polls', async (request, reply) => {
    //estrutura que espero que o request body tenha
    const createPollBody = z.object({
        title: z.string()
    })

    // confere se o request.body esta na mesma estrutura que declarado anteriormente, caso nao, dá erro
    const { title } = createPollBody.parse(request.body)

    const poll = await prisma.poll.create({
        data: {
            title,
        }
    })

    return reply.status(201).send({ pollId: poll.id })
})

// a porta é a do local host
// e ai quando (then) o server entrar no ar, vai dar o console.log
app.listen({ port:3333 }). then(() => {
    console.log('HTTP server running!')
})

