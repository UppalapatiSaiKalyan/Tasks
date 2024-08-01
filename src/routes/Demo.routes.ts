import express, { Request, Response } from 'express';
import Employee from '../db/models/Demo';

const employeeRouter = express.Router();

// Middleware
employeeRouter.use(express.json());

// Get all employees
employeeRouter.get('/empget', async (req: Request, res: Response) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Add a new employee
employeeRouter.post('/emppost', async (req: Request, res: Response) => {
    const { name, email, department } = req.body;

    try {
        const newEmployee = await Employee.create({ name, email, department });
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Update an existing employee
employeeRouter.put('/empput/:employeeId', async (req: Request, res: Response) => {
    const { employeeId } = req.params;
    const { name, email, department } = req.body;

    try {
        const employeeToUpdate = await Employee.findByPk(employeeId);

        if (!employeeToUpdate) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        employeeToUpdate.name = name;
        employeeToUpdate.email = email;
        employeeToUpdate.department = department;

        await employeeToUpdate.save();
        res.json(employeeToUpdate);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Delete an employee
employeeRouter.delete('/empdel/:employeeId', async (req: Request, res: Response) => {              
    const { employeeId } = req.params;

    try {
        const employeeToDelete = await Employee.findByPk(employeeId);

        if (!employeeToDelete) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        await employeeToDelete.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default employeeRouter;
