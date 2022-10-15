import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  findAll() {
    return 'Buscar Todas a Mesas';
  }
  create() {
    return 'Criar uma mesa';
  }
}
