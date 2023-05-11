import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { organizeTasks } from './organizeTasks';

const app = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('ToDo List Microservice is running. Send a POST request to /organize to use the service.');
});

app.post('/organize', async (req: Request, res: Response) => {
    const tasks = req.body;
    const sortDates = req.query.sortDates === 'true'; // A true value would sort the dates in order, a false value will just sort the tasks into the same date.
    const organizedTasks = organizeTasks(tasks, sortDates);
    res.send(organizedTasks);
});

export default app;
