import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'login' })
  login: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'firstName', nullable: true })
  firstName: string;

  @Column({ name: 'secondName', nullable: true })
  secondName: string;

  @Column({ name: 'lastName', nullable: true })
  lastName: string;

  @Column({ name: 'gender', nullable: true })
  gender: string;

  @Column({ name: 'role', nullable: true })
  role: string;

  @Column({ name: 'phoneNumber', nullable: true })
  phoneNumber: string;

  @Column({ name: 'dateOfBirth', nullable: true })
  dateOfBirth: Date;

  @Column({ name: 'country', nullable: true })
  country: string;

  @Column({ name: 'city', nullable: true })
  city: string;

  @Column({ name: 'area', nullable: true })
  area: string;

  @Column({ name: 'street', nullable: true })
  street: string;

  @Column({ name: 'houseNum', nullable: true })
  houseNum: string;

  @Column({ name: 'flat', nullable: true })
  flat: string;

  @Column({ name: 'series', nullable: true })
  series: string;

  @Column({ name: 'pasportNum', nullable: true })
  pasportNum: string;

  @Column({ name: 'issuedBy', nullable: true })
  issuedBy: string;

  @Column({ name: 'placeOfRegistration', nullable: true })
  placeOfRegistration: string;

  @Column({ name: 'dateOfIssue', nullable: true })
  dateOfIssue: Date;
}
