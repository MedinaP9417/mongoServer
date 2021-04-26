import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import router from './router';

const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

router(app);

export default app;