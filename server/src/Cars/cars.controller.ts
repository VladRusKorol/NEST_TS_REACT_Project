import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import Car from './models/cars.model';

@Controller('/cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carService.create(createCarDto);
  }

  @Get()
  getAll(): Promise<Car[]> {
    return this.carService.getAll();
  }

  @Delete()
  delete(@Body() body: any): Promise<void> {

    console.log('!!!!!!!BODY');
    console.log(JSON.stringify(body));
    return this.carService.delete(body.Id);
  }
}
