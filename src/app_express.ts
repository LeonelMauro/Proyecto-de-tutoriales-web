import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from "path";
import {router} from './routes';


const app = express()


app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);


app.use(express.static(path.join(__dirname, "..", "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));


export default app;