import { Injectable } from '@nestjs/common';
import { table } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/createTable.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  findOne(id: string): Promise<Table> {
    return this.prisma.table.findUnique({
      where: {
        id,
      },
    });
  }
  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });
  }
}