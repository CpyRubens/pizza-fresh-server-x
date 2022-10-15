import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/createTable.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {

  tables:Table[]=[];

  findAll() {
    return this.tables;
  }
  create(createTableDto:CreateTableDto) {
    const table: Table={id:"random id", ...createTableDto};
    this.tables.push(table)
    return 'Criar uma mesa' + JSON.stringify(createTableDto)
  }
}
