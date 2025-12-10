import express from 'express'
import bodyparser from 'bodyparser'

const app =express();
const port = 5000

app.use(bodyparser.json())

app.listen(port, () => console.log(`server running on port : http://localhost:${port}`));                