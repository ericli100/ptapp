import { User } from '@auth0/auth0-react';

export type UserInfo = {
  nickName: string;
  user: User | undefined;
};
