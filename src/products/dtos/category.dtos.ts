import { IsString, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsUrl()
  readonly image: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
