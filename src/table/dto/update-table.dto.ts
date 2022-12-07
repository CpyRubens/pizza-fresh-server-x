import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto';

export class updateTableDto extends PartialType(CreateTableDto) {}
