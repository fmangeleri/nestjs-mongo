import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Brand extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  image: string;

  @Prop({
    type: [
      {
        country: { type: String },
        city: { type: String },
      },
    ],
  })
  stores: Types.Array<Record<string, any>>;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
