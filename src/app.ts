import express from 'express';
import languageRoute from './routes/crud.routes';
import sequelizeconnection from './db/config'; // Adjust this path as needed

const app = express();
const port = 9944;

// Middleware to parse JSON
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Basic route
app.get('/', (req, res) => {
    console.log('GET / called');
    res.send("Hello World");
});

// Register routes
app.use('/api', languageRoute);

// Start the server and connect to the database
sequelizeconnection.authenticate()
    .then(() => {
        console.log('Database connected...');
        return sequelizeconnection.sync({ alter: true });
    })
    .then(() => {
        console.log('Database & tables created!');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err: Error) => {
        console.error('Unable to connect to the database:', err);
    });
