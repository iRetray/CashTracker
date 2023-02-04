import { Category } from './Category';

export interface CategoryForUser extends Category {
  cash: number;
  isUsed: boolean;
}
