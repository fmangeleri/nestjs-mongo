import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly country: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly city: string;
}

export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
