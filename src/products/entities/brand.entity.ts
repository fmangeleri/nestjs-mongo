import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Brand extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  image: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
