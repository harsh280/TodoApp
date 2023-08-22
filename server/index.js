import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from '../server/routes/route.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',Routes);

Connection();
const PORT = 8000;
app.listen(PORT, () => console.log("Your server is running on PORT 8000"));