require('dotenv').config(); // подключаю переменные окружения
import {Module} from "@nestjs/common";
import {CarsModule} from "./Cars/cars.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {ListautoModule} from "./ListAuto/listauto.module";
import Car from "./Cars/models/cars.model";
import ListAuto from "./ListAuto/models/listauto.model";
import {Dialect} from "sequelize";

@Module({
    imports:
    [
        ListautoModule,
        CarsModule,
        SequelizeModule.forRoot({
            dialect: process.env.DATABASE_DIALECT as Dialect,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT as undefined,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            autoLoadModels: true,
            synchronize: true,
            models:[Car,ListAuto],
            logQueryParameters:true
        })
    ]
})
export class AppModule{

}