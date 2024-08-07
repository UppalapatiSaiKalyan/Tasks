import express, { Request, Response, NextFunction } from 'express';
import logger from './logger';

const app = express();
const port = 9944;

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Route that triggers an error
app.get('/error', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Something went wrong!');
  next(err); // Passes the error to the error handling middleware
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}/`);
});
