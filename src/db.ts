import {DataSource} from 'typeorm';
import {User}  from './database/entities/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "leonel",
    password: "1234",
    database: "comers-12-1-12",
    entities: [User],
    logging:true,
    
    
})