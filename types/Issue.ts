import { User } from './';

export interface Issue {
  id: string;
  userId: string;
  type: string;
  tags: string[];
  repository?: string;
  files?: string;
  expected?: string;
  unexpected?: string;
  reproduce?: string;
  attempted?: string;
  user: User;
}
