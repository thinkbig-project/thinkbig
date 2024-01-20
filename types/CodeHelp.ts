import { Issue } from './Issue';

export interface CodeHelp {
  id: String;
  issueId: String;
  type: String;
  tags: String[];
  repository: String;
  files: String;
  expected: String;
  unexpected: String;
  reproduce: String;
  attempted: String;
  issue: Issue;
}
