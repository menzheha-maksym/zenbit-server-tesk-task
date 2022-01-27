import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ContactsResolver {
  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
