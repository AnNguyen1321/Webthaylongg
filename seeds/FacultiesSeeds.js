
import FacultyModel from '../models/Faculty';
import { MongoError } from 'mongodb';

const Faculties = [
    { facultyname: 'Social Media Management Department' },
    { facultyname: 'Design Department' },
    { facultyname: 'Research and Content Development Department' },
    { facultyname: 'Digital Media Department' },
    { facultyname: 'Photography Department' },
    { facultyname: 'Event Planning Department'}
];

async function seedFaculties() {
    try {
        for (const Faculty of Faculties) {
            try {
                await FacultyModel.create(Faculty);
            } catch (error) {
                if (error instanceof MongoError && error.code === 11000) {
                } else {
                    throw error; 
                }
            }
        }
        console.log('Faculties seeded successfully');
    } catch (error) {
        console.error('Error seeding Faculties : ', error);
    } 
}
seedFaculties();
