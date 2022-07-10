import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { SequelizeModule } from '@nestjs/sequelize';
import Car from './models/cars.model';

@Module({
  imports: [SequelizeModule.forFeature([Car])],
  exports: [SequelizeModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
