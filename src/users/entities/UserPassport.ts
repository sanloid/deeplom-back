import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserPassport')
export class UserPassport {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  series: string;

  @Column()
  pasportNum: string;

  @Column()
  issuedBy: string;

  @Column()
  placeOfRegistration: string;

  @Column()
  dateOfIssue: Date;
}
