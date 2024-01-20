import { Issue } from './';

export interface User {
  id: String;
  name?: String | undefined;
  email: String;
  image?: String | undefined;
  createdAt: Date;
  updatedAt: Date;
  issues: Issue[];
}

