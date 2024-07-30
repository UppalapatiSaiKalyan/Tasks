import express, { Router, Request, Response } from 'express';
import Crud from '../db/models/crud'; // Adjust the path as necessary
import logger from '../middleware/middleware';

const languageRoute = Router();

languageRoute.use(express.json());
languageRoute.use(logger);

languageRoute.get('/langget', async (req: Request, res: Response) => {
    console.log('GET /langget called');
    try {
        const languages = await Crud.findAll();
        res.json(languages);
    } catch (error) {
        console.error('Error fetching languages:', error);
        res.status(500).json({ error: (error as Error).message });
    }
});

languageRoute.post('/langpost', async (req: Request, res: Response) => {
    console.log('POST /langpost called with data:', req.body);
    const { id, languagename, languagecode } = req.body;

    try {
        const newLanguage = await Crud.create({ id, languagename, languagecode });
        res.status(201).json(newLanguage);
    } catch (error) {
        console.error('Error creating language:', error);
        res.status(500).json({ error: (error as Error).message });
    }
});

export default languageRoute;
