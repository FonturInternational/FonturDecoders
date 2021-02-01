import express , {Request , Response} from 'express';
import bodyParser from "body-parser";
import path from "path";
import * as decoders from './src/controllers/decoder';
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


app.post('/', (req: Request, res: Response)=>{
    console.log(decoders.voltage(req.body.data.substring(0,4)));
    console.log(decoders.status(req.body.data.substring(4,6)));
    console.log(decoders.headerId(req.body.data.substring(6,8)));
    res.sendStatus(200);
})

app.listen(PORT, ()=>{
    console.log(`🚀🚀  [server]: Server is running at https://localhost:${PORT}  🚀🚀`)
})