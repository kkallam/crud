import express from "express";
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/', userRoutes);
app.get('/', (req, res)=>{
    console.log(``);
    res.send('Hello from homepage');
});
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: http://localhost:${PORT}`);

});


