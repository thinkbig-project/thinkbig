import { CodeHelp, User } from './';

export interface Issue {
  id: string;
  userId: string;
  codeHelp?: CodeHelp[] | undefined;
  user: User;
}
