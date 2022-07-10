import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Car from './models/cars.model';
import { CreateCarDto } from './dto/create-car.dto';
import { where } from 'sequelize';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car) private carModel: typeof Car) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    try {
      return this.carModel.create({
        name: createCarDto.name,
        vin: createCarDto.vin,
        active: createCarDto.active,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(): Promise<Car[]> {
    return this.carModel.findAll();
  }

  async delete(id: any): Promise<void> {
    console.log('====id=====');
    console.log(id);
    const car = await this.carModel.findByPk(id);
    const car1 = await this.carModel.findOne({ where: { id: id } });
    console.log(car);
    await car.destroy();
  }
}
