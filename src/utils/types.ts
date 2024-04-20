export enum AccountState {
  WAITING_VERIFICATION = "WAITING_VERIFICATION",
  VERIFIED = "VERIFIED",
  DISABLED = "DISABLED",
}
export interface Card {
  id: string;
  userId: string;
  balance: number;
  expiration: Date;
  permanentAccountNumber: number;
}
export interface User {
  id: string;
  email: string;
  login: string;
  password?: string | null;
  firstName: string;
  lastName: string;
  dadName: string;
  accountState: AccountState;
  card?: Card;
}
