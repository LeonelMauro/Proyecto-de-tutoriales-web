import "reflect-metadata"
import app from './app_express';
import {AppDataSource} from './db'

async function main(){
    await AppDataSource.initialize();
    console.log('Data base conectada')
    app.listen(3000);
        console.log(`Server en el port 3000`)
    
}

main()


