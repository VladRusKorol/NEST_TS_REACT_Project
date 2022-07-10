import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import ListAuto from './models/listauto.model';
import { CreateListautoDto } from './dto/create-listauto.dto';

@Injectable()
export class ListautoService {
  constructor(
    @InjectModel(ListAuto) private listAutoModel: typeof ListAuto,
    private sequelize: Sequelize,
  ) {}

  async create(createListAutoDto: CreateListautoDto): Promise<ListAuto> {
    return this.listAutoModel.create({
      CarId: createListAutoDto.CarId,
      numberPlate: createListAutoDto.numberPlate,
      active: createListAutoDto.active,
    });
  }

  async getAll(): Promise<ListAuto[]> {
    console.log(this.listAutoModel.findAll());
    return this.listAutoModel.findAll();
  }

  /**
   * {
   *       attributes: [
   *         'id',
   *         [
   *           Sequelize.literal(
   *             `SELECT name FROM tab_Cars, tab_ListAuto WHERE tab_ListAuto.CarId=tab_Cars.id`,
   *           ),
   *           'CarId',
   *         ],
   *         'numberPlate',
   *         'active',
   *       ],
   *     }
   *
   *
   */

  async delete(id: any): Promise<void> {
    console.log('ID В сервисе');
    console.log(id);
    const listAuto = await this.listAutoModel.findOne({ where: { id: id.id } });
    await listAuto.destroy();
  }
}
