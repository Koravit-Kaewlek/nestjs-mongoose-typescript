import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  images: string;

  @Prop()
  isSold: boolean;

  @Prop()
  isActive: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
