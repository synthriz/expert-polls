import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import websocket from '@fastify/websocket'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
    secret: "polls-app-nlw",
    hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

// a porta é a do local host
// e ai quando (then) o server entrar no ar, vai dar o console.log
app.listen({ port:3333 }). then(() => {
    console.log('HTTP server running!')
})

