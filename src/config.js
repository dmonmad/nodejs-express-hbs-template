import { config } from 'dotenv';
config();

export default {
    mongodbURL: process.env.DB_CONNECT || 'mongodb://localhost/exampledb',
    
};