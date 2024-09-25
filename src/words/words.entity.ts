import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Позначаємо клас як сутність для бази даних
export class Words {
  @PrimaryGeneratedColumn() // Автоматичний генератор ID
  id: number;

  @Column() // Колонка для збереження англійського слова
  word: string;

  @Column() // Колонка для збереження перекладу
  translation: string;
}
