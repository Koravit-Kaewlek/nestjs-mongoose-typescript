import { Product } from 'src/modules/product/schemas/product.schema';
import { IsString, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
export class CreateProductDto extends Product {
  @IsNotEmpty()
  @IsString()
  title;
}
