import express from "express";
import bodyParser from "body-parser";
import placesRoutes from './routes/routes.js';

const port = 5001;
const app = express();
app.use(bodyParser.json());
app.use('/api/cliente', placesRoutes )
app.use('/api/where2', placesRoutes )
app.use('/api/filtro', placesRoutes )

app.listen(port);
