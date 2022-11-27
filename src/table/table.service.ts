import { Injectable, NotFoundException } from '@nestjs/common';
import { table } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/createTable.dto';
import { updateTableDto } from './dto/updateTable.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Table> {
    return this.findById(id);
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });
  }

  async update(id: string, dto: updateTableDto): Promise<Table> {
    await this.findById(id);

    const data: Partial<Table> = { ...dto };

    return this.prisma.table.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.table.delete({
      where: {
        id,
      },
    });
  }
}
