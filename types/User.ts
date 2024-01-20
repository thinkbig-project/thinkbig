import { CodeHelp
 } from "./CodeHelp";

export interface User {
  name:       String | undefined;
  email:      String;
  image:      String | undefined;
  createdAt:  Date;
  updatedAt:  Date;
  session:    Session[];
  account:    Account[];
  codeHelp:   CodeHelp[] | undefined;
  id:         String;
}