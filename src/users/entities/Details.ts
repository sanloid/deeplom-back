import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Details')
export class Details {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'firstName' })
  firstName: string;

  @Column({ name: 'secondName' })
  secondName: string;

  @Column({ name: 'lastName' })
  lastName: string;

  @Column({ name: 'gender' })
  gender: string;

  @Column({ name: 'role' })
  role: string;

  @Column({ name: 'phoneNumber' })
  phoneNumber: string;

  @Column({ name: 'dateOfBirth' })
  dateOfBirth: Date;
}
