import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Words } from './words.entity';
import { CreateWordDto } from './dto/create-word.dto';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Words)
    private wordsRepository: Repository<Words>,
  ) {}

  create(createWordDto: CreateWordDto) {
    const word = this.wordsRepository.create(createWordDto);
    return this.wordsRepository.save(word);
  }

  findAll() {
    return this.wordsRepository.find();
  }
}
