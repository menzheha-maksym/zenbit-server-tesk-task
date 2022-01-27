import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ContactsService } from './contact.service';
import { ContactInput } from './inputs/contact.input';
import { ContactType } from './types/contact.type';

@Resolver()
export class ContactsResolver {
  constructor(private readonly contactsService: ContactsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [ContactType])
  async contacts() {
    return this.contactsService.findAll();
  }

  @Mutation(() => ContactType)
  async createContact(@Args('input') input: ContactInput) {
    return this.contactsService.create(input);
  }
}
