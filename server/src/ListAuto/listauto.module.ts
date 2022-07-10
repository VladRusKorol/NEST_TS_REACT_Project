import { Module } from '@nestjs/common';
import { ListautoController } from './listauto.controller';
import { ListautoService } from './listauto.service';
import { SequelizeModule } from '@nestjs/sequelize';
import ListAuto from './models/listauto.model';

@Module({
  imports: [SequelizeModule.forFeature([ListAuto])],
  exports: [SequelizeModule],
  controllers: [ListautoController],
  providers: [ListautoService],
})
export class ListautoModule {}
