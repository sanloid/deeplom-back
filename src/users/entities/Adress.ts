import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Adress')
export class Adress {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  area: string;

  @Column()
  street: string;

  @Column()
  houseNum: string;

  @Column()
  flat: string;
}
