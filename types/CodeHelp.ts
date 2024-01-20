export interface CodeHelp {
  id:         String;
  userId:     String;
  type:       String;
  tags:       String[];
  repository: String;
  files:      String;
  expected:   String;
  unexpected: String;
  reproduce:  String;
  attempted:  String;
  user:       User;