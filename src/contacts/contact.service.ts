import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { ContactInput } from './inputs/contact.input';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async findOne(id: string): Promise<Contact> {
    return this.contactRepository.findOne(id);
  }

  async create(contactInput: ContactInput): Promise<Contact> {
    const createdContact = await this.contactRepository.save(contactInput);
    return createdContact;
  }
}
