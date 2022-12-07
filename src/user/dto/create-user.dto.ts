import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUrl, Matches, MinLength } from "class-validator"

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de Usuário',
    example: 'Nubmaster69',
  })
  nickname: string


  @IsString()
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'Thor Odin Son',
  })
  name: string


  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string;


  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/05/Chris-Hensworth-thor-divulgacao.jpg',
  })
  image: string;

}
