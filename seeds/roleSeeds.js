
import Role from '../models/Role';
import { MongoError } from 'mongodb';

const roles = [
  { name: "Marketing Manager" },
  { name: "Marketing Coordinator" },
  { name: "Student" },
  { name: "Administrator" },
  { name: "Guest" }
];

async function seedRoles() {
    try {
        for (const role of roles) {
            try {
                await Role.create(role);
            } catch (error) {
                if (error instanceof MongoError && error.code === 11000) {
                } else {
                    throw error; 
                }
            }
        }
        console.log('Roles seeded successfully');
    } catch (error) {
        console.error('Error seeding roles:', error);
    } 
}
seedRoles();
