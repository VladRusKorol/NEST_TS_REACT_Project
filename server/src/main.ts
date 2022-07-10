import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(); // подключаю переменные окружения
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');

/*Входная точка которая запускает приложение*/

//асинхронная функция обертка для старта приложения
const start = async () => {
  try {
    //на случай ошибки надо будет отловить
    const app = await NestFactory.create(AppModule); //данный класс методом креате реализует модуль приложения
    app.use(cors());
    await app.listen(process.env.SERVER_PORT, () => {
      console.log(`[...Server started on ${process.env.SERVER_PORT}...]`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
