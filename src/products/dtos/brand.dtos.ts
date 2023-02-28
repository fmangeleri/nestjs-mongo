import {
  IsString,
  IsUrl,
  IsNotEmpty,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateStoreDto } from './stores.dtos';
import { Type } from 'class-transformer';

export class Stores {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly city: string;
}
export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => Stores)
  @ValidateNested()
  readonly stores: Stores[];
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
