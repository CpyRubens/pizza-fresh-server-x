import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTableDto } from './dto/createTable.dto';
import { Table } from './entities/table.entity';
import { TableService } from './table.service';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary:"Listar todas as mesas"
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }
  @Get(':id')
  @ApiOperation({
    summary:"Listar mesa por Id"
  })
  findOne(@Param('id') id:string):Promise<Table>{
    return this.tableService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary:"Criar mesa"
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }
}
