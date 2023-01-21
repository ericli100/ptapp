import React, { createContext } from 'react';
import type { UserInfo } from '../../models/userInfo';
import useUserProfile from './useUserProfile';

export const UserContext = createContext<UserInfo>({
  nickName: '',
  user: undefined,
});

type Props = {
  children: React.ReactNode;
};

export function UserContextProvider({ children }: Props) {
  const userInfo = useUserProfile();

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
