import dotenv from 'dotenv';
dotenv.config();
import connectDB from '../config/db.mjs';
import ClassModel from '../models/Class.mjs';

const demoClasses = [
  { name: 'Crèche', code: 'CR-01', grade: 'Crèche', subject: 'General' },
  { name: 'Kindergarten 1', code: 'KG1-01', grade: 'KG1', subject: 'General' },
  { name: 'Kindergarten 2', code: 'KG2-01', grade: 'KG2', subject: 'General' },
  { name: 'Grade 1', code: 'G1-01', grade: 'Grade 1', subject: 'General' },
  { name: 'Grade 2', code: 'G2-01', grade: 'Grade 2', subject: 'General' },
  { name: 'Grade 3', code: 'G3-01', grade: 'Grade 3', subject: 'General' },
  { name: 'Grade 4', code: 'G4-01', grade: 'Grade 4', subject: 'General' },
  { name: 'Grade 5', code: 'G5-01', grade: 'Grade 5', subject: 'General' },
  { name: 'Grade 6', code: 'G6-01', grade: 'Grade 6', subject: 'General' },
  { name: 'Grade 7', code: 'G7-01', grade: 'Grade 7', subject: 'General' },
  { name: 'Grade 8', code: 'G8-01', grade: 'Grade 8', subject: 'General' },
  { name: 'Grade 9', code: 'G9-01', grade: 'Grade 9', subject: 'General' },
];

const seed = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    
    for (const classData of demoClasses) {
      const exists = await ClassModel.findOne({ code: classData.code });
      if (exists) {
        console.log(`Class ${classData.code} already exists`);
        continue;
      }
      
      const createdClass = await ClassModel.create(classData);
      console.log(`Class created:`, createdClass.name, `(${createdClass.code})`);
    }
    
    console.log('Class seeding completed!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seed();
