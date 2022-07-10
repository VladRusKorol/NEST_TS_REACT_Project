import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ListautoService } from './listauto.service';
import { CreateListautoDto } from './dto/create-listauto.dto';
import ListAuto from './models/listauto.model';

@Controller('/listauto')
export class ListautoController {
  constructor(private readonly listautoServise: ListautoService) {}

  @Post()
  create(@Body() createListAutoDto: CreateListautoDto): Promise<ListAuto> {
    return this.listautoServise.create(createListAutoDto);
  }

  @Get()
  getAll(): Promise<ListAuto[]> {
    return this.listautoServise.getAll();
  }

  @Delete()
  delete(@Body() id: any): Promise<void> {
    console.log('ID В контолллере');
    console.log(id);
    return this.listautoServise.delete(id);
  }
}
