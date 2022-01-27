import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ContactType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly message: string;
}
