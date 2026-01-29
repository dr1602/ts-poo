import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsUrl,
  Length,
  validate,
  validateOrReject,
} from 'class-validator';

import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<
  Category,
  'id' | 'slug' | 'creationAt' | 'updatedAt'
> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string; // el ! dice que lo inicializaremos luego

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'this is a name';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
