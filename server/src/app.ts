import express, { Express } from "express"
import cors from "cors"
import * as bodyparser from 'body-parser';

import Routes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(cors())
app.use(Routes)

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);