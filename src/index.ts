import { Suppress } from '@denislit/supress'

const app = new Suppress()

app.get('/health', (_, res) => {
    console.log(`Handling GET request /health`)
    res.end(JSON.stringify('OK'))
})

app.listen(3000)
