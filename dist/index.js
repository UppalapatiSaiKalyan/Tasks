"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./logger"));
const app = (0, express_1.default)();
const port = 9944;
// Sample route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// Route that triggers an error
app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    next(err); // Passes the error to the error handling middleware
});
// Error handling middleware
app.use((err, req, res, next) => {
    logger_1.default.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});
// Start the server
app.listen(port, () => {
    logger_1.default.info(`Server running at http://localhost:${port}/`);
});
