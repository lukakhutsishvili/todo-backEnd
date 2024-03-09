import bodyParser from "body-parser";
import express from "express";
import dotenv from 'dotenv';

//rato vwert ./?
import connectToMongo from './config/mongo.js'
import todoRouter from "./routes/todoRouter.js";
import SwaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", todoRouter)
app.use("/", ...SwaggerMiddleware());

app.listen(process.env.PORT || 3000);
