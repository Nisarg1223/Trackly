import express from 'express';
import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import analyticsRouter from "./routes/analytics.routes.js";
import projectRouter from './routes/project.routes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
}));


//authentication
app.use('/api/auth',authRouter);
// create project api
app.use("/api/projects", projectRouter);
app.use('/api/analytics',analyticsRouter);

export default app;