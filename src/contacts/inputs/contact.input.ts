import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ContactInput {
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly message: string;
}
