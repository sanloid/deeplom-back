import { Adress } from '../entities/Adress';
import { Details } from '../entities/Details';
import { UserPassport } from '../entities/UserPassport';

export interface UpdateUserDto {
  id: number;
  details?: Details;
  adress?: Adress;
  userPassport?: UserPassport;
}
