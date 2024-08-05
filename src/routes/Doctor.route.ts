import express, { Request, Response } from 'express';
import Doctor from '../db/models/Doctor'; // Adjust the import path according to your project structure

const doctorRoute = express.Router();

doctorRoute.use(express.json());

// GET all doctors
doctorRoute.get('/docget', async (req: Request, res: Response) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST a new doctor
doctorRoute.post('/docpost', async (req: Request, res: Response) => {
  const { doctorId, doctorName, specialty } = req.body;

  try {
    const newDoctor = await Doctor.create({ doctorId, doctorName, specialty });
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error('Error creating doctor:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update a doctor by their doctorId
doctorRoute.put('/docput/:doctorId', async (req: Request, res: Response) => {
  const { doctorId } = req.params;
  const { doctorName, specialty } = req.body;

  try {
    const doctorToUpdate = await Doctor.findOne({ where: { doctorId } });

    if (!doctorToUpdate) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    // Update only the fields provided
    if (doctorName) doctorToUpdate.doctorName = doctorName;
    if (specialty) doctorToUpdate.specialty = specialty;
    
    await doctorToUpdate.save();
    res.json(doctorToUpdate);
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE a doctor by their ID
doctorRoute.delete('/docdelete/:doctorId', async (req: Request, res: Response) => {
  const { doctorId } = req.params;

  try {
    const doctorToDelete = await Doctor.findByPk(doctorId);

    if (!doctorToDelete) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    await doctorToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

export default doctorRoute;
