import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Calabresa',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'Descricao do produto',
    example: 'Direto de Calabria ',
  })
  description: string;
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    description: 'Preco do produto',
    example: '49.90',
  })
  price: number;
  @IsUrl()
  @ApiProperty({
    description: 'Imagem do Produto',
    example: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-calabresa-6.jpg',
  })
  image: string;
}
