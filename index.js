import express from 'express';
import bodyParser from 'body-parser';
import userRourter from './router/users.js';  // FIXED

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', userRourter);

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('Hello World!');
});

app.listen(port, () => 
  console.log(`server running on port : http://localhost:${port}`)
);
